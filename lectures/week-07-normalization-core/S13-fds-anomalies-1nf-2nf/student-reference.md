# S13 — Bad Tables, FDs, Anomalies, 1NF, 2NF

**Unit 3 | 50–60 minutes | CO3**

Official topics: Principles of Good Database Design · Functional Dependency · Anomalies · 1NF · 2NF

Prerequisite: [S09](../../week-05-relational-model-and-algebra/S09-relational-structure-er-to-rel/student-reference.md)

---

## Why Are We Learning This?

Milestone 3 is a **proof**, not a claim. Start from a bad table, show FDs, show anomalies, decompose.

---

## Loop

```text
Bad table → Dependencies → Anomalies → Decompose → Verify
```

---

## Good design (principles)

- One fact in one place
- Keys that match identification
- No hidden repeating groups
- Decompose without losing dependencies (later: lossless, PD)

---

## Functional dependency

`X → Y` : for any two tuples, same X implies same Y.

Example: `roll → name` on Student.  
Non-example: `prog → roll` (many rolls per programme).

**Closure** and **candidate keys** from FDs: show one 4-attribute example on the board.

---

## Anomalies

| Anomaly | Mess example |
| --- | --- |
| Insert | Cannot record a menu item until someone eats it |
| Update | Item name typed on every leftover row; one row misspelled |
| Delete | Last serving of an item deletes the item’s calorie fact |

---

## 1NF

Atomic cells. No repeating groups, no comma-separated `items`.

## 2NF

1NF + every non-prime attribute fully depends on the **whole** candidate key (no partial dependency on part of a composite key).

Classic: `Enroll(roll, course, student_name, grade)` with `roll,course → grade` and `roll → student_name` — `student_name` violates 2NF.

---

## Debugging example

“We have an `id` serial column so we are in 2NF.”

**What is wrong?**

Surrogate keys do not erase partial FDs among the real attributes.

---

## Practice

**Easy.** Is `allergies` as `'dust,peanuts'` in 1NF?

**Medium.** Find a partial FD in `Booking(room_id, date, building_name, faculty_id)`.

**Challenge.** Give insert/update/delete anomalies for that table.

---

## Key takeaways

- FDs are observed from meaning, not from the current sample only.
- S14: 3NF and BCNF.
