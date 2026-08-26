"use client";
import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.scss";

type CountdownTimerProps = {
    targetDate: Date;
};

function getTimeLeft(target: Date): string {
    if (!target) return "0:0:0:0";
    const total = Math.max(0, target.getTime() - Date.now());

    const seconds = Math.floor((total / 1000) % 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2
    });
    const minutes = Math.floor((total / 1000 / 60) % 60).toLocaleString(
        "en-US",
        { minimumIntegerDigits: 2 }
    );
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24).toLocaleString(
        "en-US",
        { minimumIntegerDigits: 2 }
    );
    const days = Math.floor(total / (1000 * 60 * 60 * 24)).toLocaleString(
        "en-US",
        { minimumIntegerDigits: 2 }
    );

    return `${days}:${hours}:${minutes}:${seconds}`;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<string>(() =>
        getTimeLeft(targetDate)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const next = getTimeLeft(targetDate);
            setTimeLeft(next);
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return <h1 className={styles.countdown}>{timeLeft}</h1>;
}
