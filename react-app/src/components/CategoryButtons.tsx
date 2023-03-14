import { Dispatch, SetStateAction } from 'react';
import { Restaurnant } from '../types/restaurants';

interface CategoryProps {
    restaurants: Restaurnant[],
    setSelectedCategory:Dispatch<SetStateAction<string>>
}

export default function CategoryButtons({ restaurants, setSelectedCategory }:CategoryProps) {
  const categoryNames = [
    '전체',
    ...new Set(restaurants?.map((shop: { category: string; }) => shop.category)),
  ];

  return (
    <ul style={{ display: 'flex', padding: 0, listStyle: 'none' }}>
      {categoryNames.map((name) => (
        <li key={name} style={{ marginRight: '1rem' }}>
          <button type="button" onClick={() => setSelectedCategory(name)}>{name}</button>
        </li>
      ))}
    </ul>
  );
}
