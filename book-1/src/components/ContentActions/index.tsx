import React, { useState } from 'react';
import PersonalizeButton from './PersonalizeButton';
import TranslateButton from './TranslateButton';
import styles from './ContentActions.module.css';

interface ContentActionsBarProps {
    children: React.ReactNode;
}

export default function ContentActionsBar({ children }: ContentActionsBarProps) {
    const [displayMode, setDisplayMode] = useState<'original' | 'personalized' | 'translated'>('original');
    const [transformedContent, setTransformedContent] = useState('');

    // Extract plain text from MDX children (simplified)
    const extractTextContent = (): string => {
        // For now, return a sample text. 
        // In production, you'd extract actual chapter text
        return "Chapter content goes here...";
    };

    const handlePersonalized = (content: string) => {
        setTransformedContent(content);
        setDisplayMode('personalized');
    };

    const handleTranslated = (content: string) => {
        setTransformedContent(content);
        setDisplayMode('translated');
    };

    const handleReset = () => {
        setDisplayMode('original');
        setTransformedContent('');
    };

    const contentToTransform = extractTextContent();

    return (
        <div className={styles.container}>
            <div className={styles.actionsBar}>
                <div className={styles.buttonGroup}>
                    <PersonalizeButton
                        content={contentToTransform}
                        onPersonalized={handlePersonalized}
                        disabled={displayMode === 'personalized'}
                    />
                    <TranslateButton
                        content={contentToTransform}
                        onTranslated={handleTranslated}
                        disabled={displayMode === 'translated'}
                    />
                    {displayMode !== 'original' && (
                        <button onClick={handleReset} className={styles.resetBtn}>
                            ↩️ Reset to Original
                        </button>
                    )}
                </div>
                {displayMode !== 'original' && (
                    <div className={styles.modeIndicator}>
                        {displayMode === 'personalized' && '⚙️ Personalized View'}
                        {displayMode === 'translated' && '🌐 Urdu Translation'}
                    </div>
                )}
            </div>
            <div className={styles.content}>
                {displayMode === 'original' ? (
                    children
                ) : (
                    <div className="markdown" dangerouslySetInnerHTML={{ __html: transformedContent }} />
                )}
            </div>
        </div>
    );
}
