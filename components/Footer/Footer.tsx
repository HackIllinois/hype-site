"use client";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLeftItems}>
                <p>&copy; HackIllinois 2026</p>
                <a
                    className={styles.footerLink}
                    href={"https://info.hackillinois.org/privacy-policy"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Privacy Policy
                </a>
                <a
                    className={styles.footerLink}
                    href={
                        "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    MLH Code of Conduct
                </a>
            </div>
            <a
                href={"mailto:contact@hackillinois.org"}
                target="_blank"
                rel="noopener noreferrer"
            >
                contact@hackillinois.org
            </a>
        </div>
    );
}
