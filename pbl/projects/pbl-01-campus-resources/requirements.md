# Requirements (PBL 01)

**CO1, CO5**

## Stakeholders

Timetable cell, lab assistants, faculty, estate maintenance, students (read-only slot view).

## Functional

- Book room/lab/equipment for a slot
- Refuse overlap unless a documented exception type exists
- Record maintenance windows that block booking
- Query conflicts and underuse

## Data

Buildings, rooms (capacity, type), equipment (serial), people, slots, bookings, maintenance events.

## Business rules (must become constraints)

1. A room cannot have two *confirmed* bookings that overlap in time.
2. Equipment booking requires the equipment status `available`.
3. Capacity of a class booking cannot exceed room capacity.

## Assumptions

Write at least five. Example: slots are 50-minute periods aligned to the university timetable.
