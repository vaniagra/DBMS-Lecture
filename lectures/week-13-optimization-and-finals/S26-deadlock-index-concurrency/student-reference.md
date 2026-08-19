# S26 — Deadlock, Insert/Delete, Index Concurrency

**Unit 5 | 50–60 minutes | CO4**

Official topics: Deadlock handling · Insert/Delete operations · Concurrency in index structures

Prerequisite: [S25](../S25-lock-timestamp-validation-mvcc/student-reference.md)

---

## Deadlock

T1 holds X on Bed 12, waits for Bed 13. T2 opposite. Cycle in **wait-for** graph.

Handling: prevention (ordering, wait-die, wound-wait), detection (wait-for graph), victim rollback, timeout.

---

## Insert / delete

Phantoms: a range query, then insert in that range, then repeat query. Predicate/index locks (name).  
Delete vs update: remove tuple vs modify; index entries must stay consistent.

---

## Indexes

B+ tree concurrency: latch vs lock (overview). Readers on a leaf while a split happens — why naive page locks are not enough. Exam: **problem exists**; protocol names (crabbing) if in the paper.

---

## Debugging example

Two transactions insert the same `unit_id`. One waits forever.

**What is wrong?**

Missing UNIQUE + deadlock/timeout policy. Constraint should fail one tx.

---

## Practice

**Easy.** Draw a 2-node wait-for cycle.

**Medium.** Wait-die vs wound-wait: who dies if T2 is younger?

**Challenge.** Phantom: “all free beds in Ward A” twice in one tx.

---

## Key takeaways

- Deadlock is a graph problem.
- Inserts create phantoms.
- S27: optimize the queries you already wrote.
