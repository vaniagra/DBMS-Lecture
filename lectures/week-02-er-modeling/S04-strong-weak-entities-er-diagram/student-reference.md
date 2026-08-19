# S04 — Strong Sets, Weak Sets, Drawing the ER

**Unit 1 | 50–60 minutes | CO1**

Official topics: ER Diagram · Strong Entity Sets · Weak Entity Sets

Prerequisite: [S03](../S03-entities-attributes-constraints/student-reference.md)

---

## Why Are We Learning This?

Exam answers lose marks for missing double-line weak entities. PBL Milestone 2 loses marks when a dependent object is drawn as strong with a fake global key.

---

## The Problem

> Hospital (PBL 09): a **bed** exists only inside a **ward**. Bed number 12 repeats in every ward. A **stay** exists only for a patient admission. If we invent `bed_id = 12` as a campus-wide key, transfers and reports lie.

---

## Mental Model

**Strong entity set:** has its own primary key.

**Weak entity set:** no complete key of its own. Identity = **owner’s key + partial key**. Drawn with a double rectangle; identifying relationship with a double diamond; total participation in the identifying relationship.

```text
WARD (ward_id)  ——identifies——  BED (bed_no)
     strong                         weak
                          partial key: bed_no
                          full key: (ward_id, bed_no)
```

Not every “small” thing is weak. `Doctor` is strong even if the hospital is small.

---

## ER diagram conventions (this course)

```text
Rectangle     entity
Diamond       relationship
Oval          attribute
Underline     key
Double oval   multi-valued
Dashed oval   derived
Double rectangle / diamond   weak / identifying
```

Cardinality: write 1 and N on the edges (or crow’s feet if the instructor allows — stay consistent in one diagram).

---

## Trace

| Object | Strong or weak | Why |
| --- | --- | --- |
| Patient | Strong | Hospital-wide `patient_id` |
| Ward | Strong | `ward_id` |
| Bed | Weak | `bed_no` unique only per ward |
| Admission | Usually strong | `admission_id` or weak on Patient+time — **choose and justify** |

---

## Debugging example

Drawing `Dependent` of an employee as strong with `name` as key.

**What is wrong?**

Two employees can have a child named Riya. Partial key `name` + owner `emp_id`.

---

## Common mistakes

- Weak entity without an identifying owner
- Using weak entity to avoid thinking about keys
- Crow’s feet mixed with 1/N on the same figure
- Relationship attributes (e.g. `allot_date`) forgotten — they sit on the diamond

---

## Practice

**Easy.** Why is `bed_no` not a primary key of Bed?

**Medium.** Exam seating: is `Seat` weak on `Room`? Draw keys.

**Challenge.** Blood unit (PBL 04): strong or weak on Donor? Defend. (Usually strong: `unit_id` / barcode.)

---

## Key takeaways

- Weak means identity depends on an owner, not “unimportant.”
- Milestone 2: every weak entity needs a partial key and an owner.
- S05 adds ISA, aggregation, specialization.
