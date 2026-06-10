# Notification Backend Application

## Overview

This backend service is responsible for processing, ranking, and serving notifications.

The application is designed using a modular architecture with separate layers for routes, services, and utilities. It can be extended to support multiple notification sources and delivery channels.

---

# Objectives

* Fetch notifications from data sources.
* Process notifications.
* Assign priority scores.
* Return notifications sorted by priority.
* Integrate centralized logging middleware.

---

# Features

* Notification ranking
* Priority-based sorting
* REST API architecture
* Reusable service layer
* Logging middleware integration
* Error handling

---

# Project Structure

notification_app_be/

* src/

  * routes/

    * notificationRoutes.js

  * services/

    * notificationService.js
    * priorityService.js

  * utils/

    * apiClient.js

  * index.js

* screenshots/

* .env

* package.json

* README.md

---

# Architecture

Client
|
v
Notification Route
|
v
Notification Service
|
v
Priority Service
|
v
Response

The route layer receives requests.

The service layer performs notification processing.

The priority layer calculates notification scores and ranking.

The response is returned to the client.

---

# Notification Priority Logic

Priority levels are assigned weights.

Example:

Placement Notifications = 3

Result Notifications = 2

Event Notifications = 1

Higher priority notifications appear first.

When two notifications have the same priority, newer notifications are ranked higher.

---

# API Endpoint

## Get Prioritized Notifications

```http
GET /api/priority
```

### Response

```json
{
  "count": 10,
  "notifications": []
}
```

---

# Logging Integration

The reusable logging middleware is integrated into:

* Routes
* Services
* API Calls
* Error Handling

Example:

```javascript
await Log(
  "backend",
  "info",
  "service",
  "Notifications processed successfully"
);
```

---

# Error Handling

The application handles:

* Invalid requests
* API failures
* Empty notification lists
* Unexpected server errors

---

# Technologies Used

* Node.js
* Express.js
* Axios
* Dotenv

---

# Future Improvements

1. Database integration.
2. User-specific notifications.
3. Real-time WebSocket delivery.
4. Notification read/unread tracking.
5. Notification scheduling.

---

# Conclusion

The Notification Backend Application provides a scalable and maintainable foundation for processing and prioritizing notifications. The modular design ensures easy extension and integration with future notification sources and delivery mechanisms.
