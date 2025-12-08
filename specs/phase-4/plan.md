# Phase 4 Implementation Plan: Frontend Integration

## Goal
Integrate all backend Phase 3 features (Authentication, Personalization, Translation, Subagents) into the Docusaurus frontend, creating a complete user-facing experience.

## Specifications Reference
This plan executes the following specs:
1.  **Authentication UI**: [`01-auth-ui.spec.md`](./01-auth-ui.spec.md)
2.  **Personalization & Translation UI**: [`02-personalization-translation-ui.spec.md`](./02-personalization-translation-ui.spec.md)
3.  **Enhanced Chat Widget**: [`03-chat-widget-enhancement.spec.md`](./03-chat-widget-enhancement.spec.md)

## Prerequisites
- Phase 3 backend features fully implemented and tested
- Backend API running and accessible
- Docusaurus site structure in place

## Implementation Steps

### Step 1: Authentication UI (Spec: `01-auth-ui.spec.md`)
**Objective**: Create full authentication flow in the frontend.

**Components to Create:**
-   [NEW] `src/contexts/AuthContext.tsx` - Global auth state management
-   [NEW] `src/pages/signup.tsx` - Registration form
-   [NEW] `src/pages/login.tsx` - Login form
-   [NEW] `src/pages/profile.tsx` - User profile display
-   [MODIFY] `docusaurus.config.ts` - Add navbar items for auth
-   [NEW] `src/hooks/useAuth.ts` - Custom hook for auth operations

**API Integration:**
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/auth/me` - Fetch user profile

**Verification:**
1. User can successfully register with experience levels
2. User can login and JWT token is stored
3. Profile page displays user information
4. Navbar shows correct auth state

---

### Step 2: Personalization & Translation UI (Spec: `02-personalization-translation-ui.spec.md`)
**Objective**: Add content transformation buttons to chapter pages.

**Components to Create:**
-   [NEW] `src/components/ContentActions/ContentActionsBar.tsx` - Button container
-   [NEW] `src/components/ContentActions/PersonalizeButton.tsx` - Personalization trigger
-   [NEW] `src/components/ContentActions/TranslateButton.tsx` - Translation trigger
-   [NEW] `src/components/ChapterLayout.tsx` - Wrapper for chapter pages
-   [MODIFY] All chapter MDX files - Wrap with ChapterLayout

**API Integration:**
- POST `/api/personalize` - Content rewriting
- POST `/api/translate` - Urdu translation

**State Management:**
- Track `originalContent`, `displayContent`, `contentMode`
- Cache transformed content to avoid redundant API calls
- Handle loading and error states

**Verification:**
1. Personalize button rewrites content for user's experience level
2. Translate button converts content to Urdu
3. Reset button restores original content
4. Buttons are disabled for non-authenticated users
5. Loading states display during API calls

---

### Step 3: Enhanced Chat Widget (Spec: `03-chat-widget-enhancement.spec.md`)
**Objective**: Upgrade chat widget to support Subagent responses (quizzes).

**Components to Create:**
-   [NEW] `src/components/ChatWidget/ResponseRenderer.tsx` - Route to correct renderer
-   [NEW] `src/components/ChatWidget/QuizResponse.tsx` - Interactive quiz display
-   [NEW] `src/components/ChatWidget/TextResponse.tsx` - Standard text with citations
-   [MODIFY] `src/components/ChatWidget/ChatWidget.tsx` - Integrate ResponseRenderer
-   [NEW] `src/utils/parseQuiz.ts` - Quiz markdown parser

**Response Type Handling:**
```typescript
interface ChatResponse {
  response: string;
  citations?: string[];
  response_type?: 'text' | 'quiz' | 'flashcard';
}
```

**Quiz Features:**
- Parse quiz markdown into structured questions
- Interactive option selection
- Show/hide correct answers
- Visual feedback for correct/incorrect answers
- Retake quiz functionality

**Verification:**
1. Query "Give me a quiz on AI" triggers QuizResponse renderer
2. Standard queries show TextResponse with citations
3. Quiz interactions work correctly (selection, checking answers)
4. Chat history preserves different response types
5. Mobile responsiveness for all response types

---

## Dependencies and Order
1. **Step 1 (Auth UI) must be completed first** - Other features require authentication
2. **Step 2 and Step 3 can be done in parallel** - They are independent of each other
3. **Final integration testing** - Test all features together after individual completion

## Success Metrics
- All frontend tests pass
- User can complete full auth flow without errors
- Content personalization reflects user's experience level
- Urdu translation maintains proper formatting
- Quiz interactions are smooth and intuitive
- No console errors or warnings
- Mobile responsive on all screens

## Next Steps After Phase 4
- User acceptance testing (UAT)
- Performance optimization
- Deployment to production
- Documentation updates
