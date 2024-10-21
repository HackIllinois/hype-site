import Link from "next/link";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <>
            <nav className={styles.header}>
                <Link
                    className={styles.link}
                    href={"https://info.hackillinois.org"}
                >
                    About Us
                </Link>
            </nav>
        </>
    );
}

export default Header;