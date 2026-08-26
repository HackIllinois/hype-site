"use client";
import type { ReactNode } from "react";
import styles from "./LinkButton.module.scss";

type LinkButtonProps = {
    color?: string;
    link: string;
    children: ReactNode;
};

export default function LinkButton({ color, link, children }: LinkButtonProps) {
    return (
        <a
            className={color === undefined ? styles.buttonEmpty : styles.button}
            style={{ backgroundColor: color }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
