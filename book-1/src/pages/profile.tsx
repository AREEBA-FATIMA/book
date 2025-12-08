import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { useAuth } from '../hooks/useAuth';
import { useHistory } from '@docusaurus/router';
import styles from './auth.module.css';

export default function Profile() {
    const { user, logout, loading, isAuthenticated } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            history.push('/login', { from: '/profile' });
        }
    }, [loading, isAuthenticated, history]);

    if (loading) {
        return (
            <Layout title="Profile">
                <div className="container margin-vert--lg">
                    <div className={styles.loading}>Loading...</div>
                </div>
            </Layout>
        );
    }

    if (!user) {
        return null; // Will redirect in useEffect
    }

    const handleLogout = () => {
        logout();
        history.push('/');
    };

    const getExperienceBadge = (level: string) => {
        const badges = {
            beginner: '🌱',
            intermediate: '⚡',
            expert: '🚀',
        };
        return badges[level] || '';
    };

    return (
        <Layout title="Profile" description="Your profile">
            <div className="container margin-vert--lg">
                <div className={styles.profileContainer}>
                    <div className={styles.profileHeader}>
                        <div className={styles.avatar}>
                            {user.full_name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h1>{user.full_name}</h1>
                            <p className={styles.email}>{user.email}</p>
                        </div>
                    </div>

                    <div className={styles.profileSection}>
                        <h2>Skills & Experience</h2>

                        <div className={styles.experienceCard}>
                            <div className={styles.expLabel}>
                                <span className={styles.icon}>💻</span>
                                <strong>Software Development</strong>
                            </div>
                            <div className={styles.expBadge}>
                                {getExperienceBadge(user.software_exp)}
                                <span className={styles.expLevel}>
                                    {user.software_exp.charAt(0).toUpperCase() + user.software_exp.slice(1)}
                                </span>
                            </div>
                        </div>

                        <div className={styles.experienceCard}>
                            <div className={styles.expLabel}>
                                <span className={styles.icon}>🤖</span>
                                <strong>Hardware & Robotics</strong>
                            </div>
                            <div className={styles.expBadge}>
                                {getExperienceBadge(user.hardware_exp)}
                                <span className={styles.expLevel}>
                                    {user.hardware_exp.charAt(0).toUpperCase() + user.hardware_exp.slice(1)}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.profileSection}>
                        <h2>Personalized Learning</h2>
                        <p>
                            Based on your experience levels, chapter content will be automatically
                            adjusted to match your background when you use the "Personalize" feature.
                        </p>
                    </div>

                    <button onClick={handleLogout} className={styles.logoutBtn}>
                        Log Out
                    </button>
                </div>
            </div>
        </Layout>
    );
}
