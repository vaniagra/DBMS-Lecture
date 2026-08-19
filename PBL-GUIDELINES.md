# PBL Guidelines

**Course:** CSL0311[T] Database Management System  
**Team size:** 3–4  
**CO:** CO1–CO5, progressive  

This is a semester-long **data** project, not a CRUD website.

Forbidden as the main idea unless the faculty has rewritten the constraints:

- Library Management System
- Student Management System
- generic Hospital Management without the bed-allocation concurrency problem

---

## How a team gets a problem

1. Faculty assigns one unique project from [pbl/projects/project-bank.md](pbl/projects/project-bank.md).
2. The assignment is recorded in [pbl/projects/team-allocation.md](pbl/projects/team-allocation.md).
3. Students open **only their assigned** project folder.
4. All teams follow the **same** milestone calendar in [SUBMISSION-SCHEDULE.md](SUBMISSION-SCHEDULE.md).

Two teams must not take the same project unless the class is larger than the bank and faculty issues a written variant.

---

## Roles

| Role | Owns |
| --- | --- |
| Database Architect | entities, ER, keys, constraints, NF proof |
| SQL Engineer | schema scripts, queries, views, EXPLAIN |
| Data / Quality Engineer | sample data, integrity tests, anomaly cases |
| Documentation & Analysis Lead | requirements, report, AI declaration, contribution log |

Roles may rotate across milestones. In viva, **every member** explains the whole system.

---

## Learning loops you must show

Design:

```text
Requirement → Entities → Relationships → Constraints
  → ER → Relational schema → Normalize → Implement → Query → Validate
```

SQL:

```text
Question → Think in sets → Write → Predict → Execute → Explain → Optimize
```

Transactions:

```text
Schedule → Read/Write → Conflict → Precedence graph → Serializability → Recovery
```

---

## GitHub team repository (optional but recommended)

```text
team-pbl/
├── README.md
├── docs/
│   ├── requirements.pdf
│   ├── er-diagram.pdf
│   ├── normalization.md
│   └── final-report.pdf
├── sql/
│   ├── schema.sql
│   ├── data.sql
│   ├── queries.sql
│   ├── transactions.sql
│   └── indexes.sql
├── CONTRIBUTIONS.md
└── AI-USAGE-DECLARATION.md
```

Tag each milestone (`milestone-0` … `milestone-5`, `final`). Submit the repo URL **and** the milestone document through the form.

---

## What “good” looks like

- Constraints that can fail (double booking, double allocation, overspending)
- Queries that answer a **question**, not `SELECT *`
- A normalization proof, not “we are in 3NF” as a sentence
- At least one conflicting schedule with a drawn precedence graph
- An AI declaration that lists what you **rejected**

Student rubric: [pbl/rubrics/student-rubric.md](pbl/rubrics/student-rubric.md)  
Presentations: [pbl/student/PRESENTATION-GUIDELINES.md](pbl/student/PRESENTATION-GUIDELINES.md)
