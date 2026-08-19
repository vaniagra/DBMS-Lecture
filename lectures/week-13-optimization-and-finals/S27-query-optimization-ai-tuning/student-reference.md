# S27 — Query Optimization and AI Tuning

**Unit 5 | 50–60 minutes | CO4, CO5**

Official topics: Query optimization · AI-assisted query tuning · execution-plan intelligence · workload analysis · cloud performance monitoring

Tools (exposure): EverSQL, Oracle SQL Advisor, pgAdmin

Prerequisite: [S18](../../week-09-sql-core/S18-aggregates-null-subqueries-views/student-reference.md)

---

## Why Are We Learning This?

Milestone 5 asks for index design and EXPLAIN comparison. Optimization is **not** “add 12 indexes.”

---

## Optimizer idea

SQL is declarative. The engine chooses join order, join method (nested loop / hash / merge), and whether to use an index.

```sql
EXPLAIN ANALYZE
SELECT ... ;
```

`EXPLAIN ANALYZE` is **PostgreSQL-specific**. `EXPLAIN` without ANALYZE does not run the query.

---

## Indexes

```sql
CREATE INDEX idx_allot_hostel ON allotment (hostel_id);
```

Helps WHERE/JOIN on that column. Hurts INSERT-heavy loads. Composite indexes: left-prefix rule (overview).

## Workload

Which queries run every hour vs once a semester? Index for the former.

## Cloud monitoring

CPU, I/O, slow-query log, connection count. Vendor dashboards do not replace EXPLAIN.

## AI tuning

EverSQL-class tools suggest indexes. Verify with EXPLAIN on **your** data size. Reject duplicate overlapping indexes.

---

## Debugging example

Index on `status` when 99% of rows are `'active'`.

**What is wrong?**

Low selectivity. Seq scan may be cheaper.

---

## Practice

**Easy.** Read one EXPLAIN: Seq Scan vs Index Scan.

**Medium.** Two plans for the same JOIN, with and without index.

**Challenge.** Workload: 90% kiosk reads, 10% allotment writes — which indexes?

---

## Key takeaways

- Measure, then index.
- AI suggestions are hypotheses.
- Final presentations S28. Keep EXPLAIN screenshots for M5.
