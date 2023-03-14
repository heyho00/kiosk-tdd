import express from 'express';
import cors from 'cors';

const restaurants = [
  {
    id: '1',
    category: '중식',
    name: '메가반점',
    menu: [
      { id: '1', name: '짜장면', price: 8000 },
      { id: '2', name: '짬뽕', price: 8000 },
      { id: '3', name: '차돌짬뽕', price: 9000 },
      { id: '4', name: '탕수육', price: 14000 },
    ],
  },
  {
    id: '2',
    category: '한식',
    name: '메리김밥',
    menu: [
      { id: '5', name: '김밥', price: 3500 },
      { id: '6', name: '참치김밥', price: 4500 },
      { id: '7', name: '제육김밥', price: 5000 },
      { id: '8', name: '훈제오리김밥', price: 5500 },
    ],
  },
  {
    id: '3',
    category: '일식',
    name: '혹등고래카레',
    menu: [
      { id: '9', name: '기본카레', price: 9000 },
      { id: '10', name: '가라아게카레', price: 14000 },
      { id: '11', name: '소시지카레', price: 13000 },
      { id: '12', name: '돈까스카레', price: 14000 },
      { id: '13', name: '닭가슴살카레', price: 13000 },
    ],
  },
];

const port = 3000;
const app = express();

app.use(cors());
// express를 설치했다면 body-parser가 필요 없다. 애만 있으면 됨.
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
// extended가 true면 외부 parser를 사용, false면 사용하지 않음을 의미합니다.
// express에 있는 내장 파서를 사용하므로 false 값을 줍시다

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/restaurants', (_, res) => {
  res.status(200).send(restaurants);
});

app.post('/orders', (req, res) => {
  req.body.id = Date.now().toString();
  res.status(200).send(req.body);
});
