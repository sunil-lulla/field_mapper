## Running the Project

### 1. Install Dependencies

```bash
npm install
```

### 2.
```bash
node index.js
```

# 🔁 /sync-to-nest API Test
### Convert ISO String → UNIX Timestamp

**POST `/sync-to-nest`**

```bash
curl -X POST http://localhost:3000/sync-to-nest \
  -H "Content-Type: application/json" \
  -d '{"account_creation_time": "2024-06-24T10:00:00Z"}'
```

---

# 🔁 /sync-to-horizon API Test
### Convert UNIX Timestamp -> ISO String

### 🧪 Example Request

```bash
curl -X POST http://localhost:3000/sync-to-horizon \
  -H "Content-Type: application/json" \
  -d '{"account_creation_time": 1719223200}'
```
