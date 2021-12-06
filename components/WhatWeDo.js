import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faArrowRight, faMobileAlt, faPalette } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import styles from './components.module.css';

export default function WhatWeDo() {
    return (
        <div className={styles.workContainer}>
            <div className={styles.workContainer_head}>
                <p className={styles.workContainer_head_1}>
                    What We Do
                </p>
                <h1 className={styles.workContainer_head_2}
                >Let&apos;s Work Together
                </h1>
            </div>
            <div className={styles.services}>
                <div className={styles.service}>
                    <FontAwesomeIcon icon={faLaptopCode} className={styles.service_icon} />
                    <p className={styles.service_head}>
                        Web Development
                    </p>
                    <p className={styles.service_desc}>
                        Bring your ideas to life with next-gen web solutions
                    </p>
                    <Link href="/Web-Development" className={styles.service_link}>
                        <a>Learn more
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className={styles.service_link_icon}
                            />
                        </a>
                    </Link>
                </div>
                <div className={styles.service}>
                    <FontAwesomeIcon
                        icon={faMobileAlt}
                        className={styles.service_icon}
                    />
                    <p className={styles.service_head}>
                        App Development
                    </p>
                    <p className={styles.service_desc}>
                        Transform your idea into the next killer mobile app
                    </p>
                    <Link href="/App-Development" className={styles.service_link}>
                        <a>Learn more
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className={styles.service_link_icon}
                            />
                        </a>
                    </Link>
                </div>
                <div className={styles.service}>
                    <FontAwesomeIcon
                        icon={faPalette}
                        className={styles.service_icon}
                    />
                    <p className={styles.service_head}>
                        Graphic Designing
                    </p>
                    <p className={styles.service_desc}>
                        Affordable solutions for all your creativity needs
                    </p>
                    <Link href="/Graphic-Designing" className={styles.service_link}>
                        <a>
                            Learn more
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className={styles.service_link_icon}
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}