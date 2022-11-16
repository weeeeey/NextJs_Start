import Navbar from "../components/Navbar";

const Myapp = ({ Component, pageProps }) => {
    return (
        <>
            <Navbar /> <Component {...pageProps} />
        </>
    );
};

export default Myapp;
