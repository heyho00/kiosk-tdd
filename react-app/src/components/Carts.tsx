import { Dispatch, SetStateAction } from 'react';
import { Menu } from '../types/restaurants';

interface CartsProps {
    carts: Menu[],
    totalPrice : number,
    cancelOrder: (idx: number) => void,
    onClickOrder:()=>void,
    setCarts: Dispatch<SetStateAction<Menu[]>>
}

export default function Carts({
  carts, totalPrice, cancelOrder, onClickOrder, setCarts,
}:CartsProps) {
  return carts.length ? (
    <div style={{ border: '1px solid teal', padding: 10 }}>
      <ul>
        {carts.map((item, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={idx} style={{ marginBottom: 10 }}>
            {item.name}
            {' '}
            {item.price}
            원
            <button type="button" onClick={() => cancelOrder(idx)}>취소</button>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', fontSize: 20 }}>
        <button type="button" style={{ fontSize: 20 }} onClick={onClickOrder}>
          합계:
          {' '}
          {totalPrice.toLocaleString()}
          원 주문
        </button>
        <button type="button" style={{ fontSize: 20 }} onClick={() => setCarts([])}>
          전체 주문 취소
        </button>
      </div>
    </div>
  ) : <div />;
}
