# S01 — Why a Database, Not a Folder of Files?

**Unit 1 | 50–60 minutes | CO1**

Official topics: Database vs Traditional File Processing Systems · Advantages of Databases · Functions of DBMS

Prerequisite: none. Campus examples assume you have seen spreadsheets and shared folders.

---

## Why Are We Learning This?

A hostel office keeps room allotment in one Excel file, mess dues in another, and a printed register for complaints. Two clerks update copies on two PCs. By Friday, the same room is “allotted” twice and a student who paid mess dues still shows unpaid.

The failure is not “Excel is bad.” The failure is **no shared, constrained, recoverable record of truth**.

---

## The Problem

> 400 hostel rooms. Each room has a number, a block, and a capacity. Students apply. Clerks allot. Finance marks dues. The warden wants: “which rooms are double-allotted, and who still owes mess fees?”

Before software, decide:

1. What is one fact that must not be stored in two disagreeing places?
2. What must be **refused**, not merely noted after the damage?
3. If the power fails mid-allotment, what should still be true on Monday?

---

## Think First

A **file-processing** system is a set of programs, each owning its own files:

```text
allot.exe  →  rooms.xls
dues.exe   →  finance.csv
complain.exe → register.txt
```

Each program knows its own layout. When finance needs room numbers, someone copies a column. Copies drift.

A **database** stores the facts once. Programs ask a **DBMS** to read and write under rules.

---

## Mental Model

```text
Problem (allotment + dues + complaints)
   ↓
Facts that must be unique and consistent
   ↓
Database (shared data)
   ↓
DBMS (rules, access, recovery)
   ↓
Applications (hostel office, finance, warden report)
```

The DBMS is not “a big Excel.” It is the component that **refuses illegal states** and **survives crashes**.

---

## Database vs traditional file processing

| File processing | Database approach |
| --- | --- |
| Data lives in many files, many formats | Data lives in one managed store |
| Each program encodes the layout | Layout is declared once (schema) |
| Duplication is the default sharing method | Controlled sharing through the DBMS |
| Integrity is a hope in application code | Integrity can be declared (keys, constraints) |
| Crash = “who saved last?” | Crash = recover to a last consistent state |

You will still write application code. You will not let each application invent its own copy of `Room`.

---

## Advantages of databases — as consequences

| Advantage | What it means in the hostel office |
| --- | --- |
| Controlled redundancy | Room number is stored once; dues **refer** to it |
| Integrity | Capacity 2 cannot become 3 allotments without a rejected write |
| Concurrent access | Two clerks do not silently overwrite each other |
| Recovery | A failed allotment does not leave a half-written student |
| Data independence | Warden’s report can change without rewriting allot.exe |
| Security | Finance sees dues; a clerk need not see every medical note |

Treat these as **reasons the architecture looks this way**, not a slogan list for the exam.

---

## Functions of a DBMS

A DBMS typically provides:

```text
Storage and retrieval
Schema / data definition
Integrity enforcement
Concurrency control
Backup and recovery
Authorization
A language (we will use SQL) to ask questions
```

S02 will place these functions in a **two-layer / three-layer** picture. Today, name the jobs. Do not draw Oracle’s product boxes.

---

## Worked campus example

Illegal state we must refuse:

```text
Room H-12 capacity = 2
Allotted: Roll 231, Roll 232, Roll 233
```

In files, both clerks can append a row. In a database, a constraint or a transaction (Unit 4) must make the third allotment **fail**.

---

## Trace

| Step | File-based office | Database office |
| ---: | --- | --- |
| 1 | Clerk A opens rooms.xls | Clerk A starts a transaction |
| 2 | Clerk B opens an old copy | Clerk B waits or sees committed data |
| 3 | Both save | DBMS serializes or rejects |
| 4 | Warden prints two truths | One committed allotment set |

---

## Debugging example

A team says: “We stored everything in one Google Sheet. That is a database.”

**What is wrong?**

A sheet can be shared. Sharing is not integrity, recovery, or a declared schema. If two tabs still copy `room_no`, you are back to file processing with a nicer UI.

---

## Common mistakes

- Listing “advantages of DBMS” without a counter-example from files
- Calling any spreadsheet a DBMS
- Thinking the DBMS “automatically prevents double allotment” with no constraint designed by you
- Memorising ten functions and failing to place **integrity** and **recovery** in the story

---

## Edge cases

- One-person course project with a single CSV: a file may be enough. The course still uses a DBMS because **the subject is shared, constrained data**.
- A DBMS without constraints is a file with SQL. You must still design keys.

---

## Practice

**Easy.** In one sentence, what does a DBMS do that a folder of files does not?

**Easy.** Name two hostel facts that should not be duplicated.

**Medium.** Finance keeps a separate `dues.csv` with student names typed by hand. What goes wrong at semester end? Which DBMS function addresses it?

**Medium.** Two clerks allot the last bed in H-12 at the same second. What must the system do?

**Challenge.** A friend says databases are slower than files, so the college should keep Excel. Answer using integrity and recovery, not marketing.

---

## Interview / industry connection

Banks, hospitals, and exam cell software fail publicly when two systems disagree about one real-world object. That is a data architecture failure, not a “Java vs Python” failure.

---

## Key takeaways

- File processing duplicates facts; databases share one constrained store.
- Advantages are consequences of integrity, sharing, and recovery.
- A DBMS is a set of functions. You still design the rules.
- Session 02 places this in architecture layers. PBL Milestone 1 asks: which facts must be unique in **your** project?
