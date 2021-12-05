import Contact_form from "./Contact_form";
import styles from "./components.module.css";

export default function Footer() {
    return (
        <div id="footer-form" className={styles.footer}>
            <div>
                <div className={styles.footer_numbers}>
                    <h1>HelterTech by the Numbers</h1>
                    <div className={styles.footer_numbers_table}>
                        <div>
                            <h2>96%</h2>
                            <p>Ratings</p>
                        </div>
                        <div>
                            <h2>100+</h2>
                            <p>Number of Projects</p>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_heading}>
                    <h1 className={styles.footer_heading_h1}>
                        We collaborate with ambitious brands and people.
                    </h1>
                </div>
            </div>
            <Contact_form />
        </div>
    )
}