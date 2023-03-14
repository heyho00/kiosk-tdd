import { Dispatch, SetStateAction } from 'react';

interface SearchProps {
    shopName: string,
    setShopName: Dispatch<SetStateAction<string>>
    }

export default function SearchInput({ shopName, setShopName }:SearchProps) {
  return (
    <div style={{ marginTop: 30 }}>
      <label htmlFor="input-검색" style={{ paddingRight: '1rem' }}>
        검색
      </label>

      <input
        id="input-검색"
        type="text"
        placeholder="식당 이름"
        value={shopName}
        onChange={(e) => setShopName(e.target.value.trim())}
      />
    </div>
  );
}
