import axios from 'axios';
import { KAKAO_REST } from '../../../keys';

const AXKakao = axios.create({
    baseURL: 'https://dapi.kakao.com/v2/local/search/',
    headers: {
        'Authorization': KAKAO_REST,
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
});

const kakaoSearchKeyword = async (keyword: string, lat: number, lng: number) => {
    console.log('%ckeyword, lat, lng', 'color:red', keyword, lat, lng);

    const y = lat || 37.514322572335935;
    const x = lng || 127.06283102249932;
    const RADIUS = 2000;

    try {
        const url = `/keyword.json?query=${keyword}&y=${y}&x=${x}&radius=${RADIUS}`;
        console.log('%curl', 'color:red', url);
        const result = await AXKakao.get(url);

        console.log('KAKAO RESULT', result);

    } catch(exception) {
        console.log('kakao exception', exception);
    }
};

export default kakaoSearchKeyword;
