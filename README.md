## Running the Project

### 1. Install Dependencies

```bash
npm install
```

### 2.
```bash
node index.js
```

# 🔁 /sync-to-horizon API Test
### Convert ISO String → UNIX Timestamp

**POST `/sync-to-nest`**

```bash
curl -X POST http://localhost:3000/sync-to-nest \
  -H "Content-Type: application/json" \
  -d '{"account_creation_time": "2024-06-24T10:00:00Z"}'

# 🔁 /sync-to-horizon API Test

Converts `account_creation_time` from a **UNIX timestamp** to an **ISO 8601 date string**.

---

### 🧪 Example Request

```bash
curl -X POST http://localhost:3000/sync-to-horizon \
  -H "Content-Type: application/json" \
  -d '{"account_creation_time": 1719223200}'