import styles from "./topNavigationBar.module.css";
import Link from "next/link";
import { ProductDetailOb } from "../../../pages/types";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface TopCartProps {
  cart: ProductDetailOb[];
}

export const TopNavigationBar = ({ cart }: TopCartProps) => {
  const router = useRouter();
  const { carts } = useSelector((state:RootState) => state.carts);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/">
          <h1 className={styles.logo}>
            <img src="/images/logo.png" alt="logo" />
          </h1>
        </Link>
        <div className={styles.input_wrap}>
          {router.asPath === "/" ? (
            <>
              <input type="text" placeholder="상품을 검색해보세요!" />
              <img src="/images/icon-search.svg" alt="search" />
            </>
          ) : null}
        </div>
      </div>

      <div className={styles.menu}>
        <Link
          href={{
            pathname: "/basket",
          }}
        >
          <div className={styles.shopping_cart}>
            <img src="/images/icon-shopping-cart.svg" alt="cart" />
            <span>장바구니</span>
            {carts.length >= 1 ? (
              <div className={styles.new_shopping_cart}>
                <p>{carts.length}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
        <Link href="/checkSignin">
          <div className={styles.mypage}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
