import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import Carts from '../components/Carts';
import SearchInput from '../components/SearchInput';
import CategoryButtons from '../components/CategoryButtons';
import RestaurantList from '../components/RestaurantList';
import Receipt from '../components/Receipt';

import useFilteredRestaurant from '../hooks/useFilteredRestaurant';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import { Menu, ReceiptProps } from '../types/restaurants';
import order from '../network/api';

export default function Kiosk() {
  const [shopName, setShopName] = useState('');

  const restaurants = useFetchRestaurants();
  const { setSelectedCategory, filteredRestaurant } = useFilteredRestaurant('전체', restaurants, shopName);
  const [carts, setCarts] = useLocalStorage<Menu[]>('carts', []);
  const [receipt, setReceipt] = useLocalStorage<ReceiptProps>('receipts', {
    id: '',
    menu: [],
    totalPrice: 0,
  });

  const totalPrice = carts.reduce((a, b) => a + b.price, 0);
  const addCart = (item: Menu) => {
    setCarts([...carts, item]);
  };

  const cancelOrder = (idx: number) => {
    carts.splice(idx, 1);
    setCarts(carts);
  };

  const onClickOrder = () => {
    order(carts, totalPrice)
      .then((res:ReceiptProps) => setReceipt(res));
  };

  const endReceipt = () => {
    setReceipt({
      id: '',
      menu: [],
      totalPrice: 0,
    });
    setCarts([]);
  };

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <h2>Cart</h2>

      <Receipt
        receipt={receipt}
        endReceipt={endReceipt}
      />

      <Carts
        carts={carts}
        totalPrice={totalPrice}
        cancelOrder={cancelOrder}
        onClickOrder={onClickOrder}
        setCarts={setCarts}
      />

      <SearchInput
        shopName={shopName}
        setShopName={setShopName}
      />

      <CategoryButtons
        restaurants={restaurants}
        setSelectedCategory={setSelectedCategory}
      />

      <RestaurantList
        filteredRestaurant={filteredRestaurant}
        addCart={addCart}
      />

      <div style={{ color: '#e5e5e5' }}>영수증 나오는 곳</div>

    </>
  );
}
