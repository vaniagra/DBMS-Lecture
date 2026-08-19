# Instructor Guide

## Session Objective

Students can contrast file processing with a DBMS using a hostel-office story, name advantages as consequences, and list DBMS functions they will actually use this semester (schema, integrity, concurrency, recovery, query language).

## Course Outcome Mapping

```text
CO1  Understand modern database concepts (shared store, integrity, recovery)
```

## Prerequisites

None. Spreadsheet familiarity helps.

## 50–60 Minute Session Flow

```text
0–5 min     Hook: two Excel copies, one room allotted twice
5–12 min    Student reasoning: what is “one fact”?
12–22 min   Board: file programs vs DBMS
22–32 min   Advantages as consequences (six rows, not twenty)
32–42 min   Functions of DBMS — map each to the hostel story
42–50 min   Pair: illegal state they must refuse
50–55 min   Debug: “Google Sheet is a database”
55–60 min   Exit question
```

This is a theory course. Keep talking short. The illegal state on the board matters more than vendor history.

## Board Plan

Leave this up all week:

```text
files:  program → its own file → copy → drift
DB:     programs → DBMS → one store + rules
```

Second board — functions:

```text
define  store  constrain  share  recover  authorize  query
```

Third board — illegal state:

```text
H-12 capacity 2
three current occupants  →  must FAIL
```

## Live Demonstration

Do **not** start PostgreSQL today unless it is already open.

Show, on paper or a slide, two CSV snippets that disagree on `room_no`. Ask which program is right. There is no right program. That is the point.

If a DBMS is available, a 90-second preview is enough:

```sql
CREATE TABLE room (
  room_no VARCHAR(8) PRIMARY KEY,
  capacity INT NOT NULL
);
```

Do **not** teach SQL. Point at “declared structure.”

## Questions to Ask

- If two files both contain student name and room, who is the authority?
- Which advantage disappears if we never declare a key?
- Which DBMS function matters when the power fails during allotment?

## Expected Student Misconceptions

- “DBMS means MySQL installed.”
- “One spreadsheet is already a database.”
- “Integrity is the same as a backup.”
- Listing advantages with no failed file-based scenario.

## Debugging Exercise

Read this claim: “We will keep three Excel files and email the latest every night. That is recovery.”

Ask: recovery of **what**? The email has three possibly inconsistent snapshots.

## Pair Activity

Pair writes one illegal state for a **mess bill** that a DBMS should refuse. One sentence each: which function catches it.

## AI-Assisted Activity

None. Do not let students generate “advantages of DBMS” essays.

## PBL connection

Milestone 1: list facts that must exist once. If they cannot name them, they are not ready for ER.

## Exit Question

A classmate says a database is “just a big file.” Correct them in three sentences using schema, integrity, and recovery.
