import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <div>
            <nav>
                <Link href={"/"} legacyBehavior>
                    <a className={router.pathname == "/" ? "active" : ""}>
                        Home{" "}
                    </a>
                </Link>
                <Link legacyBehavior href={"/about"}>
                    <a className={router.pathname == "/about" ? "active" : ""}>
                        About
                    </a>
                </Link>
                <style jsx>{`
                    a {
                        text-decoration: none;
                    }
                    .active {
                        color: red;
                        text-decoration: underline;
                    }
                `}</style>
            </nav>
        </div>
    );
};

export default Navbar;
