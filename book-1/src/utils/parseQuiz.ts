interface QuizQuestion {
    question: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
}

export function parseQuizMarkdown(markdown: string): QuizQuestion[] {
    const questions: QuizQuestion[] = [];

    // Split by question markers (**Question N:**)
    const questionBlocks = markdown.split(/\*\*Question \d+:\*\*/);

    questionBlocks.forEach((block, index) => {
        if (index === 0 || !block.trim()) return; // Skip first empty block

        const lines = block.trim().split('\n');
        const questionText = lines[0].trim();

        const options: { label: string; text: string }[] = [];
        let correctAnswer = '';

        lines.slice(1).forEach(line => {
            const trimmed = line.trim();

            // Match option format: A) option text
            const optionMatch = trimmed.match(/^([A-D])\)\s*(.+)$/);
            if (optionMatch) {
                options.push({
                    label: optionMatch[1],
                    text: optionMatch[2],
                });
            }

            // Match correct answer: *Correct Answer: A*
            const answerMatch = trimmed.match(/\*Correct Answer:\s*([A-D])\*/);
            if (answerMatch) {
                correctAnswer = answerMatch[1];
            }
        });

        if (questionText && options.length > 0) {
            questions.push({
                question: questionText,
                options,
                correctAnswer,
            });
        }
    });

    return questions;
}
