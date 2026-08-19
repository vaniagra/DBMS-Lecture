# S22 — Schedules, Serializability, Recoverability, Precedence Graphs

**Unit 4 | 50–60 minutes | CO4**

Official topics: Concurrent executions · Serializability · Recoverability · Precedence graphs · Conflict serializability

Prerequisite: [S21](../S21-transaction-lifecycle-acid/student-reference.md)

---

## Why Are We Learning This?

Milestone 5 requires a **hand-drawn precedence graph**. No graph, no marks for serializability.

---

## Loop

```text
Schedule → Read/Write → Conflict → Precedence graph → Serializability → Recovery
```

---

## Conflicts

Operations **conflict** if they belong to different transactions, access the same item, and at least one is a write.

Conflict serializable iff the **precedence graph** (T_i → T_j when T_i conflicts and comes first) is **acyclic**. A cycle means not conflict serializable.

---

## Worked example

```text
T1: R(X) W(X)
T2: R(X) W(X)
Schedule: R1(X) R2(X) W1(X) W2(X)
```

Conflicts: W1 after R2? R2(X) then W1(X) → T2 → T1; W1 then W2 → T1 → T2. Cycle. Lost update / dirty pattern: discuss.

Students must **draw** nodes T1 T2 and arrows.

---

## Recoverability (intro)

A schedule is recoverable if a transaction commits only after all transactions it read from have committed. Cascading rollback: dirty reads. Strict schedules: no dirty read, no overwrite of uncommitted writes (overview).

---

## Debugging example

“The schedule is serializable because each transaction is correct alone.”

**What is wrong?**

Correctness of T1 and T2 separately does not make an interleaved schedule serializable.

---

## Practice

**Easy.** Two reads on X: conflict? (No)

**Medium.** Draw the graph for a given 6-operation schedule (lab sheet).

**Challenge.** Give a recoverable but not cascade-less schedule.

---

## Key takeaways

- Acyclic precedence graph ⇔ conflict serializable.
- Paper skill. Viva: you draw it.
- S23: SQL TCL, BASE, CAP, distributed tx.
