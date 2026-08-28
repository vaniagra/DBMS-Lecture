# Optimization Report Template

**Project:**  
**Database:** PostgreSQL / MySQL / Oracle  
**Team:**  

Quantified evidence required. Statements like “indexes improved performance” without numbers are **not acceptable**.

## Query 1

**Business question:**  

### Before

```sql
-- query
```

| Metric | Value |
| --- | --- |
| EXPLAIN / plan | paste or screenshot path |
| Execution time | ms |
| Rows scanned | |

### Change

```sql
-- index or rewrite
```

### After

| Metric | Value |
| --- | --- |
| EXPLAIN / plan | |
| Execution time | ms |
| Improvement | % |

Repeat for at least **two** meaningful queries.

## Index strategy summary

| Table | Index | Workload supported |
| --- | --- | --- |
| | | |

## Rejected optimizations

| Suggestion (AI or peer) | Why rejected |
| --- | --- |
| | |

Attach screenshots under `evidence/benchmarks/` for **S5**.
