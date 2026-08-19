# S19 — Natural Language to SQL, Copilots, Explanation

**Unit 2 | 50–60 minutes | CO1, CO2**

Official topics: Natural Language to SQL · AI SQL debugging · SQL copilots · query explanation

Exposure tools: AI2SQL, AskYourDatabase, SQLAI (any equivalent is fine).

Prerequisite: [S18](../../week-09-sql-core/S18-aggregates-null-subqueries-views/student-reference.md)

---

## Why Are We Learning This?

The syllabus includes AI SQL. The course rule does not change: you own the query.

---

## Required process

```text
1. Write the English question
2. Sketch the result heading
3. Write SQL yourself (even if ugly)
4. Ask the copilot
5. Diff: joins, NULL, duplicates, GROUP BY
6. Execute both on the same data
7. Keep the one you can explain
8. Fill AI-USAGE-DECLARATION.md
```

---

## Typical copilot failures

- INNER JOIN when you needed unmatched rows
- `=` on NULLs
- Double-counting after a join before `COUNT`
- Forgetting `UNIQUE` on unit allocation
- Inventing tables that do not exist

---

## Query explanation

You must explain **in joins and filters**, not “the AI said so.” `EXPLAIN` belongs in S27; today: logical explanation.

---

## Practice

**Easy.** Prompt: “students with no hostel allotment.” Compare copilot vs your LEFT JOIN.

**Medium.** Reject a query that counts leftover twice because of an ingredient join.

**Challenge.** Copilot uses `SELECT *` in a subquery. Rewrite.

---

## Key takeaways

- AI SQL is a hypothesis.
- Milestone 4 viva: explain any of the 20 queries with the laptop closed.
