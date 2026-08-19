# Learning Resources

Use these as conceptual guides. Do not copy copyrighted textbook content into submissions or into this repository.

---

## Textbook

Ramez Elmasri, Shamkant B. Navathe — *Fundamentals of Database Systems*

## Reference

Abraham Silberschatz, Henry F. Korth, S. Sudarshan — *Database System Concepts*

## SQL

PostgreSQL documentation (current stable). Prefer ANSI SQL in answers; mark PostgreSQL-only syntax.

## Video / MOOC

NPTEL — Database Management System  
Stanford / other public DBMS lecture notes as **optional** extra, not a substitute for this repo

---

## Lab setup (minimum)

- PostgreSQL 14+ (or equivalent: SQLite is **not** enough for transaction-isolation demos)
- `psql` or pgAdmin
- Paper for ER diagrams and precedence graphs

Optional exposure only (not required to pass):

- AI2SQL / AskYourDatabase / SQLAI
- Vertabelo AI / SQLDBM
- EverSQL / Oracle SQL Advisor

---

## Course platform rule

```text
ANSI SQL
  ↓
PostgreSQL when we need EXPLAIN, transactions, or serializable isolation
  ↓
Named AI tools as exposure, never as the source of truth
```
