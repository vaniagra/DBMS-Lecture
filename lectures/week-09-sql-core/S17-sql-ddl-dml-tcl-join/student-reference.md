# S17 — SQL: DDL, DML, TCL, DQL, SET, JOIN

**Unit 2 | 50–60 minutes | CO2**

Official topics: SQL background · DDL · DML · TCL · DQL · SET operations · JOIN operations

Prerequisite: [S09](../../week-05-relational-model-and-algebra/S09-relational-structure-er-to-rel/student-reference.md), [S11](../../week-06-algebra-queries-and-pbl/S11-ra-queries-and-calculus/student-reference.md)

---

## Why Are We Learning This?

Milestone 4 needs working PostgreSQL. Think in sets, then write SQL, then predict the result.

---

## SQL families

| Family | Job | Examples |
| --- | --- | --- |
| DDL | Schema | CREATE / ALTER / DROP TABLE |
| DML | Change rows | INSERT UPDATE DELETE |
| DQL | Ask | SELECT |
| TCL | Transactions | BEGIN COMMIT ROLLBACK (detail S23) |
| DCL | Rights | GRANT — mention only |

---

## Loop

```text
Question → Think in sets → Write → Predict → Execute → Explain
```

---

## JOIN

```sql
-- ANSI
SELECT r.room_no, s.name
FROM allotment a
JOIN student s ON s.roll = a.roll
JOIN room r ON r.room_no = a.room_no AND r.hostel_id = a.hostel_id;
```

Inner, left outer, right outer, full outer: one campus example each (students without allotment = LEFT JOIN … WHERE room IS NULL).

## SET

```sql
SELECT roll FROM cse_applicants
UNION
SELECT roll FROM nominated;
```

`UNION` vs `UNION ALL`. `INTERSECT`, `EXCEPT` (PostgreSQL). Mark **EXCEPT** as PostgreSQL/ANSI; MySQL may differ.

---

## Constraints in DDL

PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL.  
PBL 04: `UNIQUE (unit_id)` on open allocations or equivalent.

---

## Debugging example

```sql
SELECT * FROM room;
```

**What is wrong as a Milestone 4 query?**

It is not a question. Do not count it toward 20.

---

## Practice

**Easy.** DDL for weak Bed (ward_id, bed_no).

**Medium.** Students who applied EXCEPT those allotted funds.

**Challenge.** Self-join: buses that share a stop (PBL 03).

---

## Key takeaways

- Predict before execute.
- S18: aggregates, NULL, nested queries, views.
