# Specification: Enhanced Chat Widget with Subagent Support

## 1. Overview
This specification defines the enhanced chat widget that supports both standard RAG responses and rich UI elements from Subagents (e.g., Quiz Generator). The widget must intelligently render different response types.

## 2. User Stories
- **US1:** As a user, I want to ask "Give me a quiz on Chapter 2" and see an interactive quiz rendered in the chat.
- **US2:** As a user, I want to ask regular questions and receive text responses with citations.
- **US3:** As a user, I want quiz responses to be visually distinct with proper formatting (questions, options, answers).
- **US4:** As a user, I want to be able to scroll through chat history and see different response types properly rendered.
- **US5:** As a user, I want the chat widget to be responsive and work on mobile devices.

## 3. Technical Design

### 3.1 Component Architecture
Enhance existing `ChatWidget.tsx` component:
```
src/components/ChatWidget/
├── ChatWidget.tsx           # Main container
├── MessageList.tsx          # Scrollable message history
├── MessageInput.tsx         # User input field
├── ResponseRenderer.tsx     # Routes to appropriate renderer
├── TextResponse.tsx         # Standard RAG text responses
├── QuizResponse.tsx         # Quiz-specific renderer
└── types.ts                 # TypeScript interfaces
```

### 3.2 Response Type Detection
Backend includes `response_type` field in API response:
```typescript
interface ChatResponse {
  response: string;
  citations?: string[];
  response_type?: 'text' | 'quiz' | 'flashcard';  // Extensible
  metadata?: Record<string, any>;
}
```

### 3.3 Quiz Response Format
Backend (QuizSkill) returns structured markdown:
```markdown
**Question 1:** What is Physical AI?
A) Software only
B) AI with physical embodiment
C) Virtual AI
D) None of the above
*Correct Answer: B*

**Question 2:** ...
```

### 3.4 Quiz Response Component

#### QuizResponse.tsx
Features:
- Parse quiz markdown into structured data
- Render each question with numbered options
- Show/hide correct answers with toggle button
- Allow user to select answers before revealing
- Track user score (optional)
- Provide "Retake Quiz" functionality

Example structure:
```tsx
interface QuizQuestion {
  question: string;
  options: { label: string; text: string }[];  // [{ label: 'A', text: '...' }]
  correctAnswer: string;
}

const QuizResponse: React.FC<{
  content: string;
  onRetake?: () => void;
}> = ({ content }) => {
  const questions = parseQuizMarkdown(content);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  
  return (
    <div className="quiz-container">
      {questions.map((q, idx) => (
        <QuestionCard
          key={idx}
          question={q}
          userAnswer={userAnswers[idx]}
          onSelect={(answer) => setUserAnswers({...userAnswers, [idx]: answer})}
          showCorrect={showAnswers}
        />
      ))}
      <Button onClick={() => setShowAnswers(true)}>Check Answers</Button>
    </div>
  );
};
```

### 3.5 Response Renderer Logic

#### ResponseRenderer.tsx
```tsx
const ResponseRenderer: React.FC<{ message: ChatResponse }> = ({ message }) => {
  switch (message.response_type) {
    case 'quiz':
      return <QuizResponse content={message.response} />;
    case 'flashcard':
      return <FlashcardResponse content={message.response} />;
    default:
      return <TextResponse content={message.response} citations={message.citations} />;
  }
};
```

## 4. Text Response Component

### TextResponse.tsx
Features:
- Render markdown content
- Display citations as clickable links/chips
- Support code blocks with syntax highlighting
- Handle LaTeX math rendering (if needed)

```tsx
const TextResponse: React.FC<{
  content: string;
  citations?: string[];
}> = ({ content, citations }) => {
  return (
    <div className="text-response">
      <ReactMarkdown>{content}</ReactMarkdown>
      {citations && citations.length > 0 && (
        <div className="citations">
          <small>Sources:</small>
          {citations.map((cite, idx) => (
            <Chip key={idx} label={cite} size="small" />
          ))}
        </div>
      )}
    </div>
  );
};
```

## 5. Chat Widget Enhancements

### 5.1 Message History
- Store messages in state with type information
- Persist to localStorage (optional)
- Clear history button
- Export conversation functionality

### 5.2 Loading States
- Show typing indicator while waiting for response
- Disable input during API call
- Handle streaming responses (future enhancement)

### 5.3 Error Handling
- Display user-friendly error messages in chat
- Retry failed messages
- Handle rate limiting gracefully

## 6. Styling Guidelines

### Quiz Styling
```css
.quiz-container {
  background: var(--ifm-background-surface-color);
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 8px;
  padding: 16px;
  margin: 12px 0;
}

.question-card {
  margin-bottom: 20px;
  padding: 12px;
  border-left: 3px solid var(--ifm-color-primary);
}

.option {
  padding: 8px 12px;
  margin: 4px 0;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.option:hover {
  background: var(--ifm-color-emphasis-100);
}

.option.selected {
  background: var(--ifm-color-primary-lighter);
}

.option.correct {
  background: var(--ifm-color-success-lighter);
}

.option.incorrect {
  background: var(--ifm-color-danger-lighter);
}
```

### Responsive Design
- Stack quiz options vertically on mobile
- Adjust font sizes for readability
- Ensure touch targets are at least 44px

## 7. Backend Integration

### API Endpoint
```typescript
POST /api/chat
Authorization: Bearer <token> (optional)
Content-Type: application/json

{
  "content": "Give me a quiz on AI agents",
  "role": "user"
}

Response:
{
  "response": "<quiz markdown>",
  "citations": [],
  "response_type": "quiz"
}
```

### Detection Logic
Backend determines `response_type` based on:
- Intent detection (quiz keywords)
- Active Subagent skill
- Default to 'text' for standard RAG

## 8. Future Extensibility

### Design for New Response Types
- Flashcard mode
- Code execution/playground
- Diagram generation
- Interactive simulations

### Plugin Architecture
```tsx
interface ResponsePlugin {
  type: string;
  detector: (content: string) => boolean;
  renderer: React.ComponentType<{ content: string }>;
}

// Register new plugins easily
registerResponsePlugin({
  type: 'diagram',
  detector: (content) => content.includes('```mermaid'),
  renderer: MermaidResponse
});
```

## 9. Testing Requirements
- Unit tests for quiz markdown parser
- Component tests for QuizResponse interactions
- Integration tests for chat flow
- E2E tests for complete quiz interaction
- Accessibility testing (keyboard navigation, screen readers)

## 10. Performance Considerations
- Lazy load response renderers
- Virtualize long message lists
- Debounce user input
- Optimize re-renders with React.memo
