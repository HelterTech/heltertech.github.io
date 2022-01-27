import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import styles from './pages.module.css';

export default function contact() {
    return (
        <div className={styles.contactPage}>
            <Navbar />
            <div className={styles.contactPage_header}>
                <h1>CONTACT US</h1>
                <p>Get in touch to get the ball rolling.</p>
            </div>
            <Footer />
        </div>
    )
}