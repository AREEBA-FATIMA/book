import React from 'react';
import QuizResponse from './QuizResponse';
import TextResponse from './TextResponse';

interface ChatResponse {
    response: string;
    citations?: string[];
    response_type?: 'text' | 'quiz' | 'flashcard';
}

interface ResponseRendererProps {
    message: ChatResponse;
}

export default function ResponseRenderer({ message }: ResponseRendererProps) {
    const responseType = message.response_type || 'text';

    switch (responseType) {
        case 'quiz':
            return <QuizResponse content={message.response} />;

        case 'flashcard':
            // Future implementation
            return <TextResponse content={message.response} citations={message.citations} />;

        case 'text':
        default:
            return <TextResponse content={message.response} citations={message.citations} />;
    }
}
