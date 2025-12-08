
import React, { useState, useCallback, useRef } from 'react';

// Simple styles for the widget to keep it self-contained
const styles = {
    widgetContainer: {
        position: 'fixed' as 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        fontFamily: 'var(--ifm-font-family-base)', // Match book font
    },
    toggleButton: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'var(--ifm-color-primary)', // Theme Primary
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
    },
    chatWindow: {
        width: '350px',
        height: '500px',
        backgroundColor: 'var(--ifm-background-surface-color)', // Theme Surface
        color: 'var(--ifm-font-color-base)',
        borderRadius: 'var(--ifm-card-border-radius)', // Theme Border Radius
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column' as 'column',
        marginBottom: '16px',
        overflow: 'hidden',
        border: '1px solid var(--ifm-color-emphasis-200)', // Subtle border
    },
    header: {
        backgroundColor: 'var(--ifm-color-primary)',
        color: 'white',
        padding: '16px',
        fontWeight: 'bold' as 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--ifm-font-family-header)',
    },
    messagesArea: {
        flex: 1,
        padding: '16px',
        overflowY: 'auto' as 'auto',
        backgroundColor: 'var(--ifm-background-color)', // Contrast with surface
        color: 'var(--ifm-font-color-base)',
    },
    inputArea: {
        padding: '12px',
        borderTop: '1px solid var(--ifm-color-emphasis-200)',
        display: 'flex',
        backgroundColor: 'var(--ifm-background-surface-color)',
    },
    input: {
        flex: 1,
        padding: '10px',
        borderRadius: '20px',
        border: '1px solid var(--ifm-color-emphasis-300)',
        marginRight: '8px',
        outline: 'none',
        color: 'var(--ifm-font-color-base)',
        backgroundColor: 'var(--ifm-background-color)',
    },
    sendButton: {
        padding: '8px 16px',
        borderRadius: '20px',
        backgroundColor: 'var(--ifm-color-primary)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold' as 'bold',
    },
    messageBubble: {
        maxWidth: '80%',
        padding: '10px 14px',
        borderRadius: '12px',
        marginBottom: '10px',
        lineHeight: '1.4',
        fontSize: '14px',
    },
    userMessage: {
        backgroundColor: 'var(--ifm-color-primary)',
        color: 'white',
        alignSelf: 'flex-end',
        borderBottomRightRadius: '2px',
        marginLeft: 'auto',
    },
    botMessage: {
        backgroundColor: 'var(--ifm-background-surface-color)',
        color: 'var(--ifm-font-color-base)',
        alignSelf: 'flex-start',
        borderBottomLeftRadius: '2px',
        border: '1px solid var(--ifm-color-emphasis-200)',
    },
    loading: {
        color: 'var(--ifm-color-emphasis-600)',
        fontSize: '12px',
        fontStyle: 'italic',
        marginTop: '5px',
    }
};

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: ' 👋 Hi! I can answer questions about this book. Ask me anything!' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = useCallback(async () => {
        if (!inputValue.trim()) return;

        const newMessages = [...messages, { role: 'user' as const, content: inputValue }];
        setMessages(newMessages);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: inputValue,
                    role: 'user'
                }),
            });

            if (response.status === 429) {
                setMessages([...newMessages, { role: 'assistant', content: '⏳ My brain is tired (Rate Limit Reached). Please wait a minute and try again!' }]);
                return;
            }

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setMessages([...newMessages, { role: 'assistant', content: data.response }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages([...newMessages, { role: 'assistant', content: 'Sorry, I encountered an error connecting to the AI.' }]);
        } finally {
            setIsLoading(false);
        }
    }, [inputValue, messages]);

    return (
        <div style={styles.widgetContainer}>
            {isOpen && (
                <div style={styles.chatWindow}>
                    <div style={styles.header}>
                        <span>🤖 AI Book Assistant</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}
                        >
                            ×
                        </button>
                    </div>
                    <div style={styles.messagesArea}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.messageBubble,
                                    ...(msg.role === 'user' ? styles.userMessage : styles.botMessage)
                                }}
                            >
                                {msg.content}
                            </div>
                        ))}
                        {isLoading && <div style={styles.loading}>Thinking...</div>}
                    </div>
                    <div style={styles.inputArea}>
                        <input
                            style={styles.input}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Ask a question..."
                            disabled={isLoading}
                        />
                        <button style={styles.sendButton} onClick={sendMessage} disabled={isLoading}>
                            Send
                        </button>
                    </div>
                </div>
            )}

            <button style={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '×' : '💬'}
            </button>
        </div>
    );
};

export default ChatWidget;
