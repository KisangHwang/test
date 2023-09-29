import axios from "axios";

const url = "/data/products.json";

export const getProduct = () => {
    const res = axios(url);
    return res;
};

export const getUser = () => {
    const res = axios("/data/userData.json");
    return res;
};