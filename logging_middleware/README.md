# Logging Middleware

## Overview

This project implements a reusable logging middleware for backend applications.

The middleware sends logs to the evaluation server and provides centralized logging capabilities for application monitoring, debugging, and auditing.

## Features

* Reusable logging utility
* Supports multiple log levels
* Sends logs to remote logging API
* Error handling support
* Easy integration with backend services

## Supported Levels

* debug
* info
* warn
* error
* fatal

## Supported Packages

Backend:

* cache
* controller
* cron_job
* db
* domain
* handler
* repository
* route
* service

Common:

* auth
* config
* middleware
* utils

## Usage

```javascript
await Log(
  "backend",
  "info",
  "service",
  "Service executed successfully"
);
```

## Example

```javascript
await Log(
  "backend",
  "error",
  "handler",
  "Invalid request payload"
);
```

## Project Structure

logging_middleware/

* logger.js
* constants.js
* .env
* package.json

## API Used

POST /evaluation-service/logs

The middleware authenticates using the access token obtained from the evaluation server.

## Output

Successful requests generate a log entry on the remote logging service and return a unique log identifier.

## Conclusion

The logging middleware provides a centralized and reusable mechanism for capturing application events and improving observability across services.
