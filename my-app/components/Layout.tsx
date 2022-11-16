import Navbar from "./Navbar";
import { PropsWithChildren } from "react";

// children props은 리액트에서 제공하는것으로 자식 컴포넌트들을 가져와줌
const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    );
};

export default Layout;
