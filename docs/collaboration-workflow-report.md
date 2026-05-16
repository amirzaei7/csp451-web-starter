# Collaboration Workflow Report
**Author:** Alireza Mirzaei
**Email:** amirzaei7@myseneca.ca
**Course:** CSP-451 — Summer 2026

## Issues Created
Three GitHub Issues were created before any branch work began:
- Issue #1: [Feature] User Authentication — tracking the login UI and auth route work.
- Issue #2: [Feature] Database Connection — tracking the DB stub implementation.
- Issue #3: [Feature] API Endpoints — tracking the new REST modules.

## Pull Request Summaries
PR #1 (feature/user-authentication to main): Improved public/login.js with email/password
validation, added authService.js, and created the /api/auth/login endpoint. Merged via
Squash and merge to keep main's history linear.

PR #2 (feature/database-connection to main): Implemented connect() and query() in
src/db/index.js reading from process.env, added /api/health/db, and provided .env.example.

PR #3 (feature/api-endpoints to main): Refactored api.js into a separate items.js
module, added POST /api/items with input validation, and created validation middleware.

## Review Evidence
Each PR was self-reviewed. On PR #2, a critical review comment was left requesting that
the connect() function return false on failure instead of throwing. A follow-up commit
addressed this by wrapping the connection in a try/catch block.

## Merge Strategy
Squash and merge was used for all three PRs. This collapses feature-branch commits into
one clean commit per feature on main, keeping the production history readable.

## Lessons Learned
Using branch protection rules prevented accidental direct pushes to main. Conventional
commits made the PR descriptions easier to write because the intent of each change was
already documented at commit time.
