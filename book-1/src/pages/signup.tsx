import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { useAuth } from '../hooks/useAuth';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './auth.module.css';

export default function Signup() {
    const { signup } = useAuth();
    const history = useHistory();
    const homeUrl = useBaseUrl('/');

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        full_name: '',
        software_exp: 'beginner' as 'beginner' | 'intermediate' | 'expert',
        hardware_exp: 'beginner' as 'beginner' | 'intermediate' | 'expert',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        if (!formData.email || !formData.email.includes('@')) {
            setError('Please enter a valid email address');
            return false;
        }
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters');
            return false;
        }
        if (!formData.full_name.trim()) {
            setError('Please enter your full name');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            await signup(formData);
            history.push(homeUrl); // Redirect to /book/
        } catch (err) {
            setError(err.message || 'Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout title="Sign Up" description="Create your account">
            <div className="container margin-vert--lg">
                <div className={styles.authContainer}>
                    <h1>Create Account</h1>
                    <p className={styles.subtitle}>Join the Physical AI learning community</p>

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
                                minLength={8}
                                className={styles.input}
                            />
                            <small className={styles.hint}>Minimum 8 characters</small>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="full_name">Full Name</label>
                            <input
                                type="text"
                                id="full_name"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="software_exp">Software Experience</label>
                            <select
                                id="software_exp"
                                name="software_exp"
                                value={formData.software_exp}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="hardware_exp">Hardware/Robotics Experience</label>
                            <select
                                id="hardware_exp"
                                name="hardware_exp"
                                value={formData.hardware_exp}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={styles.submitBtn}
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </button>
                    </form>

                    <p className={styles.switchLink}>
                        Already have an account? <a href={useBaseUrl('/login')}>Log in</a>
                    </p>
                </div>
            </div>
        </Layout>
    );
}
