export interface Menu {
  id: string,
  name: string,
  price: number
}

export interface Restaurnant {
    id:string,
    category:string,
    name:string,
    menu: Menu[]
}

export type ReceiptProps = {
  id: string;
  menu: Menu[]
  totalPrice: number;
};
