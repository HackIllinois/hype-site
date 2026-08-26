"use client";
import { useEffect, useState } from "react";
import { LinkButton } from "../LinkButton";
import styles from "./TeamAppPopup.module.scss";

// type TeamAppPopupProps = {
//     isOpen: boolean;
//     close: () => void;
// };

export default function TeamAppPopup() {
    //{ isOpen, close }: TeamAppPopupProps) {
    const [teamAppPopupOpen, setTeamAppPopupOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTeamAppPopupOpen(true);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div
                className={
                    teamAppPopupOpen
                        ? `${styles.container} ${styles.open}`
                        : `${styles.container}`
                }
            >
                <img
                    className={styles.xButton}
                    onClick={() => setTeamAppPopupOpen(false)}
                    src="/assets/x_button.svg"
                    width={36}
                    height={36}
                    alt="close popup"
                />
                <img
                    src="/assets/shape_friends.svg"
                    width={250}
                    height={220}
                    style={{ height: "auto" }}
                    alt="Shape Friends icon"
                />
                <h2 className={styles.contentHeader}>Join Our Team!</h2>
                <p className={styles.contentBody}>
                    Open to all UIUC students. Help shape the experience of
                    HackIllinois 2027.
                </p>
                <LinkButton
                    color="#68C8BF"
                    link="https://forms.gle/gty1LvptR6sdb77U6"
                >
                    Learn More
                </LinkButton>
            </div>
            {teamAppPopupOpen && <div className={styles.backdrop} />}
        </>
    );
}
