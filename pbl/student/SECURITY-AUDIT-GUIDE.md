# Cross-Team Security Red-Team Audit

**Stage:** S4 · **Week 8**

Faculty pairs teams: Team A audits Team B and vice versa.

## Ethical boundaries

**Allowed**

- SQL injection attempts on **test/staging** endpoints
- Unauthorized-role access attempts
- Invalid / boundary input
- Controlled concurrent transaction tests (two sessions)

**Not allowed**

- `DROP DATABASE`, mass `DELETE`, or ransomware-style attacks
- Attacks on personal machines or networks outside the project
- Denial-of-service flooding
- Sharing findings publicly before the target team can fix

Destructive testing on faculty-provided production data is forbidden.

## Process

```text
Attack → Observation → Target team defense → Retest → Document
```

Use [security-audit-template.md](../templates/security-audit-template.md).

## What to test

| Area | Example |
| --- | --- |
| SQL injection | `' OR '1'='1` in login; unescaped string concat in search |
| RBAC | Clerk API called with student token |
| Integrity | Double booking / double allocation race |
| Input validation | NULL PK, negative amounts, past expiry dates |

## Submission

- **Auditor:** completed audit template → own S4 zip or faculty form
- **Target:** defense fixes + retest results in Security Report

Faculty pairing: see [../faculty/WEEKLY-CHECKPOINT.md](../faculty/WEEKLY-CHECKPOINT.md) red-team column.
