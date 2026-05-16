# Conflict Resolution Report
**Author:** Alireza Mirzaei
**Email:** amirzaei7@myseneca.ca
**Course:** CSP-451 — Summer 2026

## What Conflicted
README.md was edited in overlapping lines on both feature/user-authentication and
feature/database-connection. Both branches added a new section under the main heading,
causing Git to detect a three-way merge conflict when the second PR was opened.

## What I Saw
Git inserted conflict markers into README.md:
- <<<<<<< HEAD showed the current branch version
- ======= separated the two versions
- >>>>>>> origin/main showed the incoming version

The conflict appeared in the GitHub PR UI as 'This branch has conflicts that must be
resolved' on PR #2.

## Resolution Strategy
I chose to keep both sections rather than discard either, since both features are real
parts of the application. I edited the file to include both sections, removed all
conflict markers, and ran npm test to confirm nothing was broken before committing.

The resolution commit message was:
chore(merge): resolve README conflict between auth and database-connection branches

## How to Prevent This in the Future
1. Communicate with teammates before editing shared files like README.md.
2. Rebase feature branches on main frequently to catch conflicts early.
3. Assign sections of shared docs to specific branches to avoid overlap.
4. Use pull --rebase instead of merge when syncing to maintain linear history.
