import Link from "next/link";
import styles from "./product.module.css";
import { convertPrice } from "@/service/priceConverter";

interface ProductProps{
  product: {
    id: number,
    image: string,
    provider: string,
    name: string,
    price: number
  };
}

export const Product = ({product}: ProductProps) => {
  return (
    <div className={styles.product}>
      <Link href={{pathname:`/product/${product.id}`,query:{id: product.id}}}>
        <div className={styles.product_image}>
          <img src={product.image} alt="product" />
        </div>
      </Link>
      <div className={styles.store}>
        <span>{product.provider}</span>
      </div>

      <div className={styles.product_name}>
        <span>{product.name}</span>
      </div>

      <div className={styles.product_price}>
        <span className={styles.price}>{convertPrice(product.price)}</span>
        <span className={styles.unit}>원</span>
      </div>
    </div>
  );
};
