# How to paste form URLs

1. Create a Google Form or Microsoft Form per milestone (student).
2. Link a response spreadsheet (faculty).
3. Set **stop accepting responses** at 23:59 IST on the due date.
4. Paste into `submission-links.json`:
   - `milestone_N_student` — form URL students open
   - `milestone_N_faculty` — spreadsheet or “responses” URL
5. Empty string `""` means the portal shows “Form not configured”.
6. Never commit fake `https://forms.gle/xyz` links.

Calendar dates: `course-calendar.json`.
