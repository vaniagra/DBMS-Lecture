# Faculty submission console

Student portal must **not** link this file’s faculty columns.

Configure URLs in [../config/submission-links.json](../config/submission-links.json).

| Milestone | Student form | Responses | Rubric | Presentation |
| --- | --- | --- | --- | --- |
| M0 Team | `[SUBMISSION_0_FORM_URL]` | `[FACULTY_0_RESPONSES_URL]` | Gate | — |
| M1 Requirements | `[SUBMISSION_1_FORM_URL]` | `[FACULTY_1_RESPONSES_URL]` | 10 | 10 Sep 2026 |
| M2 ER | `[SUBMISSION_2_FORM_URL]` | `[FACULTY_2_RESPONSES_URL]` | 15 | 24 Sep 2026 |
| M3 NF | `[SUBMISSION_3_FORM_URL]` | `[FACULTY_3_RESPONSES_URL]` | 15 | 08 Oct 2026 |
| M4 SQL | `[SUBMISSION_4_FORM_URL]` | `[FACULTY_4_RESPONSES_URL]` | 20 | 22 Oct 2026 |
| M5 Tx/opt | `[SUBMISSION_5_FORM_URL]` | `[FACULTY_5_RESPONSES_URL]` | 15 | 02 Nov 2026 |
| Final | `[SUBMISSION_FINAL_FORM_URL]` | `[FACULTY_FINAL_RESPONSES_URL]` | 15 | 07–09 Nov 2026 |

How to wire: create a student Google/Microsoft Form and a linked sheet. Put the form URL in `*_student` and the sheet/edit URL in `*_faculty`. Set the form to close at 23:59 IST on the due date.
