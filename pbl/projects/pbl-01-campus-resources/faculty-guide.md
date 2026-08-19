# Faculty guide — PBL 01

**Do not link from student portal.**

## Expect

Exclusion or unique (room, period) for confirmed bookings. Maintenance overlapping a booking must be a designed rule.

## Viva

Ask them to insert a colliding row and show the error.

## Common issues

Treating timetable as a screenshot; no equipment serial numbers; utilization with `SELECT *`.

## Solution expectation (not a full key)

`Booking(booking_id, resource_id, start_ts, end_ts, status)` plus a constraint that two confirmed ranges cannot overlap. PostgreSQL `tstzrange` + `EXCLUDE` is acceptable if marked PG-specific; a slot_id unique pair is acceptable if slots are discrete.
