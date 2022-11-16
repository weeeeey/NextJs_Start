import type { AppProps } from "next/app";

import Navbar from "../components/Navbar";

const Myapp = ({ Component, pageProps }: AppProps) => {
    console.log(Component);
    return (
        <>
            <Navbar /> <Component {...pageProps} />
        </>
    );
};

export default Myapp;
