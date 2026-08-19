# S05 — Extended ER

**Unit 1 | 50–60 minutes | CO1**

Official topics: Extended ER Features

Prerequisite: [S04](../../week-02-er-modeling/S04-strong-weak-entities-er-diagram/student-reference.md)

---

## Why Are We Learning This?

Specialization (“Staff ISA Person”) and aggregation (a relationship treated as a unit) show up in exam diagrams and in PBL 07 (invigilator vs student) and PBL 11 (reviewer vs investigator).

---

## The Problem

> University people: every person has an ID and name. Faculty teach. Students enroll. Some faculty are also students (rare, but the model must not explode). Scholarships apply only to students.

---

## Mental Model

**Specialization / generalization (ISA)**

```text
PERSON
  ├── STUDENT   (roll, programme)
  └── FACULTY   (emp_code, dept)
```

Constraints you must mark:

| Constraint | Meaning |
| --- | --- |
| Disjoint vs overlapping | Can one person be both? |
| Total vs partial | Must every person be a subclass? |

**Aggregation:** treat a relationship (e.g. Project–Sponsors–Agency) as an entity so it can relate to `Mentor`.

**Union / category (if taught):** `Owner` is Vehicle **or** Person — use only if the problem forces it.

---

## Worked example

Exam integrity (PBL 07): `Person` specialized into `Student` and `Invigilator`. Overlapping if a research scholar invigilates; disjoint if the rules forbid it. **Write the business rule.**

---

## Debugging example

Copying attributes `name` onto Student and Faculty instead of inheriting from Person.

**What is wrong?**

Update anomaly (Unit 3 preview). EER exists to keep the shared attributes once.

---

## Common mistakes

- ISA with no disjoint/total decision
- Aggregation drawn as a random box around the whole diagram
- Subclass without extra attributes **and** without extra relationships (then why specialize?)

---

## Practice

**Easy.** Disjoint or overlapping: BloodDonor vs Patient (PBL 04/09)?

**Medium.** Draw aggregation: Booking relates Room and Faculty; Maintenance inspects that booking.

**Challenge.** Total specialization of Vehicle into Bus and Car for PBL 03 — what fact is lost if a truck appears?

---

## Key takeaways

- EER constraints are business rules in notation.
- S06 reduces ER/EER to tables.
