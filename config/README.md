# How to paste form URLs

Keys use **S1–S7** (legacy `milestone_*` removed):

```json
"s1_student": "https://forms.gle/...",
"s1_faculty": "https://docs.google.com/spreadsheets/...",
...
"s7_student": "",
"s7_faculty": "",
"cloud_bonus_student": "",
"cloud_bonus_faculty": ""
```

Calendar: [course-calendar.json](course-calendar.json) — field `stages` array.

Student portal reads `*_student` only. Faculty portal reads both.

Empty string → portal shows **Form not configured**.
