import { Login } from "../components/login/login";
import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CheckSignin = () => {
  const router = useRouter();

  const checkIsSignin = () => {
    Axios.get("/api/isSignin").then((res) => {
      console.log(res.headers);

      if (res.status === 200 && res.data.a_name) {
        //로그인
      } else {
        //비로그인
        router.push("/signin");
      }
    });
  };

  useEffect(() => {
    checkIsSignin();
  }, []);
  return <>admin</>;
  // <Login />;
};

export default CheckSignin;
