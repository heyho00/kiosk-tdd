import { useState } from 'react';
import { Restaurnant } from '../types/restaurants';

function useFilteredRestaurant(
  defaultCategory: string,
  restaurants: Restaurnant[],
  shopName: string,
) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const filteredRestaurant = selectedCategory === '전체'
    ? restaurants.filter((s: Restaurnant) => s.name.includes(shopName))
    : restaurants.filter((s: Restaurnant) => (
      s.category === selectedCategory && s.name.includes(shopName)
    ));

  return { setSelectedCategory, filteredRestaurant };
}
export default useFilteredRestaurant;
