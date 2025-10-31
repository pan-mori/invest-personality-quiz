# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

```bash
# Development
npm run dev              # Start dev server on http://localhost:3000 (auto-opens)
npm run build            # Build for production (runs tsc + vite build)
npm run preview          # Preview production build locally
npm run lint             # Run ESLint validation

# Testing & Debugging
npm run lint             # Validate all TypeScript and TSX files with strict rules
```

## Project Overview

**Investiční Personalita** is a Czech-language web application that helps users discover their investment personality type and understand their behavioral biases through interactive quizzes.

**Key Focus**: Educational tool for responsible investing, particularly around crypto, based on behavioral finance and psychology research (Big5 framework, IFEC standards).

## Architecture & Data Flow

### Core Design Pattern: Quiz State Machine

Each quiz follows an explicit state machine with three phases:

```
Intro (quiz not started)
    ↓ [user clicks start]
Quiz (questions 1...N)
    ↓ [user answers all questions]
Result (scoring complete)
```

This is implemented via `AppState` type in page components (`'intro' | 'quiz' | 'result'`).

### Key Files & Their Roles

**Quiz Questions & Scoring**:
- `src/data/questions.ts` - Main personality quiz (10 questions)
- `src/data/cryptoQuestions.ts` - Crypto responsibility quiz (7 questions)
- `src/utils/scoring.ts` - Calculates results by aggregating bias scores across all questions

**Data Models**:
- `src/types/quiz.ts` - Core interfaces (Question, BiasScores, PersonalityResult, etc.)
- `src/data/biasInfo.ts` - Detailed descriptions for each bias type (used in results)

**Pages (routing)** - Controlled by `src/App.tsx`:
- `/` → `EducationPage` - Landing page with educational content about crypto investing
- `/personality-quiz` → `MainQuiz` - Main 10-question personality assessment (measures 5 bias types)
- `/crypto-quiz` → `CryptoQuiz` - 7-question crypto-specific quiz with immediate feedback per question

**Components** - Reusable UI pieces used across pages:
- `QuizIntro.tsx` - "Start Quiz" screen
- `QuizQuestion.tsx` - Single question with multi-choice answers
- `QuizResult.tsx` - Results display with detailed breakdown and recommendations
- `LoadingSpinner.tsx` - Loading indicator

**Styling**:
- `src/styles/globals.css` - Base Tailwind & global resets
- `src/styles/index.css` - Imports globals + modern
- `src/styles/modern.css` - Theme-specific styles (imported last for overrides)
- `src/contexts/ThemeContext.tsx` - Dark/light mode provider (uses CSS class strategy)

### The 5 Investment Bias Types

The quiz measures these cognitive biases:

1. **Herding (Stádový)** - Following trends and other investors
2. **Risk Aversion (Konzervativní)** - Preferring safety over growth
3. **Overreaction (Emotivní)** - Reacting emotionally to market changes
4. **Overconfident (Sebevědomý)** - Over-trusting own analysis
5. **High Returns (Spekulativní)** - Seeking risky, high-return investments

### Scoring Algorithm

In `src/utils/scoring.ts:calculateResult()`:

1. Each question option has a `scores` object with weights for each bias type (0-3)
2. Iterate through all user answers and **accumulate raw scores** per bias
3. Calculate **max possible scores** by finding the highest score per bias across all question options
4. Normalize to **percentages** (0-100) using: `(totalScore / maxPossibleScore) * 100`
5. Determine **dominant bias** as the one with highest percentage
6. Fetch detailed description/characteristics/tips from `biasInfoMap` and return result

The percentages are categorized as:
- Nízká (Low): < 40%
- Střední (Medium): 40-60%
- Vysoká (High): 60-80%
- Velmi vysoká (Very High): ≥ 80%

## Key Technical Patterns

### Type Safety

- TypeScript strict mode enabled
- All components and utilities are typed
- Use `BiasType = keyof BiasScores` for type-safe iteration over bias names

### Component Props Pattern

Quiz components follow a lifted state pattern:
- Parent (`MainQuiz`, `CryptoQuiz`) holds quiz state
- Child components (`QuizQuestion`, `QuizResult`) receive data + callbacks
- Navigation state managed at page level, not globally

### Path Aliases

Use `@/` prefix for imports from `src/`:
```typescript
import { questions } from '@/data/questions'
import Button from '@/components/ui/button'
```

Configured in `tsconfig.json` and `vite.config.ts`.

### Styling Approach

- **Tailwind CSS** for utility classes (dark mode via class strategy)
- **class-variance-authority** for component style variants
- **clsx + tailwind-merge** for safe className composition
- **Framer Motion** for animations (progress bars, transitions)

Theme colors and dark mode styles defined in:
- `tailwind.config.js` - Color palette, animations
- `src/styles/modern.css` - Component-specific overrides
- `src/contexts/ThemeContext.tsx` - Theme toggle logic

## Adding New Features

### Adding a New Quiz Question

1. Edit `src/data/questions.ts` (or `cryptoQuestions.ts`)
2. Add Question object with id, text, options (each with scores for all 5 biases)
3. Scoring logic automatically handles new questions - no changes needed
4. Update `src/components/QuizQuestion.tsx` if UI needs adjustment (usually doesn't)

### Adding a New Bias Type

⚠️ **High impact change** - affects scoring logic:

1. Add new key to `BiasScores` interface in `src/types/quiz.ts`
2. Add bias info to `biasInfoMap` in `src/data/biasInfo.ts`
3. Update all Question options in both quiz data files to include scores for new bias
4. Scoring logic in `src/utils/scoring.ts` works generically - no code changes needed

### Adding a New Page/Route

1. Create page component in `src/pages/YourPage.tsx`
2. Add Route in `src/App.tsx` within the Routes
3. Create navigation links in components (usually in a header or nav component)

## Common Issues & Solutions

**Issue**: Quiz doesn't calculate scores correctly after adding new question
- Check that each option in the new question has `scores` object with all 5 bias types
- Verify BiasScores type includes all biases

**Issue**: Theme changes don't apply
- Check `ThemeContext.tsx` - ensure provider wraps all routes in App.tsx
- Verify dark mode CSS is in `src/styles/modern.css` (loaded after globals)
- Check browser DevTools to confirm `dark` class is applied to `<html>`

**Issue**: TypeScript strict mode errors
- Use `as BiasType` for type assertions when needed
- Always provide type annotations for objects matching interfaces
- Check that imported types are exported from their modules

## Deployment

- **Target**: Vercel (configured in `vercel.json`)
- **Build Command**: `npm run build` (outputs to `/dist`)
- **Preview**: `npm run preview` runs local server on `:4173`
- **SPA Routing**: Vercel config rewrites all routes to `/index.html`

## Development Notes

- **Language**: Content is Czech, code comments are English
- **Inspiration Sources**: IFEC Quiz, CryptoResponsible.com, BIS research
- **Browser Support**: Modern browsers with ES2020 support (Vite default)
- **Internationalization**: Currently Czech-only; would require i18n library for multi-language support
