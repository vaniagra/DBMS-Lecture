# Instructor Guide

## Session Objective

Students can name ER vs relational vs physical models, draw ANSI/SPARC three levels, and explain logical vs physical data independence with a kiosk-vs-finance example. They can say what “two-layer” means without declaring three-layer obsolete.

## Course Outcome Mapping

```text
CO1  Database architecture and data models
```

## Prerequisites

S01: shared store, integrity.

## 50–60 Minute Session Flow

```text
0–5 min     Hook: one store, three visibilities
5–15 min    Data models: conceptual / logical / physical
15–30 min   Board: three-schema architecture + two mappings
30–40 min   Logical vs physical independence
40–50 min   Two-layer vs three-layer without vendor religion
50–55 min   Debug: passwords in the allotment table
55–60 min   Exit question
```

## Board Plan

```text
External (views)
Conceptual (community schema)
Internal (files / indexes)
```

Arrows labeled **mapping**. Write **logical DI** on the top mapping, **physical DI** on the bottom.

## Live Demonstration

If PostgreSQL is ready, create a view (syntax preview only):

```sql
CREATE VIEW kiosk_free AS
SELECT block, COUNT(*) AS rooms_free
FROM room
WHERE ... ;
```

Do not teach JOIN. Point at “external level.”

## Questions to Ask

- If we change the index, must the warden’s printed report change?
- If we add a column, must every application change?
- Is MongoDB a data model, an architecture, or a product?

## Expected Student Misconceptions

- Three-tier web (browser/app/DB) **is** ANSI/SPARC three-schema. It is not. Say so once.
- “Physical level” means “the computer case.”
- Views are only for security, never for independence.

## Pair Activity

Sketch three external views for PBL: public, clerk, auditor. One attribute each that must **not** appear in public.

## PBL connection

Milestone 1 stakeholders become S02 external views. Milestone 2 is the conceptual ER.

## Exit Question

Explain physical data independence using “we added an index on block” in four sentences.
