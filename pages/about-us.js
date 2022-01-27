import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HelterTech from "../assets/helter-tech.jpg";
import Image from "next/image";

import styles from './pages.module.css';

export default function aboutUs() {
    return (
        <div className={styles.aboutUsPage}>
            <Navbar />
            <div className={styles.aboutUsPage_body}>
                <div className={styles.aboutUsPage_header}>
                    <h1>About Us</h1>
                    <p>We believe digital innovation is at the heart of every business success</p>
                </div>
                <div className={styles.aboutUsPage_header}>
                    <h2>The story</h2>
                    <p>Talent wins games, teamwork wins championships</p>
                    <p>As the name suggests, we are a tight-knit team of overachievers bound together by a common purpose, to push the envelope of design and technology and help companies achieve lasting success.</p>
                </div>
                <div className={styles.aboutUsPage_cover}>
                    <div>
                        <Image src={HelterTech} alt="" />
                    </div>
                    <p>We bring our A-team to every engagement, starting with the Alpha Way, our step-by-step formula for reducing project risk, empowering teams, and delivering measurable business results. Together, we define the innovation you need to win today — and the vision you need to win tomorrow.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}