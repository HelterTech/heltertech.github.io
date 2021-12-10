import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from './pages.module.css';
import makeupnest from '../assets/makeupnest.jpg';
import Image from 'next/image';
import helterWeb from '../assets/helter-web.jpg';
import coronaTracker from '../assets/Corona tracker.jpg';
import neon from '../assets/neon.jpg';
import androidHelter from '../assets/androidhelter.jpg';
import graphicsHelter from '../assets/graphicshelter.jpg';

export default function whatWeDo() {
    return (
        <div>
            <Navbar />
            <div className={styles.whatWeDo}>
                <div className={styles.wwd_services}>
                    <h1>Our Services</h1>
                    <h2>Full-Cycle Software <br />
                        Development Services</h2>
                </div>
                <div>
                    <div className={styles.wwd_services_comp}>
                        <div className={styles.wwd_services_comp_img}>
                            <Image src={makeupnest} alt="" />
                        </div>
                        <div className={styles.wwd_services_comp_i}>
                            <div className={styles.wwd_services_comp_i_head}>
                                <h1>Web Development</h1>
                                <p>We build enterprise-grade web solutions that transform businesses</p>
                            </div>
                            <div className={styles.services_img}>
                                <Image src={helterWeb} alt="" />
                            </div>
                            <div className={styles.service_btn}>
                                <Link href="/web-development">
                                    <a>Learn More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wwd_services_comp}>
                        <div className={styles.wwd_services_comp_i}>
                            <div className={styles.wwd_services_comp_i_head}>
                                <h1>App Development</h1>
                                <p>We build innovative mobile solutions your users will love</p>
                            </div>
                            <div className={styles.services_img}>
                                <Image src={androidHelter} alt="" />
                            </div>
                            <div className={styles.service_btn}>
                                <Link href="/app-development">
                                    <a>Learn More</a>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.wwd_services_comp_img}>
                            <Image src={coronaTracker} alt="" />
                        </div>
                    </div>
                    <div className={styles.wwd_services_comp}>
                        <div className={styles.wwd_services_comp_img}>
                            <Image src={neon} alt="" />
                        </div>
                        <div className={styles.wwd_services_comp_i}>
                            <div className={styles.wwd_services_comp_i_head}>
                                <h1>Graphic Designing</h1>
                                <p>Connect With Your Customers, Not Just Your Business</p>
                            </div>
                            <div className={styles.services_img}>
                                <Image src={graphicsHelter} alt="" />
                            </div>
                            <div className={styles.service_btn}>
                                <Link href="/graphic-designing">
                                    <a>Learn More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>WHY GO Helter Tech?</h1>
                        <p>We are dedicated to game-changing results.</p>
                    </div>
                    <div>
                        <h2>We Here For You</h2>
                        <p>
                            The Helter Tech is smart, humble, and driven to serve. Our clients consistently rank our development resources and project delivery as outstanding.
                        </p>
                    </div>
                    <div>
                        <h2>Leading Technology</h2>
                        <p>
                            Don’t get stuck behind the curve with an outdated stack. We are Helter for a reason - our experts live on the cutting edge to ensure the performance, security, cost, and scalability of your app is a grade above the competition
                        </p>
                    </div>
                    <div>
                        <h2>100% Accountability</h2>
                        <p>
                            Our step-by-step formula for reducing project risk, ensures your project will be delivered on time and on budget. Regardless of the obstacles, we pledge to deliver your project on schedule and exceed your expectations.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}