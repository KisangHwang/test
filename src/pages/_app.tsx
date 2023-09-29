import "@/styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "@/store";
import { Provider } from "react-redux";
import { TopNavigationBar } from "@/components/header/topNavigationBar/topNavigationBar";

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <TopNavigationBar cart={[]} />
      <Component {...pageProps} />
    </Provider>
  );
}
