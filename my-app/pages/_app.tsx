import type { AppProps } from "next/app";
import Layout from "../components/Layout";

const Myapp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            {/* Layout children으로 모든 페이지(컴포넌트)들이 들어감 */}
            <Layout /> <Component {...pageProps} />
        </>
    );
};

export default Myapp;
