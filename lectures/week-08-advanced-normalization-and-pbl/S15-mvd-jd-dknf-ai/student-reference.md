# S15 — MVD, JD, DKNF, Alternatives, AI Checks

**Unit 3 | 50–60 minutes | CO3**

Official topics: Multi-valued Dependencies · Join Dependencies · Domain-Key Normal Form · Alternative approaches to database design · AI normalization validation · AI anomaly detection · Data quality analysis

Prerequisite: [S14](../../week-07-normalization-core/S14-3nf-bcnf/student-reference.md)

---

## Why Are We Learning This?

The syllabus includes 4NF-related ideas (MVD), 5NF-related JD, and DKNF. You need definitions and **one** campus example each, not a research proof.

---

## MVD and 4NF (via MVD)

`X →→ Y` : Y’s values for X are independent of the rest. Classic: employee with independent `skill` and `language` in one table → 4NF decomposition.

Mess: if `meal_id →→ allergen` and `meal_id →→ utensil` independently, do not store the cross product as if they depended.

## Join dependency and 5NF

A join dependency says a relation equals the join of its projections. If a cyclic three-way supply (supplier-part-project) does not decompose into two projections, JD/5NF is the conversation.

## DKNF

If all constraints are logical consequences of **domain** and **key** constraints, the design is DKNF. Practical message: push as many rules as possible into domains and keys; leftover rules are assertions/triggers.

## Alternative design approaches

- ER-first (this course)
- FD-first / universal relation then decompose
- View-integration of departmental schemas
- Document/JSON store for sparse events — **still** record keys and duplication cost

## AI validation and data quality

Tools (Vertabelo AI, SQLDBM) may flag NF. You still list FDs. Data quality: NULL rates, orphan FKs, duplicate natural keys, impossible dates (expiry before donation).

---

## Practice

**Easy.** Why is a skill×language cross product an MVD symptom?

**Medium.** Name one rule in PBL 04 that is **not** a key but must hold (expiry). DKNF comment.

**Challenge.** If AI says “already BCNF” and you found `advisor_id → office`, who wins?

---

## Key takeaways

- MVD/JD/DKNF: definitions + one example.
- AI is a linter. FDs are the proof.
- S16: Milestone 3 presentations. SQL: S17.
