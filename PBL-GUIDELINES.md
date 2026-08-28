# PBL Guidelines

**Course:** CSL0311[T] Database Management System

# PROJECT-BASED LEARNING (PBL)

## Design & Development of a Real-World Database-Driven Application

| | |
| --- | --- |
| Duration | 10 weeks |
| Mode | Team-based |
| Team size | **4–5 students** |
| Total weightage | **100 marks** |
| Optional cloud bonus | **+5 marks** (reported separately) |

---

## Purpose

Expose students to the complete lifecycle of a real database system:

```text
Requirement Analysis
  → Conceptual Design
  → Logical Design
  → Implementation
  → Advanced Database Engineering
  → Security & Concurrency
  → Testing & Optimization
  → Final Delivery
  → Demo & Viva
```

The **database** is the primary engineering component. A web UI without schema rigor, transactions, and security evidence is not sufficient.

---

## Learning objectives

Students must demonstrate the ability to:

- Perform requirement elicitation and prepare a formal SRS
- Design ER/EER models and convert to relational schemas
- Apply normalization from 1NF through BCNF where applicable
- Implement DDL/DML and populate meaningful sample/test data
- Integrate the database with a **Web application, CLI, or REST API**
- Implement views, stored procedures/functions, triggers, transactions
- Model ACID and concurrency-control scenarios
- Implement role-based access control
- Prevent SQL injection using parameterized queries
- Perform query optimization with EXPLAIN / EXPLAIN ANALYZE (where supported)
- Maintain Git/GitHub history and defend design decisions in viva

CO mapping: [pbl/CO-MAPPING.md](pbl/CO-MAPPING.md)

---

## Project domain policy

Faculty assigns from [pbl/projects/project-bank.md](pbl/projects/project-bank.md). Supported domain families:

1. Hospital Management (appointments, prescriptions, beds, billing)
2. Library & Digital Resource Management (reservations, fines, copies)
3. E-Commerce Marketplace (vendors, inventory, cart concurrency)
4. Airline / Public Transport Booking (seat locking, cancellations)
5. Banking & Micro-finance (ACID transfers, audit trails)
6. University Examination & Result System (grades, revaluation)
7. Food Delivery / Restaurant Aggregator (order states, delivery)
8. Smart Warehouse / Supply Chain (stock, batches, expiry)
9. Event & Venue Management (overlapping bookings, waitlists)
10. Student-Proposed Domain (faculty approval required)

Existing unique projects in `pbl/projects/` are **retained** and mapped to these families. Each project must include:

- 8–10+ meaningful entities
- non-trivial relationships and business rules
- PK/FK constraints
- transactions and concurrency challenges
- indexing and security requirements

---

## Team formation

Every team defines:

- Team ID, Team Name, Members, Roll Numbers
- Team Lead, GitHub Repository Owner
- Selected Domain, Faculty Mentor, Ground Rules

Use [pbl/templates/team-charter.md](pbl/templates/team-charter.md).

Roles rotate. Every student maintains an [Individual Contribution Log](pbl/templates/contribution-log.md).

Faculty records assignments in [pbl/projects/team-allocation.md](pbl/projects/team-allocation.md).

---

## Stages S1–S7 (100 marks)

| Stage | Weight |
| --- | ---: |
| S1 Requirement Analysis & SRS | 10 |
| S2 ER Design, Normalization & DDL | 15 |
| S3 Working Prototype | 20 |
| S4 Advanced DB Engineering & Security | 15 |
| S5 Testing, Benchmarking & Optimization | 15 |
| S6 Final Report, Demo & Viva | 15 |
| S7 Peer Evaluation & Individual Contribution | 10 |

Details: [SUBMISSION-SCHEDULE.md](SUBMISSION-SCHEDULE.md) · [pbl/TIMELINE.md](pbl/TIMELINE.md)

---

## Unique activities

### A. Stakeholder simulation (Week 1)

Interview a faculty member, senior student, or simulated stakeholder. Record requirements, conflicts, assumptions. Template: [pbl/templates/stakeholder-interview.md](pbl/templates/stakeholder-interview.md)

### B. Cross-team security red-team audit (S4)

Paired teams test each other ethically. Guide: [pbl/student/SECURITY-AUDIT-GUIDE.md](pbl/student/SECURITY-AUDIT-GUIDE.md)

### C. Quantified optimization (S5)

Before query → plan → timing → index/rewrite → after plan → timing. Template: [pbl/templates/optimization-report-template.md](pbl/templates/optimization-report-template.md)

### D. GitHub portfolio

README, folder structure, meaningful commits, stage tags, documentation — graded in S3 and S7.

### E. Cloud deployment bonus {#cloud-bonus}

Optional AWS / Azure / Supabase / approved provider. Maximum **+5 marks**, separate from the 100. Submit evidence via `cloud_bonus_student` in [config/submission-links.json](config/submission-links.json).

### F. Individual reflection

Each major stage: [pbl/templates/reflection-template.md](pbl/templates/reflection-template.md)

### G. Recognition badges

Documented in [pbl/README.md](pbl/README.md) — non-grade awards for schema, security, optimization, GitHub practice, engineering, viva.

---

## GitHub team repository (required from S3)

```text
team-pbl/
├── README.md
├── docs/
│   ├── requirements/
│   ├── er-design/
│   ├── normalization/
│   ├── security/
│   ├── optimization/
│   └── final-report/
├── sql/
│   ├── schema.sql
│   ├── seed.sql
│   ├── queries.sql
│   ├── views.sql
│   ├── procedures.sql
│   ├── triggers.sql
│   ├── transactions.sql
│   └── indexes.sql
├── app/
├── tests/
├── evidence/
│   ├── screenshots/
│   └── benchmarks/
├── CONTRIBUTIONS.md
└── AI-USAGE-NOTE.md
```

Tags: `s1-requirements` · `s2-design` · `s3-prototype` · `s4-advanced-db` · `s5-optimization` · `final`

---

## Database technology

- **PostgreSQL** (default), **MySQL**, or **Oracle** with faculty approval
- Modeling: draw.io, Lucidchart, MySQL Workbench, pgModeler
- Application: Web, CLI, or REST API

---

## Academic integrity / AI

Students may use ChatGPT, Claude, Copilot, Gemini, etc. for brainstorming, debugging, explanation, and documentation polish. Students remain responsible for every submitted SQL, schema, and design decision.

Every submission includes [pbl/templates/ai-usage-note.md](pbl/templates/ai-usage-note.md). Policy: [AI-USAGE-POLICY.md](AI-USAGE-POLICY.md)

---

## Rubrics

- [pbl/rubrics/student-rubric.md](pbl/rubrics/student-rubric.md)
- [pbl/rubrics/faculty-rubric.md](pbl/rubrics/faculty-rubric.md)

---

## Portals

- Students: [student/index.md](student/index.md) · [portal/student.html](portal/student.html)
- Faculty: [faculty/index.md](faculty/index.md) · [portal/faculty.html](portal/faculty.html)

Access model: [ACCESS-MODEL.md](ACCESS-MODEL.md)
