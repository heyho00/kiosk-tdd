import { Menu, Restaurnant } from '../types/restaurants';
import MenuList from './MenuList';

interface RestauProps {
    filteredRestaurant:Restaurnant[],
    addCart:(item: Menu) => void
}

export default function RestaurantList({ filteredRestaurant, addCart }:RestauProps) {
  const onRenderRestaurantRow = () => filteredRestaurant
    .map((shop: Restaurnant) => (
      <MenuList key={shop.id} shop={shop} addCart={addCart} />
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ paddingInline: '2rem' }}>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>

        <tbody>
          {onRenderRestaurantRow()}
        </tbody>
      </table>
    </div>
  );
}
