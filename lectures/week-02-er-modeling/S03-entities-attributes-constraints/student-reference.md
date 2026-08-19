# S03 — Entities, Attributes, Mapping Constraints

**Unit 1 | 50–60 minutes | CO1**

Official topics: Mapping Constraints · Attribute Types · ER Modeling · Entity Types

Prerequisite: [S02](../../week-01-database-foundations/S02-data-models-and-architecture/student-reference.md)

---

## Why Are We Learning This?

Milestone 2 is an ER diagram. Teams fail when they start drawing boxes for **screens** (“Login Page”) instead of **things the business must remember**.

---

## The Problem

> Mess office: students eat meals. A meal has a date, a slot (breakfast/lunch/dinner), items, and a leftover quantity. Students rate meals. Ingredients are purchased. We must later ask: which meal slot wastes the most rice?

---

## Think First

An **entity** is a distinguishable thing we store. An **attribute** is a property. A **relationship** is an association we must remember, not a line for decoration.

```text
Requirement
  ↓
Which things exist even if the app is deleted?
  ↓
Entities and attributes
  ↓
How many of A relate to how many of B?
  ↓
Mapping constraints (cardinality, participation)
```

---

## Attribute types

| Kind | Mess example | Watch-out |
| --- | --- | --- |
| Simple | `slot` | |
| Composite | `name = {first, last}` | Do not flatten yet; ER can show structure |
| Derived | `age` from `dob` | Store `dob`, derive `age` |
| Multi-valued | `allergies` | Later becomes a table (S06) |
| Key | `student_id` | Underline |
| Null-able | `rating` before they rate | NULL is a later SQL topic; note optionality now |

---

## Mapping constraints

**Cardinality:** 1:1, 1:N, M:N

**Participation:** total (every entity must join) vs partial.

```text
Student  ——eats——  MealServing
          M     N
```

If every serving must belong to a menu item list, that is **total** participation of serving in “has items.”

Do not write “many-to-many” unless you can name **what** is many.

---

## Worked example

Wrong entity: `Dashboard`.  
Right entities: `Student`, `MealServing`, `MenuItem`, `Ingredient`, `Rating`.

Constraint: a rating without a student is illegal → total participation of Rating in “given_by.”

---

## Trace

Requirement: “students served.”  
Is it an attribute of MealServing (`headcount`) or a relationship to Student?

If you need **which** student, it is a relationship (or an associative entity). If you only need a number, it may be an attribute. PBL 02 needs both leftover **and** who was served if you analyze individual waste — decide and write the assumption.

---

## Debugging example

Attribute `items` as a comma-separated string on `Meal`.

**What is wrong?**

Multi-valued + non-atomic. You cannot query “meals that served dal” cleanly. S13 will call this a 1NF problem. Catch it in ER.

---

## Common mistakes

- Entities named after UI
- M:N drawn as 1:N “to make SQL easier” before mapping
- Forgetting participation (optional vs required)
- Using derived attributes as stored keys

---

## Practice

**Easy.** Classify `hostel_block` of a room: simple or composite?

**Medium.** `Student`–`Course` in an exam cell: cardinality and participation.

**Challenge.** Is `leftover_kg` an attribute of MenuItem, MealServing, or a relationship? Defend one choice.

---

## Key takeaways

- ER starts from remembered facts, not screens.
- Attribute types drive later tables.
- Cardinality and participation are exam and PBL scoring items.
- S04: strong vs weak entities and a full diagram.
