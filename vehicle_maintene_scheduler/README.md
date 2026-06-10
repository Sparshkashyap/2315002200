# Vehicle Maintenance Scheduler

## Overview

This application solves the Vehicle Maintenance Scheduling problem using the 0/1 Knapsack Algorithm.

The objective is to maximize total maintenance impact while ensuring that the total maintenance duration does not exceed the available mechanic hours for a depot.

## Problem Statement

Each vehicle maintenance task contains:

* TaskID
* Duration
* Impact

Each depot contains:

* Depot ID
* Available Mechanic Hours

The system selects the optimal set of maintenance tasks that maximizes total impact while remaining within the depot's available mechanic hours.

## Approach

The application uses Dynamic Programming and the 0/1 Knapsack Algorithm.

### Decision Rule

For each maintenance task:

* Include the task
* Exclude the task

The algorithm chooses the option that produces the maximum cumulative impact.

## Time Complexity

```text
O(n × H)
```

Where:

* n = number of tasks
* H = available mechanic hours

## API Endpoint

### Get Optimized Schedule

```http
GET /api/schedule/:depotId
```

Example:

```http
GET /api/schedule/3
```

## Sample Response

```json
{
  "depotId": 3,
  "mechanicHours": 188,
  "totalImpact": 191,
  "selectedTasks": []
}
```

## Project Structure

vehicle_maintene_scheduler/

* src/

  * routes/
  * services/
  * utils/
  * index.js

* screenshots/

* .env

* package.json

## Logging Integration

The reusable logging middleware is integrated throughout the application.

Logs are generated for:

* Route access
* API calls
* Optimization execution
* Error handling

## Technologies Used

* Node.js
* Express.js
* Axios
* Dotenv

## Conclusion

The application successfully identifies the optimal maintenance schedule for each depot while maximizing operational impact and respecting mechanic hour constraints.
