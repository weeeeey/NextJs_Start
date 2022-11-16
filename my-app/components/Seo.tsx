// react 에서의 Helmet과 같은 역할
import Head from "next/head";

interface IGetSeo {
    title: string;
}
const Seo = ({ title }: IGetSeo) => {
    return (
        <Head>
            <title>{title} | Next Movie</title>
        </Head>
    );
};

export default Seo;
