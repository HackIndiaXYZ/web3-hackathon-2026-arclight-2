# Contributing to Mail-IQ

First off, **thank you** for considering contributing to Mail-IQ! It's people like you that make Mail-IQ such a great tool. 🎉

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Style Guidelines](#style-guidelines)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Mail-IQ.git
   cd Mail-IQ
   ```
3. **Add upstream** remote:
   ```bash
   git remote add upstream https://github.com/Devengoyal885/Mail-IQ.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Set up environment**:
   ```bash
   cp .env.example .env
   # Fill in your credentials
   ```
6. **Start development server**:
   ```bash
   npm run dev
   ```

---

## Development Setup

### Required Tools
- **Node.js** 18+ ([download](https://nodejs.org))
- **npm** 9+ (comes with Node.js)
- **Git** 2.30+
- **VS Code** (recommended) with extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense

### Optional
- **Supabase CLI** — for local database development
- **Gemini API Key** — for AI feature testing

---

## How to Contribute

### 🐛 Reporting Bugs

Use the [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md). Please include:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS info

### ✨ Suggesting Features

Use the [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md). Please include:
- Problem/motivation
- Proposed solution
- Alternatives considered

### 🔧 Submitting Code

1. Pick an issue from the [issue tracker](https://github.com/Devengoyal885/Mail-IQ/issues) or create one
2. Create a branch: `git checkout -b feat/your-feature-name`
3. Make your changes
4. Test thoroughly
5. Commit following our [convention](#commit-convention)
6. Push and open a PR

---

## Style Guidelines

### JavaScript/TypeScript
- Use TypeScript for all new code
- Follow ESLint rules (run `npm run lint`)
- Prefer functional components and hooks
- Use descriptive variable names

### CSS / Tailwind
- Use Tailwind utility classes
- Follow mobile-first responsive design
- Maintain dark/light mode compatibility

### Component Structure
```tsx
// Good: Self-contained, typed, documented
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
    >
      {label}
    </button>
  );
}
```

---

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | UI/formatting (no logic change) |
| `refactor` | Code restructure |
| `perf` | Performance improvement |
| `test` | Adding tests |
| `chore` | Build process, tooling |
| `security` | Security fix |

**Examples:**
```bash
git commit -m "feat(ai): add email translation to 8 languages"
git commit -m "fix(inbox): resolve email list not updating after archive"
git commit -m "docs: update Gmail setup instructions"
```

---

## Pull Request Process

1. **Ensure** your branch is up to date with `main`
2. **Run** all checks locally: `npm run lint && npm run build`
3. **Fill out** the PR template completely
4. **Link** related issues with `Closes #123`
5. **Request** review from [@Devengoyal885](https://github.com/Devengoyal885)
6. **Wait** for CI to pass
7. **Address** any review feedback

PRs are merged using **Squash and Merge** to keep history clean.

---

## Questions?

- 💬 Open a [Discussion](https://github.com/Devengoyal885/Mail-IQ/discussions)
- 📧 Email: [deven@mailiq.dev](mailto:deven@mailiq.dev)
- 🐦 Twitter: [@DevenGoyal885](https://twitter.com/DevenGoyal885)

Thank you for contributing! 🚀
