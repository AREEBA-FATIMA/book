import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import styles from './ContentActions.module.css';

interface TranslateButtonProps {
    content: string;
    onTranslated: (translatedContent: string) => void;
    disabled?: boolean;
}

const API_BASE_URL = 'http://localhost:8000';

export default function TranslateButton({ content, onTranslated, disabled }: TranslateButtonProps) {
    const { token, isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleTranslate = async () => {
        if (!isAuthenticated || !token) {
            alert('Please login to use this feature');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_BASE_URL}/api/translate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    content,
                    target_language: 'ur'
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to translate content');
            }

            const data = await response.json();
            onTranslated(data.translated_content);
        } catch (err) {
            setError(err.message || 'Translation failed');
            console.error('Translation error:', err);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <button
                className={styles.actionBtn}
                disabled
                title="Please login to translate content"
            >
                🌐 Translate to Urdu
            </button>
        );
    }

    return (
        <>
            <button
                onClick={handleTranslate}
                disabled={loading || disabled}
                className={styles.actionBtn}
                title="Translate to Urdu"
            >
                {loading ? '⏳ Translating...' : '🌐 Translate to Urdu'}
            </button>
            {error && <span className={styles.error}>{error}</span>}
        </>
    );
}
