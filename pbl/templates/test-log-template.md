# Test Log

**Project:**  
**Stage:** S5  

| TC ID | Module | Input / setup | Expected | Actual | Pass/Fail | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| TC-01 | Schema | Run `schema.sql` | No errors | | | |
| TC-02 | Constraint | Double booking insert | Rejected | | | |
| TC-03 | RBAC | User without role | Denied | | | |
| TC-04 | Transaction | Concurrent allocate | One succeeds | | | |
| TC-05 | Edge | NULL required field | Error | | | |

## Failure cases deliberately tested

1.  
2.  

## Regression after optimization

- [ ] Core CRUD still passes after index changes
