import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { useAuth } from '../hooks/useAuth';
import { useHistory, useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './auth.module.css';

export default function Login() {
    const { login } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const homeUrl = useBaseUrl('/');

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(formData.email, formData.password);

            // Redirect to previous page or home
            const from = (location.state as any)?.from || homeUrl;
            history.push(from);
        } catch (err) {
            setError(err.message || 'Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout title="Login" description="Log in to your account">
            <div className="container margin-vert--lg">
                <div className={styles.authContainer}>
                    <h1>Welcome Back</h1>
                    <p className={styles.subtitle}>Log in to continue learning</p>

                    <form onSubmit={handleSubmit} className={styles.authForm}>
                        {error && <div className={styles.error}>{error}</div>}

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                autoComplete="email"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                autoComplete="current-password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={styles.submitBtn}
                        >
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                    </form>

                    <p className={styles.switchLink}>
                        Don't have an account? <a href={useBaseUrl('/signup')}>Sign up</a>
                    </p>
                </div>
            </div>
        </Layout>
    );
}
