# SCHEDULED REPORTER
Create reports of outdated package versions, package audits and test coverage for frontend applications

## Problem
The reports need to displayed for different branches
  - Security audits
  - Test coverage
  - Package versions

It would be convenient to get these reports in one single source.

## Setup
In `package.json`, add a script for test.

For example,

```
"test": "jest --coverage"
```

## Status
- `yarn-1.x audit` - WORKING
- `yarn-4.x audit` - WORKING
- `jest-29.x` - WORKING
