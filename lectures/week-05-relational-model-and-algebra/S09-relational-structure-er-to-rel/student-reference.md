# S09 — Relations, Keys, ER to Relational

**Unit 2 | 50–60 minutes | CO2**

Official topics: Structure of Relational Database · ER to Relational conversion

Prerequisite: [S06](../../week-03-extended-er-and-mapping/S06-er-to-tables-ai-schema/student-reference.md)

---

## Why Are We Learning This?

A relation is not “an Excel sheet.” It is a set of tuples over a heading of attributes, with keys that mean something.

---

## The Problem

> After mapping Hostel–Room–Resident, we have tables. Which columns are keys? Which FKs may be NULL? What is a candidate key vs a primary key?

---

## Structure of a relational database

```text
Relation  = heading (attributes + domains) + body (set of tuples)
Tuple     = no duplicates if it is a true relation
Attribute = atomic in 1NF (Unit 3)
```

**Superkey** — identifies tuples.  
**Candidate key** — minimal superkey.  
**Primary key** — chosen candidate.  
**Foreign key** — values must match a candidate in the referenced relation (or be NULL if allowed).

Integrity: entity integrity (no NULL in PK) and referential integrity.

---

## ER to relational (exam checklist)

Same S06 rules, now with vocabulary: schema, degree, cardinality of a relation (number of tuples).

Write schemas as:

```text
Room(hostel_id, room_no, capacity)
   PK (hostel_id, room_no)
   FK hostel_id → Hostel
```

---

## Debugging example

`Resident.room_no` as PK without `hostel_id`.

**What is wrong?**

Room 12 exists in two hostels. The FK is a **composite** match.

---

## Practice

**Easy.** Degree of `Room(hostel_id, room_no, capacity)`?

**Medium.** Can a FK be part of a PK? (Yes: weak entity.)

**Challenge.** 1:1 Faculty–Office: FK on which side if every office must have a faculty but some faculty have no office?

---

## Key takeaways

- Keys are meaning, not underlines for decoration.
- S10: relational algebra — querying without SQL yet.
