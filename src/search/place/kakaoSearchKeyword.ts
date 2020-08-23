import axios from 'axios';
import { KAKAO_REST } from '../../../keys';
import { RequestHandler } from 'express';

const AXKakao = axios.create({
    baseURL: 'https://dapi.kakao.com/v2/local/search/',
    headers: {
        'Authorization': KAKAO_REST,
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
});

type KakaoSearchKeyword = RequestHandler<{keyword: string, latitude: string, longitude: string}>;

const kakaoSearchKeyword: KakaoSearchKeyword = async (req, res) => {
    try {
        const { keyword, latitude, longitude } = req.params;
        console.log('%creq.params', 'color:red', req.params);

        if (Number.isNaN(Number(latitude)) || Number.isNaN(Number(longitude))){
            // fixme: 일반 에러보다는, 잘못된 입력을 나타내는 에러 인스턴스 필요
            throw new Error('invalid latitude/longitude');
        }

        const y = latitude || '37.514322572335935';
        const x = longitude || '127.06283102249932';
        const RADIUS = 2000;
        const keywordEncoded = encodeURIComponent(keyword);

        const url = `/keyword.json?query=${keywordEncoded}&y=${y}&x=${x}&radius=${RADIUS}`;

        const result = await AXKakao.get<KakaoSearchPlaceResponse>(url);

        console.log('KAKAO RESULT', result);

        // todo pagination 지원

        const responseBody = result.data.documents.map(item => ({
            x                : item.x,
            y                : item.y,
            distance         : item.distance,
            id               : item.id,
            road_address_name: item.road_address_name,
            place_name       : item.place_name,
        }));

        res.send(responseBody);
    } catch (exception) {
        // todo: error handling (kakao api 응답 에러 고려해야함)
        console.log('%cexception', 'color:red', exception);
        res.status(500).send('서버 내부 에러');
    }
};

export default kakaoSearchKeyword;


interface KakaoSearchPlaceResponse {
    documents: Array<{
        address_name: string,
        category_group_code: string,
        category_group_name: string,
        category_name: string,
        distance: string,
        id: string,
        phone: string,
        place_name: string,
        place_url: string,
        road_address_name: string,
        x: string,
        y: string,
    }>,
    meta: {
        is_end: boolean,
        pageable_count: number,
        same_name: {
            keyword: string,
            region: Array<any>,
            selected_region: string,
        },
        total_count: number,
    },
}
