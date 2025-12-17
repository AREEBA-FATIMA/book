import React, { useContext } from 'react';
import Link from '@docusaurus/Link';
import AuthContext from '@site/src/contexts/AuthContext';
import styles from './styles.module.css';

export default function AuthNavbarItems({ mobile }: { mobile?: boolean }) {
    const auth = useContext(AuthContext);

    if (!auth) return null;

    // While loading, we render nothing to avoid flicker
    if (auth.loading) {
        return null;
    }

    if (auth.user) {
        return (
            <>
                <Link
                    className={mobile ? "menu__link" : "navbar__item navbar__link"}
                    to="/profile">
                    My Profile
                </Link>
                <span
                    className={mobile ? "menu__link" : "navbar__item navbar__link"}
                    onClick={auth.logout}
                    style={{ cursor: 'pointer' }}
                >
                    Logout
                </span>
            </>
        );
    }

    return (
        <>
            <Link
                className={mobile ? "menu__link" : "navbar__item navbar__link"}
                to="/login">
                Login
            </Link>
            <Link
                className={mobile ? "menu__link" : "navbar__item navbar__link navbar-signup-btn button button--primary button--sm"}
                to="/signup"
                style={{ marginLeft: '10px' }}
            >
                Sign Up
            </Link>
        </>
    );
}
