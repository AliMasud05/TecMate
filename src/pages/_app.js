import RootLayout from "@/components/Layout/RootLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider session={pageProps.session}>
      <StyleProvider hashPriority="high">
        <Provider store={store}>
          <Toaster />
          <Component {...pageProps} />
        </Provider>
      </StyleProvider>
    </SessionProvider>
  );
}
