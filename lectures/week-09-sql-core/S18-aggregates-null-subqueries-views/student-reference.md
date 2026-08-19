# S18 — Aggregates, NULL, Nested Queries, Views

**Unit 2 | 50–60 minutes | CO2**

Official topics: Aggregate functions · NULL values · nested subqueries · derived relations · views

Prerequisite: [S17](../S17-sql-ddl-dml-tcl-join/student-reference.md)

---

## Aggregates

`COUNT`, `SUM`, `AVG`, `MIN`, `MAX` with `GROUP BY` / `HAVING`.

```sql
SELECT meal_id, SUM(leftover_kg) AS waste
FROM leftover
GROUP BY meal_id
HAVING SUM(leftover_kg) > 10;
```

`WHERE` filters rows; `HAVING` filters groups.

---

## NULL

Three-valued logic. `= NULL` is not “is unknown.” Use `IS NULL`.  
Aggregates skip NULL except `COUNT(*)`.  
Outer joins **produce** NULLs.

---

## Nested subqueries

```sql
SELECT name FROM student
WHERE roll IN (
  SELECT roll FROM allotment WHERE hostel_id = 'H1'
);
```

Correlated: outer row used inside. Derived table (FROM subquery) is a **derived relation**.

---

## Views

```sql
CREATE VIEW block_c_free AS
SELECT room_no, capacity
FROM room
WHERE block = 'C' AND room_no NOT IN (SELECT room_no FROM current_allotment);
```

Views implement S02 external schema. Updatability is limited — do not promise INSERT on every view.

---

## Debugging example

`AVG(rating)` when unrated meals are stored as 0 instead of NULL.

**What is wrong?**

Zeros pull the mean down. Missing is NULL, not 0, unless 0 is a real score.

---

## Practice

**Easy.** Count complaints per hostel.

**Medium.** Students whose mess rating is above the **overall** average (nested).

**Challenge.** View: blood units expiring in 7 days that are not allocated (PBL 04).

---

## Key takeaways

- NULL is not 0.
- Nested + views are Milestone 4 advanced SQL marks.
- S19: NL-to-SQL and copilots — verify, do not worship.
