# Lab: Name the Facts, Name the Failure

## Objective

Contrast a file-based office with a DBMS using a short written design, not SQL fluency.

## Concepts Tested

File vs database; advantages as consequences; DBMS functions.

## Prerequisite

Session 01 discussion.

## Problem Statement

The exam cell stores seating in `rooms.txt`, student lists in `students.csv`, and invigilator assignment in `duty.xlsx`. Two staff members email updated copies. On exam morning, two students have the same seat.

## Input

None. Paper or a markdown file `s01-answers.md`.

## Output

Written answers. No DBMS install required.

## Constraints

- Do not write CREATE TABLE yet
- Do not invent a full ER diagram (that is S03–S04)
- Use the hostel or exam-cell story, not a textbook slogan list

## Required Tasks

1. List three facts that are currently stored in more than one file.
2. For each fact, name the inconsistency that emailing copies can create.
3. Map four DBMS functions to this office (define, constrain, share, recover).
4. Write one illegal state the system must **refuse** (not merely detect later).
5. In four sentences, why “we will be careful” is not a concurrency control policy.

## Edge Cases

- Only one clerk ever edits: still argue for a schema and backup.
- Scanned PDFs of the register: that is not a queryable database.

## Expected Reasoning

Students should point at duplicated facts and the lack of a single commit, not “Excel is old.”

## Test Cases

| # | Check | Expected |
| --- | --- | --- |
| 1 | Three duplicated facts | Seat, roll, invigilator duty, or equivalent |
| 2 | Illegal state | Two students, one seat, same session |
| 3 | Functions | Not a vendor list |

## Submission (if used as homework)

`S01_RollNumber.md` in the lab folder the instructor names.
