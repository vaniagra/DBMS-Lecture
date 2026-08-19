# Access Model

This repository has two **entry points**, not two security domains.

| Portal | Path | Who it is for |
| --- | --- | --- |
| Student | [student/index.md](student/index.md) · [portal/student.html](portal/student.html) | Learners |
| Faculty | [faculty/index.md](faculty/index.md) · [portal/faculty.html](portal/faculty.html) | Instructors |

---

## What GitHub can and cannot do

GitHub does **not** provide page-level access control inside one public repository.

- If this repo is **public**, anyone can open `faculty/`, answer keys, and form-management URLs.
- Hiding a link on the student dashboard is **organization**, not security.
- Instructor-guide.md files sit next to student-reference.md, as in the Programming in Java course. They are teaching plans, not mark sheets.

---

## If marks and keys must stay confidential

Use one of:

1. Keep `faculty/answer-keys/` and filled marks sheets in a **private** sibling repository.
2. Store marks in the university LMS.
3. Make this whole course repository private and invite only faculty + enrolled students, knowing students can still clone `faculty/`.

---

## Student portal must not link to

- answer keys
- solution SQL
- internal marks templates that are filled
- faculty moderation comments
- faculty response / management form URLs
- `pbl/*/faculty-guide.md`

---

## Faculty portal must show

- everything students see
- student submission URL **and** faculty response/management URL for each milestone
- full rubric
- viva bank
- evaluation notes
