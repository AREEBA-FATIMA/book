# Specification: Authentication UI Components

## 1. Overview
This specification defines the frontend authentication user interface components for the Docusaurus-based textbook platform. It implements Signup, Login, and Profile pages that integrate with the FastAPI authentication backend.

## 2. User Stories
- **US1:** As a new user, I want to access a clean Signup page where I can register with my email, password, name, and experience levels.
- **US2:** As a returning user, I want to log in with my credentials and be redirected to the homepage.
- **US3:** As a logged-in user, I want to view my profile showing my email, name, and experience levels.
- **US4:** As a logged-in user, I want to see my authentication status in the navigation bar and be able to logout.

## 3. Technical Design

### 3.1 Page Structure
Create the following React pages in `src/pages/`:
- `signup.tsx` - User registration form
- `login.tsx` - User login form  
- `profile.tsx` - User profile display (protected route)

### 3.2 Authentication Context
Create `src/contexts/AuthContext.tsx`:
- Maintains JWT token in localStorage
- Provides `user`, `login()`, `logout()`, `signup()` functions
- Handles API calls to `/api/auth/register`, `/api/auth/login`, `/api/auth/me`

### 3.3 Components

#### Signup Form (`src/pages/signup.tsx`)
**Fields:**
- Email (required, email validation)
- Password (required, min 8 characters)
- Full Name (required)
- Software Experience (dropdown: Beginner/Intermediate/Expert)
- Hardware Experience (dropdown: Beginner/Intermediate/Expert)

**Behavior:**
- On submit: POST to `/api/auth/register`
- On success: Auto-login and redirect to `/`
- On error: Display validation messages

#### Login Form (`src/pages/login.tsx`)
**Fields:**
- Email (required)
- Password (required)

**Behavior:**
- On submit: POST to `/api/auth/login` (OAuth2 format)
- On success: Store JWT token, redirect to previous page or `/`
- On error: Display "Invalid credentials" message

#### Profile Page (`src/pages/profile.tsx`)
**Display:**
- Email
- Full Name
- Software Experience level
- Hardware Experience level
- Logout button

**Behavior:**
- Protected route (redirect to login if not authenticated)
- Fetch data from `/api/auth/me` using Bearer token

### 3.4 Navigation Integration
Modify Docusaurus navbar configuration:
- Show "Login" and "Signup" links when user is not authenticated
- Show "Profile" and "Logout" when user is authenticated
- Use AuthContext to determine authentication state

## 4. API Integration

### Request Format
```typescript
// Signup
POST /api/auth/register
Content-Type: application/json
{
  "email": "user@example.com",
  "password": "password123",
  "full_name": "John Doe",
  "software_exp": "intermediate",
  "hardware_exp": "beginner"
}

// Login
POST /api/auth/login
Content-Type: application/x-www-form-urlencoded
username=user@example.com&password=password123

// Get Profile
GET /api/auth/me
Authorization: Bearer <jwt_token>
```

## 5. Styling Guidelines
- Use Docusaurus theme colors for consistency
- Implement responsive design (mobile-friendly)
- Add form validation visual feedback (red borders for errors)
- Use Infima CSS classes where possible

## 6. Error Handling
- Network errors: Show "Connection failed" message
- 400 errors: Display server validation messages
- 401 errors: Clear token and redirect to login
- 500 errors: Show "Server error, please try again"

## 7. Security Considerations
- Never store passwords in state or localStorage
- Clear sensitive form data after submission
- Implement CSRF protection if needed
- Validate all inputs client-side before submission
