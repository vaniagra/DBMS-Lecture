# S02 — Where Does Data Live? Two Layers, Three Layers

**Unit 1 | 50–60 minutes | CO1**

Official topics: Data Models · Database Architecture · Two-layer architecture · Three-layer architecture

Prerequisite: [S01](../../week-01-database-foundations/S01-files-vs-dbms/student-reference.md) — shared store, integrity, recovery.

---

## Why Are We Learning This?

The warden wants a report: occupied rooms by block. Finance wants the same rooms joined to dues. If both programs hard-code file layouts, a renamed column breaks both. Architecture is the agreement about **who is allowed to see what, and who is allowed to change the layout**.

---

## The Problem

> The hostel database must serve a clerk (allot), finance (dues), and a public kiosk (only “rooms left in Block C”). One store. Three visibilities. If we add `blood_group` later, the kiosk must not start showing it.

---

## Think First

A **data model** is the language we use to describe data:

```text
Conceptual  —  entities and relationships (ER, later this unit)
Logical     —  tables, keys, SQL (Unit 2)
Physical    —  files, indexes, pages (Unit 5 preview)
```

Architecture answers: which of these can change without rewriting every app?

---

## Mental Model — three-schema (ANSI/SPARC)

```text
External level     views for clerk / finance / kiosk
        ↑ mapping
Conceptual level   one community schema (rooms, students, allotments)
        ↑ mapping
Internal level     how PostgreSQL stores pages and indexes
```

**Logical data independence:** change conceptual schema (add `blood_group`) without breaking the kiosk view.

**Physical data independence:** change indexes without rewriting finance’s SELECT list.

---

## Two-layer architecture

Some deployments collapse external+conceptual, or conceptual+internal:

```text
Two-layer (typical small app)
  Application  ↔  Database engine
```

The application embeds SQL. Views may still exist. You still have a schema. Two-layer is **not** “no DBMS.” It is “few schema layers.”

Three-layer is the teaching model for **why views and mappings exist**.

---

## Data models (only what you need)

| Model | You will use it |
| --- | --- |
| ER / EER | S03–S06, Milestone 2 |
| Relational | S09 onward, Milestone 3–4 |
| Others (network, hierarchical, document) | Know they exist; exam: contrast with relational, do not implement CODASYL |

Cloud-native and distributed placement: S07. Do not finish NoSQL today.

---

## Worked example

Kiosk view:

```text
external:  block, rooms_free
conceptual: Room(room_no, block, capacity), Allotment(...)
internal:  heap + index on block  (you do not design this in S02)
```

If we add a column `medical_note` at conceptual level, the kiosk view **omits** it. That is the architecture doing its job.

---

## Trace

| Change | Which layer | Who should notice |
| --- | --- | --- |
| New index on `block` | Internal | Query speed; not the kiosk UI |
| Add `blood_group` | Conceptual | Apps that asked for it; kiosk view unchanged |
| Hide student names on kiosk | External | Only the kiosk |

---

## Debugging example

“We will put passwords in the same table as room allotment because three-layer architecture stores everything together.”

**What is wrong?**

Conceptual schema can contain a User table. External views must not project passwords to the kiosk. Architecture is about **controlled visibility**, not one giant table.

---

## Common mistakes

- Drawing three boxes and never mentioning mapping
- Calling two-tier “client-server” and stopping — say what is in each tier
- Mixing data model (ER vs relational) with architecture (external/conceptual/internal)

---

## Practice

**Easy.** Name the three ANSI/SPARC levels.

**Easy.** Which independence lets us add an index without rewriting SQL lists?

**Medium.** Finance must not see medical notes. Which level implements that?

**Challenge.** A team stores JSON in one column “to be modern.” Which independence did they give up, and what breaks in Milestone 3?

---

## Key takeaways

- Data models are languages; architecture is layers and mappings.
- Three-layer architecture is how views protect applications from change.
- Two-layer is a common deployment, not an excuse to skip schema.
- S03 starts ER: the conceptual language for Milestone 2.
