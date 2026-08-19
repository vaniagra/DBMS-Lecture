# Instructor Guide

## Session Objective

Students write CREATE with keys, a JOIN, a SET query, and one outer-join “missing match” query on PostgreSQL.

## Course Outcome Mapping

```text
CO2  SQL DDL DML TCL DQL SET JOIN
```

## Flow

```text
0–6 min     Families table
6–20 min    Live CREATE Hostel/Room
20–38 min   JOIN + unmatched LEFT JOIN
38–50 min   UNION / EXCEPT
50–60 min   Exit; warn SELECT *
```

## PostgreSQL-specific

`EXCEPT`. `SERIAL` vs `GENERATED … AS IDENTITY` — pick one and mark.

## Exit Question

Write SQL for rooms with no booking next Monday (PBL 01).
