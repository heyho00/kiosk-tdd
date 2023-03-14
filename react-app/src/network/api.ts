import { Menu } from '../types/restaurants';

export default function order(carts:Menu[], totalPrice:number) {
  return fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      menu: carts,
      totalPrice,
    }),
  })
    .then((res) => res.json());
}
