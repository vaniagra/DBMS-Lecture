# Student Rubric — PBL Stages S1–S7 (100 marks)

Global rubric. Project `rubric.md` files describe **extra evidence** only — they do not change these weights.

Scale per criterion: **Excellent · Good · Satisfactory · Needs Improvement**

---

## S1 — Requirement Analysis & SRS (10)

| Criterion | Max | Excellent | Good | Satisfactory | Needs Improvement |
| --- | ---: | --- | --- | --- | --- |
| Problem relevance | 3 | Real domain pain; measurable success | Clear problem; some metrics | Generic CRUD story | Copied / no problem |
| Requirement completeness | 4 | FR + NFR + scope + assumptions + stakeholders | Most sections present | Thin SRS; missing NFR | No SRS structure |
| SRS quality | 3 | Professional, traceable, interview evidence | Readable; minor gaps | Bullet list only | Unusable / AI blob |

---

## S2 — ER Design, Normalization & DDL (15)

| Criterion | Max | Excellent | Good | Satisfactory | Needs Improvement |
| --- | ---: | --- | --- | --- | --- |
| ER/EER correctness | 5 | 8–10+ entities; keys; cardinalities; weak/EER where needed | Solid ER; minor notation issues | Missing keys/participation | UI boxes as entities |
| Normalization rigor | 6 | FDs listed; anomalies; 1NF–BCNF proved | 3NF correct; BCNF discussed | Claims NF without proof | No decomposition |
| Design justification | 4 | Every constraint tied to business rule | Most justified | Some unjustified | No justification |

---

## S3 — Implementation & Integration (20)

| Criterion | Max | Excellent | Good | Satisfactory | Needs Improvement |
| --- | ---: | --- | --- | --- | --- |
| DDL/DML correctness | 6 | Schema runs clean; constraints enforce rules | Minor fixable errors | Runs with hacks | Does not execute |
| Application/DB integration | 8 | Web/CLI/REST uses DB correctly; parameterized access | Works; thin error handling | Partial CRUD | No integration |
| Code quality / version control | 6 | Professional README; meaningful commits; tags | Adequate Git history | Sparse commits | Single dump commit |

---

## S4 — Advanced DB Engineering & Security (15)

| Criterion | Max | Excellent | Good | Satisfactory | Needs Improvement |
| --- | ---: | --- | --- | --- | --- |
| Views / procedures / triggers | 5 | Each used for a real rule; documented | Present and functional | Trivial examples | Missing |
| Transactions / concurrency | 6 | ACID story + conflicting schedule/graph or live demo | Tx scripts; partial CC | Named only | Absent |
| Security | 4 | RBAC + injection defense + red-team retest | RBAC or injection shown | Mentioned in prose | No evidence |

---

## S5 — Testing & Optimization (15)

| Criterion | Max | Excellent | Good | Satisfactory | Needs Improvement |
| --- | ---: | --- | --- | --- | --- |
| Testing | 5 | Test log; edge + failure cases | Core cases covered | Few tests | None |
| Optimization / indexing | 5 | Index strategy matches workload | Useful indexes | Generic indexes | No strategy |
| Results / documentation | 5 | Before/after EXPLAIN + timings | EXPLAIN only | Claims without numbers | “Indexes helped” |

---

## S6 — Final Report, Demo & Viva (15)

| Criterion | Max | Excellent | Good | Satisfactory | Needs Improvement |
| --- | ---: | --- | --- | --- | --- |
| Final report | 4 | Full lifecycle documented | Most sections | Outline only | Missing |
| Live demo | 6 | Stable demo; failure cases shown | Works with prompts | Slides only | Cannot demo |
| Viva | 5 | Every member explains SQL + design | Most members strong | One member carries | Cannot answer |

---

## S7 — Peer / Individual Contribution (10)

| Criterion | Max | Excellent | Good | Satisfactory | Needs Improvement |
| --- | ---: | --- | --- | --- | --- |
| Peer rating | 6 | Balanced team; honest peer scores | Minor imbalance noted | Vague peers | No peer form |
| Individual contribution | 4 | Log + Git blame match viva | Log present | Thin log | No evidence |

---

## Unacceptable everywhere

- `SELECT *` counted as a “business query”
- Normalization without functional dependencies
- Security claimed without parameterized queries
- Optimization without EXPLAIN evidence

Criterion detail for faculty scoring: [faculty-rubric.md](faculty-rubric.md)
