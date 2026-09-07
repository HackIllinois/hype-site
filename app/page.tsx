import React, { useState } from "react";
import styles from "./page.module.scss";
import { LinkButton } from "@/components/LinkButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { HackHeader } from "@/components/HackHeader";
import { TeamAppPopup } from "@/components/TeamAppPopup";
import { Footer } from "@/components/Footer";

const Home: React.FC = () => {
    return (
        <main className={styles.main}>
            <div className={styles.contentSection}>
                <div className={styles.logoBox}>
                    <HackHeader />
                </div>
                <div className={styles.timerBox}>
                    <CountdownTimer
                        targetDate={new Date("2027-02-26T12:00:00")}
                    />
                    <div className={styles.timerText}>
                        Until we ride into Hack...
                    </div>
                </div>
                <div className={styles.buttons}>
                    <LinkButton link="https://info.hackillinois.org">
                        Learn More
                    </LinkButton>
                    <LinkButton
                        color="#FBA036"
                        link="https://forms.gle/USQu9icxg8AGitKHA"
                    >
                        Interest Form
                    </LinkButton>
                    <LinkButton link="https://2026.hackillinois.org">
                        2026 Site
                    </LinkButton>
                </div>
            </div>
            <Footer />
            {/* absolute content */}
            <div className={styles.backgroundDecoration}>
                <img
                    src="/background/main_background.svg"
                    width={100}
                    height={160}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                />
            </div>
            <div className={styles.mlhBanner}>
                <img
                    src="/assets/mlh_banner_2027.svg"
                    width={100}
                    height={160}
                    style={{ width: "100%", height: "auto" }}
                    alt="MLH Official 2027 Season Hackathon"
                />
            </div>
            {/* <TeamAppPopup /> uncomment to show 'join our team' popup */}
        </main>
    );
};

export default Home;
