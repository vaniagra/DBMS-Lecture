# S11 — Set Operations, RA Queries, Calculus Overview

**Unit 2 | 50–60 minutes | CO2**

Official topics: Set operations · Relational algebra queries · Tuple Relational Calculus overview · Domain Relational Calculus overview

Prerequisite: [S10](../../week-05-relational-model-and-algebra/S10-relational-algebra-basic/student-reference.md)

---

## Why Are We Learning This?

Union of two compatible relations models “students who applied **or** were nominated.” Calculus shows **what** is true without saying **how** (algebra/SQL).

---

## Set operations

Relations must be **union-compatible** (same degree, compatible domains).

| Op | Meaning |
| --- | --- |
| ∪ | union |
| ∩ | intersection |
| − | difference |
| ÷ | division (schema: A÷B — “all B related to A”) |

Division example: students who enrolled in **all** core courses.

---

## RA query pattern

```text
1. Name the result heading
2. Join what must be combined
3. Restrict
4. Project
5. If “all” / “never”, consider difference or division
```

---

## Tuple relational calculus (overview)

```text
{ t | cond(t) }
```

“The set of tuples t such that the condition holds.” Quantifiers ∃ ∀ appear. You must read an expression; writing long TRC is secondary to algebra in this course unless the exam paper insists.

## Domain relational calculus (overview)

```text
{ <a,b> | cond(a,b) }
```

Variables are **domain values**, not whole tuples.

---

## Debugging example

Union of `Student(roll, name)` and `Course(code, title)`.

**What is wrong?**

Not union-compatible.

---

## Practice

**Easy.** Students in CSE ∪ students in ECE — condition for compatibility.

**Medium.** Students who never rated a meal (difference).

**Challenge.** Read: `{ t | ∃e ( Enroll(e) ∧ e.roll = t.roll ∧ e.course = 'DBMS' ) }`

---

## Key takeaways

- Set ops need compatibility.
- TRC/DRC: declarative “what.” Algebra/SQL: “how.”
- Week 7: normalization. SQL lectures: Week 9.
