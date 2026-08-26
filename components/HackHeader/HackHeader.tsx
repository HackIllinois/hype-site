"use client";
import styles from "./HackHeader.module.scss";

export default function HackHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img
                    src="/assets/hack_logo.svg"
                    width={75}
                    height={105}
                    style={{ width: "auto" }}
                    alt="HackIllinois logo"
                />
            </div>
            <div className={styles.logo}>
                <img
                    src="/assets/hack_logo_text.png"
                    width={260}
                    height={105}
                    style={{ width: "auto" }}
                    alt="HackIllinois logo"
                />
            </div>
        </div>
    );
}
