import { useRouter } from "next/router";
import styles from "./detail.module.css";
import { useEffect, useState } from "react";
import { getProduct } from "../../service/fetcher";
import { ProductDetailOb } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { convertPrice } from "@/service/priceConverter";
import { RootState } from "@/store";
import { addCart, changeCart } from "@/store/features/cartSlice";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [product, setProduct] = useState({} as ProductDetailOb);
  const [count, setCount] = useState(1);
  const { carts } = useSelector((state: RootState) => state.carts);
  const dispatch = useDispatch();

  const handleQuantity = (type: string) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  const handleCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      provider: product.provider,
      price: product.price,
      quantity: count,
    };

    const found = carts.find((item) => item.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else dispatch(addCart([...carts, cartItem]));
  };

  const setQuantity = (id: number | string, quantity: number) => {
    const found = carts.filter((item) => item.id === id)[0];
    const idx = carts.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      provider: product.provider,
      price: product.price,
      quantity: quantity,
    };
    dispatch(
      changeCart([...carts.slice(0, idx), cartItem, ...carts.slice(idx + 1)])
    );
  };

  useEffect(() => {
    getProduct().then((data) => {
      setProduct(
        data.data.products.find(
          (product: ProductDetailOb) => product.id === parseInt(id as string)
        )
      );
    });
  }, [id]);

  return (
    product && (
      <>
        <main className={styles.main}>
          <section className={styles.product}>
            <div className={styles.product_img}>
              <img src={product.image} alt="product" />
            </div>
          </section>
          <section className={styles.product}>
            <div className={styles.product_info}>
              <p className={styles.seller_store}>{product.provider}</p>
              <p className={styles.product_name}>{product.name}</p>
              <span className={styles.price}>
                {convertPrice(product.price)}
                <span className={styles.unit}>원</span>
              </span>
            </div>

            <div className={styles.delivery}>
              <p>택배배송 / 무료배송</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.amount}>
              <img
                className={styles.minus}
                src="/images/icon-minus-line.svg"
                alt="minus"
                onClick={() => {
                  handleQuantity("minus");
                }}
              />

              <div className={styles.count}>
                <span>{count}</span>
              </div>

              <img
                className={styles.plus}
                src="/images/icon-plus-line.svg"
                alt="plus"
                onClick={() => {
                  handleQuantity("plus");
                }}
              />
            </div>

            <div className={styles.line}></div>

            <div className={styles.sum}>
              <div>
                <span className={styles.sum_price}>총 상품 금액</span>
              </div>

              <div className={styles.total_info}>
                <span className={styles.total}>
                  총 수량 <span className={styles.total_count}>{count}개</span>
                </span>
                <span className={styles.total_price}>
                  {convertPrice(count * product.price)}
                  <span className={styles.total_unit}>원</span>
                </span>
              </div>
            </div>

            <div className={styles.btn}>
              <button className={styles.btn_buy}>바로 구매</button>
              <button
                className={styles.btn_cart}
                onClick={handleCart}
              >
                장바구니
              </button>
            </div>
          </section>
        </main>
      </>
    )
  );
};

export default Detail;
