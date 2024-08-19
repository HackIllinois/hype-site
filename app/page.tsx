import React from "react";
import styles from "./page.module.scss";

import Hero from "@/components/Hero/hero";
import Footer from "@/components/Footer/Footer";

const Home: React.FC = () => {
    return (
        <main className={styles.main}>
            <Hero />
            <Footer />
        </main>
    );
};

export default Home;
