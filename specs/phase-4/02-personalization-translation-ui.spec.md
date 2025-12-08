# Specification: Personalization & Translation UI

## 1. Overview
This specification defines the frontend UI components for content personalization and Urdu translation features. These features allow logged-in users to customize chapter content based on their experience level or view it in Urdu.

## 2. User Stories
- **US1:** As a logged-in user reading a chapter, I want to click a "Personalize Content" button to rewrite the content for my experience level.
- **US2:** As a logged-in user, I want to click a "Translate to Urdu" button to view the chapter in Urdu.
- **US3:** As a user, I want to easily toggle back to the original content after personalizing or translating.
- **US4:** As a non-authenticated user, I want to see these buttons disabled with a tooltip prompting me to login.

## 3. Technical Design

### 3.1 Component Structure
Create `src/components/ContentActions/`:
- `PersonalizeButton.tsx` - Trigger content personalization
- `TranslateButton.tsx` - Trigger Urdu translation
- `ContentActionsBar.tsx` - Container for action buttons

### 3.2 State Management
Use React state to manage:
- `originalContent` - Store original MDX content
- `displayContent` - Current content being displayed
- `contentMode` - 'original' | 'personalized' | 'translated'
- `loading` - API call status

### 3.3 Integration with MDX Pages

#### Modify Chapter Layout
Wrap all chapter MDX pages with a layout component that includes:
```tsx
<ChapterLayout>
  <ContentActionsBar />
  <MDXContent content={displayContent} />
</ChapterLayout>
```

#### Content Actions Bar Component
```tsx
interface ContentActionsBarProps {
  chapterContent: string;
}

// Features:
// - Show Personalize and Translate buttons
// - Disable if user not authenticated
// - Show loading spinner during API calls
// - Show "Reset to Original" button when modified
```

### 3.4 API Integration

#### Personalize Content
```typescript
POST /api/personalize
Authorization: Bearer <token>
Content-Type: application/json

{
  "content": "<markdown content>"
}

Response:
{
  "personalized_content": "<rewritten markdown>"
}
```

#### Translate Content
```typescript
POST /api/translate
Authorization: Bearer <token>
Content-Type: application/json

{
  "content": "<markdown content>",
  "target_language": "ur"
}

Response:
{
  "translated_content": "<urdu markdown>"
}
```

## 4. User Experience Flow

### Personalization Flow
1. User clicks "Personalize Content"
2. Show loading indicator
3. Send current chapter markdown to `/api/personalize`
4. Backend uses user's `software_exp` and `hardware_exp` from profile
5. Replace displayed content with personalized version
6. Show "Reset to Original" button
7. Cache personalized content (don't re-request on toggle)

### Translation Flow
1. User clicks "Translate to Urdu"
2. Show loading indicator
3. Send current chapter markdown to `/api/translate`
4. Replace displayed content with Urdu version
5. Show "Reset to Original" button
6. Maintain code blocks and technical terms in English

### Reset Flow
1. User clicks "Reset to Original"
2. Immediately restore `originalContent`
3. Set `contentMode` to 'original'
4. Hide reset button

## 5. UI/UX Specifications

### Button Design
- **Personalize Button:**
  - Icon: ⚙️ (gear/settings icon)
  - Label: "Personalize for {experience level}"
  - Color: Primary theme color
  
- **Translate Button:**
  - Icon: 🌐 (globe icon)
  - Label: "Translate to Urdu"
  - Color: Secondary theme color

- **Reset Button:**
  - Icon: ↩️ (reset icon)
  - Label: "Show Original"
  - Color: Neutral/gray

### Loading State
- Disable buttons during API calls
- Show inline spinner next to button text
- Prevent multiple simultaneous requests

### Authentication Check
```tsx
if (!user) {
  return (
    <Tooltip content="Please login to use this feature">
      <Button disabled>Personalize</Button>
    </Tooltip>
  );
}
```

## 6. Error Handling
- **Network Error:** "Failed to personalize content. Please try again."
- **401 Unauthorized:** Redirect to login page
- **500 Server Error:** "Server error. Please try again later."
- **Timeout:** Cancel request after 30 seconds

## 7. Performance Optimization
- Cache personalized/translated content in component state
- Debounce rapid button clicks
- Show cached content immediately on mode toggle
- Consider localStorage caching for session persistence

## 8. Accessibility
- Proper ARIA labels for all buttons
- Keyboard navigation support
- Screen reader announcements for content changes
- High contrast mode compatibility
