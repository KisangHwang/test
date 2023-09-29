import { useEffect } from "react";
import styles from "./cart.module.css";
import { TotalCartProps } from "./types";
import { convertPrice } from "@/service/priceConverter";

export const TotalCart = ({total, setTotal, checkedItems}: TotalCartProps) => {
    useEffect(()=>{
        if(checkedItems){
            const sum = checkedItems.map(item => item[0].price * item[0].quantity);
            const reducer = (acc:number, cur:number) => acc + cur;
            if(sum.length === 0){
                setTotal(0);
                return;
            }
            const itemTotal = sum.reduce(reducer);
            setTotal(itemTotal);
        } else {
            setTotal(0);
        }
    }, [total, setTotal, checkedItems]);

    return <div className={styles.total}>
        <div className={styles.total_price}>
            <p className={styles.cart_product_total_price}>총 상품금액</p>
            <p className={styles.cart_product_price}>{convertPrice(total)}원</p>
        </div>
        <div className={styles.pay_minus}>
            <img src="/images/icon-minus-line.svg" alt="minus" />
        </div>
        <div className={styles.sale}>
            <p className={styles.cart_product_sale}>상품 할인</p>
            <p className={styles.cart_product_sale_price}>{convertPrice(0)}원</p>
        </div>
        <div className={styles.pay_plus}>
            <img src="/images/icon-plus-line.svg" alt="plus" />
        </div>
        <div className={styles.delivery}>
            <p className={styles.cart_product_delivery}>배송비</p>
            <p className={styles.cart_product_delivery_price}>{convertPrice(0)}원</p>
        </div>

        <div className={styles.payment}>
            <p className={styles.cart_prouct_payment}>결제 예정 금액</p>
            <p className={styles.cart_prouct_payment_price}>{convertPrice(total)}</p>
        </div>
    </div>
}