import { Menu, Restaurnant } from '../types/restaurants';

interface MenuProps {
    shop:Restaurnant
    addCart:(item: Menu) => void
}

export default function MenuList({ shop, addCart }:MenuProps) {
  const {
    name, category, menu,
  } = shop;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <ul>
          {menu?.map((item) => (
            <li key={item.id} style={{ display: 'flex', marginBottom: 10 }}>
              <span style={{ marginRight: 10 }}>{item.name}</span>
              <button name={`#${item.name}`} type="button" onClick={() => addCart(item)}>PICK</button>
            </li>
          ))}
        </ul>
      </td>
    </tr>

  );
}
