# S06 — ER to Tables, and AI as a Draftsman

**Unit 1 | 50–60 minutes | CO1**

Official topics: Reduction of ER Schema to Tables · AI-assisted schema design · Prompt-driven ER modeling

Prerequisite: [S05](../S05-extended-er/student-reference.md)

---

## Why Are We Learning This?

Milestone 3 starts from this mapping. AI tools will propose tables. You must know the mechanical rules so you can **reject** a bad draft.

---

## Mapping rules (mechanical)

| ER piece | Table rule |
| --- | --- |
| Strong entity | Table; key attributes → primary key |
| Weak entity | Table; PK = owner PK + partial key |
| 1:1 | FK on the total-participation side (usually) |
| 1:N | FK on the N side |
| M:N | New table; PK = both keys |
| Multi-valued attribute | New table; PK = entity PK + the value |
| Composite | Flatten to simple columns (or keep structure if the instructor asks) |
| ISA (disjoint) | Options: one table with type flag; or subclass tables with PK = superclass PK |
| Relationship attribute | Column on the table that represents that relationship |

Work one campus ER to tables on paper **before** any tool.

---

## Prompt-driven ER (exposure)

You may ask a copilot: “Entities for a blood bank: donors, units, requests, hospitals. Constraints: a unit cannot be allocated twice.”

Required after the tool replies:

```text
1. Redraw the ER yourself
2. List what you accepted
3. List what you rejected (example: it created entity Login)
4. Map to tables by the rules above
```

Named tools are optional. The mapping rules are not.

---

## Debugging example

AI produces `allocation(unit_id, request_id)` without a unique constraint on `unit_id`.

**What is wrong?**

The M:N table must enforce “one unit, one live allocation.” That is a key or a partial unique index — a **design** decision, not a prettier diagram.

---

## Practice

**Easy.** Map Student–Course M:N with attribute `grade`.

**Medium.** Map weak Bed owned by Ward.

**Challenge.** Map overlapping Student/Faculty ISA without losing `emp_code`.

---

## Key takeaways

- Mapping is a checklist. AI is a first draft.
- Unique allocation problems (PBL 04, 09) are constraints on the mapped tables.
- S07: cloud and distributed — where those tables might live.
