import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <div>
            <nav>
                <Link
                    href={"/"}
                    style={{ color: router.pathname == "/" ? "red" : "black" }}
                >
                    Home{" "}
                </Link>
                <Link
                    href={"/about"}
                    style={{
                        color: router.pathname == "/about" ? "red" : "black",
                    }}
                >
                    About
                </Link>
                <style jsx>{`
                    nav {
                        background-color: whitesmoke;
                    }
                `}</style>
            </nav>
        </div>
    );
};

export default Navbar;
