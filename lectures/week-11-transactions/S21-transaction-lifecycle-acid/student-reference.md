# S21 — Transactions, Lifecycle, ACID

**Unit 4 | 50–60 minutes | CO4**

Official topics: Transaction concepts · Transaction life cycle · ACID properties · Implementation of ACID properties · AI anomaly detection (preview)

Prerequisite: [S17](../../week-09-sql-core/S17-sql-ddl-dml-tcl-join/student-reference.md)

---

## Why Are We Learning This?

PBL 04 and 09 fail if two transactions allot the same unit or bed. ACID is the contract.

---

## Concept

A **transaction** is a logical unit of work: all of it happens or none of it does (from the user’s view).

Lifecycle: active → partially committed → committed, or → failed → aborted. Also: terminated.

---

## ACID

| Letter | Meaning | Blood bank |
| --- | --- | --- |
| Atomicity | All or nothing | Allocation + stock decrement together |
| Consistency | Constraints hold after commit | No unit with two `allocated` rows |
| Isolation | Concurrent txs do not see each other’s dirt | Two requests, one unit |
| Durability | Commit survives crash | Allocated stays allocated after reboot |

---

## Implementation (intro)

- Atomicity/durability: logging (WAL), rollback
- Isolation: locks / MVCC (S25)
- Consistency: constraints + tx logic

AI “anomaly detection” may flag dirty data after the fact. It does **not** replace isolation.

---

## SQL preview

```sql
BEGIN;
UPDATE blood_unit SET status = 'allocated' WHERE unit_id = 88 AND status = 'available';
INSERT INTO allocation (unit_id, request_id) VALUES (88, 501);
COMMIT;
```

If the UPDATE affects 0 rows, ROLLBACK.

---

## Debugging example

Two statements without a transaction: crash after UPDATE, before INSERT.

**What is wrong?**

Not atomic. The unit is marked allocated with no allocation row.

---

## Practice

**Easy.** Name the four ACID letters for a hostel allotment.

**Medium.** Which property fails if we read uncommitted leftover counts?

**Challenge.** Sketch states of a transaction that hits a CHECK violation.

---

## Key takeaways

- Constraints + BEGIN/COMMIT are how ACID shows up in SQL.
- S22: schedules, conflicts, precedence graphs — on paper.
