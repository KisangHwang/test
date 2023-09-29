import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { recentOrder, rowPriceOrder, highPriceOrder } from "@/store/features/productSlice";

export const Main = () => {
  const {products} = useSelector((state:RootState) => state.products);
  const dispatch = useAppDispatch();

  return (
    <>
      <EventBanner />
      <div className={styles.filter}>
        <p
          onClick={() => {
            dispatch(recentOrder());
          }}
        >
          최신순
        </p>
        <p
          onClick={() => {
            dispatch(rowPriceOrder());
          }}
        >
          낮은 가격
        </p>
        <p
          onClick={() => {
            dispatch(highPriceOrder());
          }}
        >
          높은 가격
        </p>
      </div>
      <main className={styles.flex_wrap}>
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              product={product}
            />
          );
        })}
      </main>
    </>
  );
};
