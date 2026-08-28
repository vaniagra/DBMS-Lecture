# Project Bank

Faculty assigns **one project per team** (4–5 students). Record assignments in [team-allocation.md](team-allocation.md).

**Global stages S1–S7** and rubric: [../rubrics/student-rubric.md](../rubrics/student-rubric.md) — project `rubric.md` files add evidence expectations only.

| ID | Project | Domain family | Core DB problem | Concurrency challenge | Security challenge | Optimization challenge | Difficulty |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 01 | [Smart Campus Resource Intelligence](pbl-01-campus-resources/) | 9 Event & Venue | Overlapping room/lab/equipment bookings | Double-book same slot | Role-based booking vs public kiosk | Utilization aggregation queries | Medium |
| 02 | [Mess Food-Waste Intelligence](pbl-02-mess-waste/) | 7 Food / Campus ops | Prep vs waste vs satisfaction analytics | Concurrent leftover recording | Mess staff vs student view | Waste ranking across meals | Medium |
| 03 | [Campus Transport Reliability](pbl-03-transport/) | 4 Transport | Route delay & reliability metrics | Driver/trip overlap | Driver vs admin RBAC | On-time % by route | Medium |
| 04 | [Emergency Blood Network](pbl-04-blood-network/) | 1 Hospital | Unit allocation & expiry | Two hospitals, one unit | Hospital role isolation | Expiry + availability queries | Hard |
| 05 | [Scholarship & Fund Allocation](pbl-05-scholarship/) | 5 Banking / Finance | Rule-based awards; fund cap | Race on remaining budget | Approver vs applicant RBAC | Eligibility rule queries | Hard |
| 06 | [Hostel Maintenance Intelligence](pbl-06-hostel-maintenance/) | Campus operations | SLA & repeat-failure analysis | Concurrent ticket updates | Resident vs staff access | Mean resolution by category | Medium |
| 07 | [Digital Examination Integrity](pbl-07-exam-integrity/) | 6 University Exam | Invalid seating / invigilator rules | Seat assignment race | Invigilator vs student data | Clash detection queries | Hard |
| 08 | [Campus Sustainability & Energy](pbl-08-sustainability/) | 8 Warehouse / Metering | Time-series energy & occupancy | Concurrent meter reads | Public dashboard vs admin | Building consumption rollups | Medium |
| 09 | [Hospital Bed Allocation](pbl-09-hospital-beds/) | 1 Hospital | One bed, one patient | Transfer / double occupy | Ward nurse vs billing | Occupancy & wait-list queries | Hard |
| 10 | [Railway Disruption & Reallocation](pbl-10-railway/) | 4 Transport | Berth locking under delay | Waitlist promotion race | Agent vs passenger RBAC | Delay impact analytics | Hard |
| 11 | [Research Grant Lifecycle](pbl-11-research-grants/) | University / Research | M:N review & budget lines | Concurrent award against budget | Reviewer conflict of interest | Grant pipeline reports | Hard |
| 12 | [Food Supply Traceability](pbl-12-food-traceability/) | 8 Supply chain | Batch recall along chain | Split shipment quantities | Trace role vs public | Recall path queries | Hard |
| 13 | [Campus Clinic Pharmacy](pbl-13-clinic-pharmacy/) | 1 Hospital | Lot expiry & interactions | Dispense last tablet race | Pharmacist vs student RBAC | Expiring lot reports | Hard |
| 14 | [Research Sample Custody](pbl-14-sample-custody/) | Research / Lab | Append-only custody chain | Concurrent transfer | Custodian role enforcement | Custody history queries | Hard |
| 15 | *Student-proposed* | 10 Custom | Faculty-approved domain | Must be specified | Must be specified | Must be specified | Varies |

## Domain families (official)

1. Hospital Management · 2. Library & Digital Resources · 3. E-Commerce · 4. Airline/Public Transport · 5. Banking & Micro-finance · 6. University Examination · 7. Food Delivery · 8. Smart Warehouse / Supply Chain · 9. Event & Venue · 10. Student-Proposed

## Minimum engineering bar (every project)

- 8–10+ entities · non-trivial M:N where relevant · PK/FK constraints
- Web **or** CLI **or** REST integration (S3)
- Views + SP/functions + triggers (S4)
- Transactions + concurrency evidence (S4–S5)
- RBAC + parameterized queries (S4)
- EXPLAIN before/after (S5)

Not acceptable: UI-only CRUD with trivial schema.
