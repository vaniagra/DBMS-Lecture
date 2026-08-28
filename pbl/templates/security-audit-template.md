# Security Audit Report (Red-Team)

**Auditor team:**  
**Target team:**  
**Date:**  
**S4 submission**

## Ethical boundaries observed

- [ ] No destructive DROP/TRUNCATE on production data
- [ ] Only test/staging database or faculty-approved environment
- [ ] No denial-of-service flooding
- [ ] Findings shared with target team before final grade

## Tests performed

| # | Attack / test | Expected defense | Observation | Pass/Fail |
| --- | --- | --- | --- | --- |
| 1 | SQL injection on login/search | Parameterized query | | |
| 2 | Access as Role A to Role B data | RBAC | | |
| 3 | Invalid input (NULL, overflow string) | Validation / constraint | | |
| 4 | Concurrent double-book / double-allocate | Transaction + unique | | |

## Retest after fix

| # | Fix applied by target team | Retest result |
| --- | --- | --- |
| 1 | | |

Guide: [../student/SECURITY-AUDIT-GUIDE.md](../student/SECURITY-AUDIT-GUIDE.md)
