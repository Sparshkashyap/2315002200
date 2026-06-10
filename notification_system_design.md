# Notification System Design

## Objective

Design a scalable notification system capable of delivering notifications to users through multiple channels such as Email, SMS, and Push Notifications. The system should support high throughput, fault tolerance, extensibility, and real-time delivery.

---

# Functional Requirements

1. Send notifications through:

   * Email
   * SMS
   * Push Notifications

2. Support notification priorities:

   * High
   * Medium
   * Low

3. Retry failed notifications.

4. Track notification status:

   * Pending
   * Processing
   * Sent
   * Failed

5. Allow future notification channels to be added without major code changes.

---

# High Level Architecture

Client Application
|
v
Notification API
|
v
Notification Service
|
v
Message Queue
|
+--------------------+
|                    |
v                    v
Email Worker         SMS Worker
|
v
Push Worker
|
v
Notification Database

---

# Components

## 1. Notification API

Responsibilities:

* Receive notification requests.
* Validate incoming payloads.
* Store notification records.
* Publish messages to queue.

Example Request:

```json
{
  "userId": "123",
  "type": "email",
  "priority": "high",
  "message": "Interview scheduled for tomorrow"
}
```

---

## 2. Notification Service

Responsibilities:

* Process notification requests.
* Determine notification channel.
* Forward messages to queue.

Benefits:

* Decouples client applications from delivery systems.
* Improves scalability.

---

## 3. Message Queue

Examples:

* RabbitMQ
* Apache Kafka
* AWS SQS

Responsibilities:

* Buffer notifications.
* Handle traffic spikes.
* Enable asynchronous processing.

Benefits:

* Reliability
* Scalability
* Fault tolerance

---

## 4. Workers

### Email Worker

Processes email notifications and sends them through SMTP providers.

### SMS Worker

Processes SMS notifications and sends them through SMS gateways.

### Push Worker

Processes mobile push notifications.

Each worker independently consumes messages from the queue.

---

## 5. Database

Suggested Tables:

### Users

| Field | Type   |
| ----- | ------ |
| id    | UUID   |
| name  | String |
| email | String |
| phone | String |

### Notifications

| Field     | Type      |
| --------- | --------- |
| id        | UUID      |
| userId    | UUID      |
| type      | String    |
| message   | Text      |
| priority  | String    |
| status    | String    |
| createdAt | Timestamp |

---

# Notification Flow

Step 1

User submits notification request.

Step 2

API validates request.

Step 3

Notification stored in database.

Step 4

Message published to queue.

Step 5

Worker consumes message.

Step 6

Notification delivered.

Step 7

Status updated in database.

---

# Retry Strategy

If notification delivery fails:

1. First retry after 1 minute.
2. Second retry after 5 minutes.
3. Third retry after 15 minutes.

After maximum retries:

Status = Failed

---

# Priority Handling

High Priority:

* Immediate processing.

Medium Priority:

* Standard queue.

Low Priority:

* Process when resources are available.

Priority Order:

High > Medium > Low

---

# Scalability Considerations

1. Horizontal scaling of workers.
2. Distributed message queues.
3. Database indexing.
4. Load balancing for APIs.
5. Caching frequently accessed data.

---

# Security Considerations

1. JWT Authentication.
2. HTTPS communication.
3. Rate limiting.
4. Input validation.
5. Audit logging using Logging Middleware.

---

# Logging Strategy

The reusable logging middleware will be integrated into:

* API Layer
* Service Layer
* Worker Layer
* Database Operations

Example Logs:

INFO:
Notification request received.

WARN:
Retry attempt triggered.

ERROR:
SMS provider unavailable.

FATAL:
Database connection lost.

---

# Conclusion

The proposed notification system is scalable, fault tolerant, and extensible. By leveraging asynchronous queues, dedicated workers, retry mechanisms, and centralized logging, the system can reliably handle large volumes of notifications while maintaining performance and observability.
