# S10 — Relational Algebra: Basic Operations

**Unit 2 | 50–60 minutes | CO2**

Official topics: Relational Algebra · Basic relational algebra operations

Prerequisite: [S09](../S09-relational-structure-er-to-rel/student-reference.md)

---

## Why Are We Learning This?

SQL is implemented with algebra-like operators. Exam questions ask you to write algebra **and** to see why a JOIN is a product plus a restrict.

---

## The Problem

> Relations: `Student(roll, name, prog)`, `Enroll(roll, course, grade)`. List names of CSE students who scored A in DBMS.

---

## Mental Model

Think in **sets of tuples**.

| Operator | Meaning | Exam symbol |
| --- | --- | --- |
| Select (restrict) | Keep rows | σ |
| Project | Keep columns (set: duplicates collapse) | π |
| Product | All combinations | × |
| Rename | Change relation/attribute names | ρ |
| Join (theta / natural) | Combine related tuples | ⋈ |

Basic this session: σ, π, ×, ρ, and ⋈ as “product + select” if the instructor uses that definition.

```text
π_name ( σ_prog='CSE' ∧ grade='A' ∧ course='DBMS' ( Student ⋈ Enroll ) )
```

Predict the result **on paper** with three sample tuples before writing SQL in S17.

---

## Trace

| Step | Result heading |
| --- | --- |
| Student ⋈ Enroll | roll, name, prog, course, grade |
| σ | subset of rows |
| π_name | names only (set) |

---

## Debugging example

Projecting `roll` after a join and expecting duplicate rolls to remain.

**What is wrong?**

Algebra project is a set. SQL `SELECT roll` without DISTINCT may keep duplicates — note the difference.

---

## Practice

**Easy.** σ_capacity>2 (Room)

**Medium.** Names of students not in CSE (using only basic ops — may need later set difference in S11)

**Challenge.** Express natural join using × and σ.

---

## Key takeaways

- Algebra is set-based. SQL bags are a later honesty moment.
- S11: union, intersect, difference, division (if in exam), TRC/DRC overview.
