import axios from 'axios';
import { KAKAO_REST } from '../../../keys';

const AXKakao = axios.create({
    baseURL: 'https://dapi.kakao.com/v2/local/search/',
    headers: {
        'Authorization': KAKAO_REST,
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
});

const kakaoSearchKeyword = async (keyword: string, latitude: number | string, longitude: number | string) => {
    const y = latitude || 37.514322572335935;
    const x = longitude || 127.06283102249932;
    const RADIUS = 2000;

    const keywordEncoded = encodeURI(keyword);

    try {
        const url = `/keyword.json?query=${keywordEncoded}&y=${y}&x=${x}&radius=${RADIUS}`;

        // todo: kakao API Error Handling
        const result = await AXKakao.get<KakaoSearchPlaceResponse>(url)
            .catch(error => {
                // fixme: 체이닝 대신 catch block으로 보낼 수 없나?
                console.log('%cerror.toJSON()', 'color:red', error.toJSON());
                throw new Error('KAKAO_API_ERROR');
            });

        console.log('KAKAO RESULT', result);

        return result;

    } catch(exception) {
        console.log('kakao exception', exception);
        throw new Error('kakaoSearchKeyword ERROR');
    }
};

export default kakaoSearchKeyword;


interface KakaoSearchPlaceResponse {
    data: {
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
    },
}
