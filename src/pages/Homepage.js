import Hero from "../components/Hero";
import styles from "../styles/Page.module.css";

export default function Homepage() {
    return (
        <div className={styles.pageContainer}>
            <Hero />
        </div>
    );
};