import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import styles from './NavbarAuth.module.css';

export default function NavbarAuth() {
    const { isAuthenticated, user, logout } = useAuth();

    if (isAuthenticated && user) {
        return (
            <div className={styles.authNav}>
                <a href="/profile" className={styles.profileLink}>
                    <span className={styles.avatar}>
                        {user.full_name.charAt(0).toUpperCase()}
                    </span>
                    <span className={styles.userName}>{user.full_name}</span>
                </a>
                <button onClick={logout} className={styles.logoutBtn}>
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className={styles.authNav}>
            <a href="/login" className={styles.authLink}>Login</a>
            <a href="/signup" className={styles.authBtn}>Sign Up</a>
        </div>
    );
}
