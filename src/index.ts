import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

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
