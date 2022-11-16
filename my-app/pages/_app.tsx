// https://nextjs.org/docs/basic-features/typescript#custom-app
import type { AppProps } from "next/app";

import Navbar from "../components/Navbar";

const Myapp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Navbar /> <Component {...pageProps} />
        </>
    );
};

export default Myapp;
