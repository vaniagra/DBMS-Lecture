# S14 — 3NF and BCNF

**Unit 3 | 50–60 minutes | CO3**

Official topics: 3NF · BCNF

Prerequisite: [S13](../S13-fds-anomalies-1nf-2nf/student-reference.md)

---

## Why Are We Learning This?

Milestone 3 due 06 Oct. You must prove 3NF and discuss BCNF. “Looks neat” is zero marks.

---

## Transitive dependency

`X → Y` and `Y → Z` with Y not a superkey: `Z` depends on X through Y.

Example: `Student(roll, advisor_id, advisor_office)` if `roll → advisor_id` and `advisor_id → advisor_office`.

**3NF:** 2NF + no non-prime attribute transitively dependent on a candidate key. (Exam: also the standard: for every FD X→A, X is superkey **or** A is prime.)

**BCNF:** for every non-trivial FD X→A, X is a superkey. Stricter than 3NF.

---

## When 3NF ≠ BCNF

Classic: `R(S, Sub, T)` with `S,Sub → T` and `T → Sub` (teacher determines subject). 3NF may hold; BCNF fails. Decomposing to BCNF can lose a dependency — **say so** if it happens in PBL.

---

## Verify after decompose

- Lossless join (example: common key is key of one piece)
- Dependency preservation when possible
- No leftover anomalies on the original bad story

---

## Debugging example

Splitting randomly until every table has two columns.

**What is wrong?**

You may lose FDs or make the application unjoinable. Decomposition follows violating FDs.

---

## Practice

**Easy.** Show the transitive FD in Student-advisor-office.

**Medium.** Is the 3NF relation with `T → Sub` in BCNF?

**Challenge.** Decompose to BCNF and state which FD is not preserved.

---

## Key takeaways

- 3NF allows some FDs where the right side is prime; BCNF does not.
- S15: MVD, JD, DKNF, AI validation.
