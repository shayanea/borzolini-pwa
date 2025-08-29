# 🐕 Husky & Commitlint Setup

This document describes the Git hooks and commit message validation setup for the Borzolini PWA project.

## ✨ Features

- **Pre-commit Hooks**: Automatically run linting and type checking before each commit
- **Commit Message Validation**: Enforce conventional commit message format
- **Git Message Template**: Provide guidance for writing proper commit messages

## 🛠️ Configuration Files

### 1. Husky Configuration
- **`.husky/pre-commit`**: Runs before each commit
  - ESLint linting
  - TypeScript type checking
- **`.husky/commit-msg`**: Validates commit message format
  - Uses commitlint with conventional rules

### 2. Commitlint Configuration
- **`commitlint.config.js`**: Defines commit message rules
  - Enforces conventional commit types
  - Validates message format and length
  - Ensures proper case formatting

### 3. Git Message Template
- **`.gitmessage`**: Template for commit messages
  - Shows available commit types
  - Provides examples and scope suggestions
  - Guides developers on proper formatting

## 📝 Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Commit Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Maintenance tasks
- `revert`: Reverting previous commits

### Scopes
- `pwa`: PWA-specific changes
- `ui`: UI component changes
- `auth`: Authentication related changes
- `api`: API integration changes
- `deps`: Dependency updates

### Examples
```bash
git commit -m "feat(pwa): add offline support"
git commit -m "fix(ui): resolve button alignment issue"
git commit -m "docs: update README with installation steps"
git commit -m "style: format code with prettier"
git commit -m "refactor(auth): simplify login flow"
```

## 🚀 How It Works

1. **Pre-commit Hook**: 
   - Runs automatically before each commit
   - Executes `pnpm lint` and `pnpm type-check`
   - Prevents commit if checks fail

2. **Commit Message Validation**:
   - Validates commit message format
   - Ensures conventional commit standards
   - Provides helpful error messages

3. **Git Template**:
   - Automatically shows when creating commits
   - Guides developers on proper formatting
   - Can be bypassed with `--no-verify` if needed

## 🔧 Customization

### Adding New Hooks
To add new pre-commit checks, edit `.husky/pre-commit`:

```bash
# Add your custom checks here
echo "🔍 Running custom check..."
pnpm custom-check
```

### Modifying Commit Rules
Edit `commitlint.config.js` to change validation rules:

```javascript
rules: {
  'header-max-length': [2, 'always', 100], // Increase max length
  'type-enum': [2, 'always', ['feat', 'fix', 'docs']], // Custom types
}
```

### Updating Git Template
Modify `.gitmessage` to add new commit types or examples.

## 🚨 Troubleshooting

### Bypass Hooks (Emergency)
```bash
git commit --no-verify -m "emergency fix"
```

### Manual Hook Execution
```bash
# Run pre-commit manually
.husky/pre-commit

# Run commit-msg manually
.husky/commit-msg $1
```

### Reset Husky
```bash
rm -rf .husky
pnpm dlx husky init
```

## 📚 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Commitlint Documentation](https://commitlint.js.org/)
- [Git Hooks Documentation](https://git-scm.com/docs/githooks)
