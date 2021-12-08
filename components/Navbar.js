import Link from 'next/link';
import Image from 'next/image';
import HelterTechLogo from '../public/helter-tech-logo-name.png';
import styles from './components.module.css';
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Menu from '@mui/icons-material/Menu';

export default function Navbar() {
    const [state, setState] = React.useState({
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className={styles.navMenuList}>
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
                </div>
            </List>
        </Box>
    );
    return (
        <div>
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
                <div className={styles.menuIcon}>
                    {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}>
                                <Menu className={styles.menu} />
                            </Button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}