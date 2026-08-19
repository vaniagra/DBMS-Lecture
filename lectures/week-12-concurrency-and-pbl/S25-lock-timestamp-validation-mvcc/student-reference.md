# S25 — Lock, Timestamp, Validation, Granularity, MVCC

**Unit 5 | 50–60 minutes | CO4**

Official topics: Conditions for concurrency · Lock-based protocol · Timestamp-based protocol · Validation-based protocol · Multiple Granularity · Multiversion schemes

Prerequisite: [S22](../../week-11-transactions/S22-serializability-precedence-graphs/student-reference.md)

---

## Conditions for concurrency

Two transactions may run together if their operations **do not** produce a cycle in the conflict graph (goal). Protocols **prevent** illegal schedules.

---

## Lock-based

Shared (S) / exclusive (X). Two-phase locking (2PL): growing then shrinking. Strict 2PL: hold X until commit — prevents dirty reads of writes.

**Deadlock:** S26.

## Timestamp

Each tx has TS. Thomas’ write rule (name). Reject operations that violate timestamp order.

## Validation (optimistic)

Read → validate → write. Good when conflicts are rare.

## Multiple granularity

Lock database / table / page / row. Intention locks IS/IX (exam: purpose — avoid checking every row).

## MVCC

Readers see a snapshot; writers create versions. PostgreSQL uses MVCC. Does not remove the need for SERIALIZABLE when business rules require it.

---

## Debugging example

“SELECT then UPDATE without a transaction because MVCC isolates us.”

**What is wrong?**

A snapshot read plus a later write can still lose the bed. Use one transaction and a constraint/lock.

---

## Practice

**Easy.** S vs X: can two S locks coexist?

**Medium.** Why intention locks exist.

**Challenge.** Optimistic validation failure: what does the tx do?

---

## Key takeaways

- 2PL, timestamps, validation: three families.
- MVCC is the engine; your **constraint** still matters.
- S26: deadlock, insert/delete, indexes.
