import RootLayout from "@/components/Layout/RootLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <StyleProvider hashPriority="high">
      <SessionProvider session={pageProps.session}>
        <RootLayout>
          <Provider store={store}>
            <Component {...pageProps} />s
          </Provider>
        </RootLayout>
      </SessionProvider>
    </StyleProvider>
  );
}
