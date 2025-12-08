import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import styles from './ContentActions.module.css';

interface PersonalizeButtonProps {
    content: string;
    onPersonalized: (personalizedContent: string) => void;
    disabled?: boolean;
}

const API_BASE_URL = 'http://localhost:8000';

export default function PersonalizeButton({ content, onPersonalized, disabled }: PersonalizeButtonProps) {
    const { token, user, isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handlePersonalize = async () => {
        if (!isAuthenticated || !token) {
            alert('Please login to use this feature');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_BASE_URL}/api/personalize`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ content }),
            });

            if (!response.ok) {
                throw new Error('Failed to personalize content');
            }

            const data = await response.json();
            onPersonalized(data.personalized_content);
        } catch (err) {
            setError(err.message || 'Personalization failed');
            console.error('Personalization error:', err);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <button
                className={styles.actionBtn}
                disabled
                title="Please login to personalize content"
            >
                ⚙️ Personalize
            </button>
        );
    }

    return (
        <>
            <button
                onClick={handlePersonalize}
                disabled={loading || disabled}
                className={styles.actionBtn}
                title={user ? `Personalize for ${user.software_exp} level` : 'Personalize'}
            >
                {loading ? '⏳ Personalizing...' : '⚙️ Personalize'}
            </button>
            {error && <span className={styles.error}>{error}</span>}
        </>
    );
}
