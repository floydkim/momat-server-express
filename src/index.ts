import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const foo = () => {
    const a = 'a';
    const obj = {
        a: 'a',
        b: 2,
    };
    const arr = Object.keys(obj);
    console.log(arr, a);
    const arr2 = [1, 3, 4];

    const obj2 = { a: 1 };

    return {};
};

foo();
