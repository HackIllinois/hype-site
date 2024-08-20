"use client";
import { socials } from "@/modules/SocialsData";
import Subscribe from "@/components/Subscribe/Subscribe";
import styles from "./styles.module.scss";

import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <section className={styles.main}>
            <img
                alt="HackIllinois Hype Animation"
                src="/hero/hype_animation.gif"
                className={styles.logoAnimation}
            />

            <div className={styles.mainText}>
                <div className={styles.title}>
                    <h1>HackIllinois 2025</h1>
                </div>
                <div className={styles.subtitle}>
                    <span className={styles.text}>coming soon</span>
                </div>
            </div>
            <div className={styles.newsletter}>
                <span className={styles.newsletterTitle}>
                    Sign up for our newsletter to get new updates!
                </span>
                <Subscribe />
            </div>
            <div className={styles.socials}>
                <span className={styles.title}>
                    Stay up to date with HackIllinois!
                </span>
                <div className={styles.icons}>
                    {socials.map(icon => (
                        <a href={icon.url} key={icon.id} target="_blank">
                            <div className={styles.icon}>
                                {/* eslint-disable-next-line */}
                                <img
                                    src={icon.image}
                                    alt={icon.name}
                                    className={styles.image}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
