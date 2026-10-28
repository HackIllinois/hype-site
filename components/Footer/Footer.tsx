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
            <div className={styles.footerContact}>
                <a
                    href={"mailto:contact@hackillinois.org"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    contact@hackillinois.org
                </a>
                <p className={styles.judgingContact}>
                    Interested in becoming a judge or mentor?
                    <br />
                    Email us at{" "}
                    <a
                        className={styles.footerLink}
                        href="mailto:judging@hackillinois.org"
                    >
                        judging@hackillinois.org
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
