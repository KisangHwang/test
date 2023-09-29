import { ProductDetailOb } from "../../pages/types";

export interface HeaderProps {
    handleAllCheck: (c:boolean) => void;
    isAllChecked: boolean;
}

export interface CartListProps {
    cart: ProductDetailOb;
    handleQuantity: (type: string, id: number, quantity: number) => void;
    handleRemove: (id: number) => void;
    handleCheckList: (checked: boolean, id: number) => void;
    checkList: number[];
}

export interface TotalCartProps {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    checkedItems: ProductDetailOb[][];
}