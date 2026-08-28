# AI Usage Policy

The syllabus exposes students to AI-assisted database tools. AI is an assistant, not a substitute for modeling, SQL, or proof.

Official tool names appear in the units that mention them. Students do not need to master enterprise products.

---

## Required process

```text
1. Understand the requirement yourself.

2. Sketch entities, constraints, or the intended result table.

3. Attempt the ER fragment, FD set, or SQL yourself.

4. Ask AI for help only when useful.

5. Never accept a generated schema or query blindly.

6. Trace every join, key, and constraint.

7. Execute the SQL (or dry-run the schedule).

8. Test NULL, empty, duplicate, and conflict cases.

9. Reject suggestions that violate keys, NF, or ACID.

10. Be able to explain the final design yourself.
```

The student remains responsible for every design decision and query.

---

## Course rule

```text
Think
  ↓
Model
  ↓
Attempt
  ↓
Then use AI as assistant
  ↓
Verify AI output
```

AI-generated SQL is a hypothesis, not automatically correct SQL.

---

## Where tools appear

| Unit | Official examples | Use for |
| --- | --- | --- |
| 1 | Prompt-driven ER modeling, schema-design assistants | entity lists, first-draft diagrams — you still draw and justify |
| 2 | AI2SQL, AskYourDatabase, SQLAI | NL-to-SQL drafts, query explanation, SQL debugging |
| 3 | Vertabelo AI, SQLDBM | NF suggestions, anomaly flags — you still prove FDs |
| 4 | AI anomaly detection (as exposure) | spotting dirty schedules — you still draw precedence graphs |
| 5 | EverSQL, Oracle SQL Advisor, pgAdmin | plan hints, index ideas — you still read EXPLAIN |

If a named tool is unavailable in the lab, use any equivalent assistant and still follow the ten steps above.

---

## Required declaration

Every graded SQL or schema submission from **S2** onward must include [pbl/templates/ai-usage-note.md](pbl/templates/ai-usage-note.md) (team repo: `AI-USAGE-NOTE.md`). Legacy filename `AI-USAGE-DECLARATION.md` is also accepted.

```text
Tool used
Prompt
Purpose
Generated suggestion
What was accepted
What was rejected
How it was verified
```

---

## Academic honesty

Submitting AI output you cannot explain is treated as not having done the work.

Identical ER diagrams, identical schema names, or identical “20 queries” across teams will be reviewed. Similarity alone is not a charge. Inability to defend the work in viva is.
