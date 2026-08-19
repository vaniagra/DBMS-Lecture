# Unit 4 questions

**CO4**

1. ACID mapped to blood-unit allocation. (8)
2. Schedule given: list conflicts, draw precedence graph, cycle? (10)
3. Recoverable vs cascade-less: definitions + tiny example. (6)
4. SQL: BEGIN, failed CHECK, ROLLBACK. (4)
5. CAP: two campuses, partition, exam results. (6)
6. Why not eventual consistency for bed occupancy? (4)

**Schedules A–C** (print for S22/S31):

```text
A: R1(X) R2(X) W1(X) W2(X)
B: R1(X) W1(X) R2(X) W2(X)
C: W1(X) R2(X) W2(Y) R1(Y)
```
