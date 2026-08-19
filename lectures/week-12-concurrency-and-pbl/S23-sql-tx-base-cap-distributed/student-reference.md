# S23 — SQL Transactions, BASE, CAP, Distributed Tx, Eventual Consistency

**Unit 4 | 50–60 minutes | CO4**

Official topics: Transaction definition in SQL · BASE · CAP theorem basics · Distributed transactions · Eventual consistency

Prerequisite: [S07](../../week-04-cloud-distributed-and-pbl/S07-cloud-native-and-distributed/student-reference.md), [S21](../S21-transaction-lifecycle-acid/student-reference.md)

---

## SQL transactions

```sql
BEGIN;          -- PostgreSQL
-- INSERT / UPDATE
SAVEPOINT sp1;  -- optional
ROLLBACK TO sp1;
COMMIT;
```

Isolation levels (names): Read Uncommitted, Read Committed (PG default), Repeatable Read, Serializable.  
Dirty read / non-repeatable / phantom: one line each.

---

## BASE vs ACID

**BASE** (overview): Basically Available, Soft state, Eventual consistency. Used in some distributed stores. Not an excuse to double-allocate a blood unit in **this** course’s PostgreSQL project.

## CAP basics

A distributed system cannot simultaneously provide all of **Consistency**, **Availability**, **Partition tolerance** in the original slogan form. Under partition you choose C or A. Exam: define the three letters with a two-campus story.

## Distributed transactions

Need agreement across sites (2PC named as a protocol: prepare/commit). Extra latency and extra failure modes (coordinator crash).

## Eventual consistency

Replicas converge if no new writes. Stale read possible. Dangerous for `bed_free` and `unit_status`.

---

## Debugging example

“We are eventually consistent, so two hospitals can both take unit 88 and it will sort itself out.”

**What is wrong?**

Physical blood is not a replica merge. Use a strongly consistent allocation tx.

---

## Practice

**Easy.** PostgreSQL default isolation?

**Medium.** CAP: two campuses, link down, exam results. What do you sacrifice?

**Challenge.** Why 2PC still might not run in a student PBL — and what you simulate instead (conflicting local schedule).

---

## Key takeaways

- SQL TCL is examinable.
- CAP/BASE/eventual: definitions + when **not** to use them.
- S25: locking and other CC protocols.
