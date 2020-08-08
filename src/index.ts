import express from 'express';
import bodyParser from 'body-parser';
import kakaoSearchKeyword from './search/place/kakaoSearchKeyword';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req: any, res: any) => res.send('Hello World!'));

// fixme kakao API와 동일하게 get 사용하도록 해보자.
app.get('/search/place/:keyword/:lat/:lng', (req: any, res: any) => {
    const { keyword, lat, lng } = req.params;
    kakaoSearchKeyword(keyword, lat, lng);
    res.send('Hello World!asdfasf');
});

app.post('/search/place', (req, res) => {
    console.log('%creq.body', 'color:red', req.body);
    const { keyword, lat, lng } = req.body;
    // TODO 한글 keyword 검색 가능해야 함
    kakaoSearchKeyword(keyword, lat, lng);
    res.send('Hello World!asdfasf');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));




// lint testing
const foo = (arg1: any, arg2: any) => {
    const a = 'a';
    const obj = {
        a: 'a',
        b: 2,
    };
    const arr = Object.keys(obj);
    console.log(arr, a);
    const arr2 = [ 1, 3, 4 ].map((item, index) => {
        if (true || a !== 'a') {
        } else if (false) {
        } else {
            const asd = '';
            [ 1, 2, 3 ].map(item => item * 2);
        }

        return `${item + index}`;
    });
    const [ q, w, e ] = arr2;
    const { a: asdf } = obj;
    const asfsdf = (1 + 5) / 12;

    // 아 아 아 아 아    테스트
    const obj2 = {
        aasf: 1,
        b   : 2,
    };
    const objbjbjb = { a: 1, b: 3, d: { abb: 1, dsf: { ss: 'a' } } };

    const arrrrr = [ 123, 434 ];

    return {};
};

foo(1, 2);

type aa = 'tetet' | 'tet' | 'wer' | '12' | number;
type asdf = number | string;

interface Itest {
    asdfsadf: string,
    ss?: boolean,
    oo: {
        asdf: number,
        wew: {
            wer: string,
        },
    },
}

interface Aaaaa extends Itest {
    erer: any,
}

enum TestEnum {
    ASDF = 11,
    WRWER,
    ASDFasd = 'ASDF',
}
