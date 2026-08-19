# S07 — Cloud-Native Databases and Distributed Intro

**Unit 1 | 50–60 minutes | CO1, CO4**

Official topics: Cloud-native databases · Introduction to distributed databases

Prerequisite: [S02](../../week-01-database-foundations/S02-data-models-and-architecture/student-reference.md), [S06](../S06-er-to-tables-ai-schema/student-reference.md)

---

## Why Are We Learning This?

The syllabus requires cloud and distributed **introductions** in Unit 1. Unit 4 will return with BASE, CAP, and distributed transactions. Today: placement and why “one PostgreSQL on a lab PC” is not the whole story.

---

## The Problem

> Exam results must be readable across two campuses. The network between campuses dies for 20 minutes. Do we block every read, or show yesterday’s result?

---

## Mental Model

**Cloud-native database:** managed engine, storage and compute decoupled or replicated, backups and failover as a service. You still design schema and keys. The cloud does not normalize for you.

**Distributed database:** data (or copies) on more than one site.

```text
Site A (city campus)     Site B (second campus)
   fragment / replica  ←→   fragment / replica
```

Fragmentation: split tables by row (students of campus A) or by column.  
Replication: copies. Improves read availability; creates **consistency** work (Unit 4).

---

## What to remember for the exam

- Why distribute: locality, availability, scale
- Cost: extra coordination, possible stale reads
- Cloud-native: you still choose keys, NF, transactions
- Preview names only: CAP, eventual consistency — **definitions in S23**

---

## Debugging example

“We deployed on RDS, so we do not need 3NF.”

**What is wrong?**

Hosting is not design. Anomalies do not care about the vendor.

---

## Practice

**Easy.** Name one reason to replicate exam results.

**Medium.** If a blood-unit table is replicated, what new illegal state appears (PBL 04)?

**Challenge.** Difference between a cloud-managed single node and a geographically distributed store, in four sentences.

---

## Key takeaways

- Cloud-native ≠ skip ER/NF.
- Distributed intro: fragments, replicas, extra consistency work.
- S08 is Milestone 1 presentations. S09 starts the relational model.
