import { useState } from "react";
import styles from "./cart.module.css";
import { CartHeader } from "./cartHeader";
import { CartList } from "./cartList";
import { TotalCart } from "./totalCart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { changeCart, removeCart } from "@/store/features/cartSlice";
import { addCheck, removeCheck } from "@/store/features/checkSlice";

export const Cart = () => {
  const [total, setTotal] = useState<number>(0);
  const { carts } = useSelector((state: RootState) => state.carts);
  const { check } = useSelector((state: RootState) => state.check);
  const dispatch = useDispatch();

  const handleQuantity = (type: string, id: number, quantity: number) => {
    const found = carts.filter((item) => item.id === id)[0];
    const idx = carts.indexOf(found);
    // const router = useRouter();
    // const data = router.query;

    const cartItem = {
      id: found.id,
      image: found.image,
      price: found.price,
      name: found.name,
      provider: found.provider,
      quantity: quantity,
    };

    if (type === "plus") {
      dispatch(
        changeCart([...carts.slice(0, idx), cartItem, ...carts.slice(idx + 1)])
      );
    } else {
      if (quantity === 0) return;
      dispatch(
        changeCart([...carts.slice(0, idx), cartItem, ...carts.slice(idx + 1)])
      );
    }
  };

  const handleRemove = (id: number) => {
    dispatch(removeCart(id));
    dispatch(removeCheck(id));
  };

  const handleCheckList = (checked: boolean, id: number) => {
    if (checked) {
      dispatch(addCheck([...check, id]));
    } else {
      dispatch(removeCheck(id));
    }
  };

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const checkItems:number[] = [];
      carts.map(item => checkItems.push(item.id));
      dispatch(addCheck(checkItems));
    } else {
      dispatch(addCheck([]));
    }
  };

  const isAllChecked = carts.length === check.length && check.length !== 0;

  const checkedItems = check.map((check) =>
    carts.filter((item) => item.id === check)
  );

  return (
    <>
      <header className={styles.header}>
        <h1>장바구니</h1>
      </header>
      <CartHeader
      handleAllCheck={handleAllCheck}
      isAllChecked={isAllChecked}
      />
      {carts.length === 0 ? (
        <div className={styles.not}>
          <h2>장바구니에 담긴 상품이 없습니다.</h2>
          <p>원하는 상품을 장바구니에 담아보세요!</p>
        </div>
      ) : (
        carts.map((cart, index) => {
          return (
            <CartList
            key={index}
            cart={cart}
            // convertPrice={convertPrice}
            handleQuantity={handleQuantity}
            handleRemove={handleRemove}
            handleCheckList={handleCheckList}
            checkList={check}
            />
          );
        })
      )}
      {carts.length === 0 ? (
        ""
      ) : (
        <TotalCart
        total={total}
        setTotal={setTotal}
        checkedItems={checkedItems}
        />
      )}
    </>
  );
};
