# Instructor Guide

## Session Objective

Students can pick entities from a mess/hostel narrative, classify attributes, and state cardinality + participation without jumping to tables.

## Course Outcome Mapping

```text
CO1  ER modeling, attribute types, mapping constraints
```

## 50–60 Minute Session Flow

```text
0–6 min     Hook: Dashboard is not an entity
6–18 min    Entity vs attribute vs relationship
18–32 min   Attribute types table, live on mess example
32–45 min   Cardinality and participation on the board
45–52 min   Pair: leftover_kg placement
52–60 min   Exit + PBL M1 entity list preview
```

## Board Plan

One ER fragment only:

```text
STUDENT  >N  eats  N<  MEAL_SERVING
key: sid            key: serving_id
                    leftover_kg
```

Write **total/partial** on each side.

## Live Demonstration

Walk a bad list: Login, Report, Admin, Student, Meal. Cross out the first three together.

## Misconceptions

- Foreign keys in the ER as attributes of both entities (too early)
- Every M:N “must be wrong”

## PBL connection

Milestone 1 initial entity list is due 08 Sep. Today’s lab is practice for that list.

## Exit Question

Give cardinality and participation for Hospital–Bed–Patient at admission time (PBL 09 preview) in four sentences.
