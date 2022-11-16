import Link from "next/link";
import Navbar from "../components/Navbar";
const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Hi</h1>
            <nav>
                <Link href={"/"}>Home</Link>
                <style jsx>{`
                    nav {
                        background-color: yellow;
                    }
                `}</style>
            </nav>
        </div>
    );
};

export default Home;
