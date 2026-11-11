# Verify gambiav0
Next.js app.
## Launch
`npm install`, then `npm run build` and `npm start`.
## Doctor
`python3 .cursor/skills/verify-gambiav0/verify.py`
## Drive
Builds with next, boots the production server on port 3101, renders the homepage in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-gambiav0/evidence.json`
## Cleanup
Server process-group-killed after the render.
## Known boundaries
Single-page smoke only; no dedicated test suite exists in the repo.
