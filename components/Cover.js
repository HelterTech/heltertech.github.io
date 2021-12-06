import Image from 'next/image';
import CoverImage from '../assets/team-working.png';
import styles from './components.module.css';

export default function Cover() {
    return (
        <div className={styles.cover}>
            <div className={styles.coverHeader}>
                <p className={styles.coverHeader_heading}>
                    Connecting People
                    <br />
                    and Technology
                </p>
                <a href="#footer-form" className={styles.coverHeader_btn}>
                    Let&apos;s Talk
                </a>
            </div>
            <div className={styles.coverImage}>
                <Image src={CoverImage} alt="" />
            </div>
        </div>
    )
}