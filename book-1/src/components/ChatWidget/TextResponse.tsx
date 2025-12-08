import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './TextResponse.module.css';

interface TextResponseProps {
    content: string;
    citations?: string[];
}

export default function TextResponse({ content, citations }: TextResponseProps) {
    return (
        <div className={styles.textResponse}>
            <div className={styles.markdown}>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>

            {citations && citations.length > 0 && (
                <div className={styles.citations}>
                    <div className={styles.citationsHeader}>📚 Sources:</div>
                    <div className={styles.citationList}>
                        {citations.map((cite, idx) => (
                            <span key={idx} className={styles.citation}>
                                {cite}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
