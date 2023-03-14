import { Fragment } from 'react';
import { useInterval } from 'usehooks-ts';
import { Menu, ReceiptProps } from '../types/restaurants';

interface Receipt {
  receipt:ReceiptProps|undefined,
 endReceipt:()=>void
}

export default function ReceiptIndex({ receipt, endReceipt }:Receipt) {
  useInterval(endReceipt, receipt?.menu.length ? 3000 : null);

  return receipt?.menu.length ? (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      width: '100%',
      height: '60%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: 30,
    }}
    >
      <div>receipt</div>

      <div>주문번호</div>
      <div style={{ marginBottom: 30 }}>{receipt?.id}</div>

      <div>주문 목록</div>
      {receipt.menu?.map((item:Menu) => (
        <Fragment key={item.id}>
          <div style={{ marginBottom: 10 }}>{item.name}</div>
          <div>{item.price}</div>
        </Fragment>
      ))}

      <div style={{ marginTop: 60 }}>
        총 가격:
        {' '}
        {receipt.totalPrice.toLocaleString()}
        원
      </div>

    </div>
  ) : <div />;
}
