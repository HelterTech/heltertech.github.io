import Link from 'next/link';
import Image from 'next/image';
import HelterTechLogo from '../public/helter-tech-logo-name.png';
import styles from './components.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Image src={HelterTechLogo} alt="" />
            </div>
            <ul className={styles.navList}>
                <Link href="/what-we-do">
                    <a>
                        <li>WHAT WE DO</li>
                    </a>
                </Link>
                <Link href="/about-us">
                    <a>
                        <li>ABOUT US</li>
                    </a>
                </Link>
                <Link href="/contact">
                    <a>
                        <li>CONTACT</li>
                    </a>
                </Link>
            </ul>
        </div>
    )
}