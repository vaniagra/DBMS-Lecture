# Lab: Layers, Not Logos

## Objective

Place a change in the correct ANSI/SPARC level and name the independence involved.

## Problem Statement

Campus Wi-Fi office: devices, students, MAC addresses, access logs. A public page shows “how many devices online in Library.” An auditor sees logs. A technician sees MAC and switch port.

## Required Tasks

1. List conceptual-level entity names (words only).
2. For each of the three users, list attributes they may see.
3. Classify each change:
   - add index on `mac`
   - add attribute `device_owner_blood_group`
   - hide MAC from the public page
4. State whether two-layer deployment still needs a conceptual schema.

## Test Cases

| # | Change | Level |
| --- | --- | --- |
| 1 | Index on mac | Internal |
| 2 | Hide MAC | External |
| 3 | New attribute | Conceptual |

## Submission

`S02_RollNumber.md`
