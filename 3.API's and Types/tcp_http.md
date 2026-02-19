# 🌐 TCP & HTTP — Complete Explained Notes

---

## ⭐ **What Are TCP & HTTP? (Simple Explanation)**

### 🔵 **TCP (Transmission Control Protocol)**

TCP is like a **road/tunnel** where your data travels between client and server.

* Think of TCP as a **highway**.
* It decides **how to send data packets**.
* Ensures **reliable delivery** (no packet loss).
* Maintains **connection** between client ↔ server.

### 🔵 Key Properties of TCP

* 🚗 **Reliable** — no data loss
* 🚦 **Ordered** — packets arrive in correct order
* ♻️ **Resends** lost packets
* 🔗 **Connection-based**

---

## ⭐ **HTTP (HyperText Transfer Protocol)**

HTTP is the **rulebook** for how communication happens over TCP.

If TCP is the road, **HTTP is the law of driving**.

### HTTP decides:

* What the **request format** will be
* What the **response format** will be
* How to structure URLs
* What headers, body, methods (GET/POST/PUT/DELETE) mean

---

## ⭐ TCP + HTTP Together

### ✔ **TCP handles transportation**

### ✔ **HTTP handles meaning and rules**

Imagine:

* TCP = "How the packet travels"
* HTTP = "What the packet contains & how to read it"

---

## ⭐ How Packets Move (Sir’s Diagram Explanation)

```
CLIENT  ─── TCP Tunnel ───►  SERVER
       (Packets move here)
```

### 📦 A packet contains:

* Headers
* Data
* HTTP content inside the packet

### 💡 Sir’s key point:

**HTTP decides whether packets are small or large**, not TCP.

TCP only sends whatever HTTP gives.

---

## ⭐ HTTP vs HTTPS (TLS Explained)

### 🔒 **TLS (Transport Layer Security)**

Sir drew a small lock 🔐 on the packet to show that:

✔ HTTPS = HTTP + TLS encryption
❌ HTTP = no encryption

### Why TLS?

* Protects passwords
* Protects card details
* Prevents hackers from reading packets

When using **HTTPS**, data inside the packet is encrypted.

✅ 2. What is TLS (in HTTPS)?

Your sir wrote "TLS" near the packet—here is why:

✔ HTTP (without S)

Data travels as plain text

Anyone can read it if they intercept

✔ HTTPS = HTTP + TLS (encryption layer)

TLS encrypts the data before sending it into the TCP tunnel.

📌 Think: TCP = road
HTTP = car
TLS = black film on the car windows (nobody can see inside).

---

# 🟣 RESTful Endpoint Structure

Example URL:

```
http://localhost:9999/restfulservices/v1/users/{id}
```

### Breakdown:

* **http://** → Protocol
* **localhost** → Host (Domain)
* **9999** → Port
* **restfulservices** → Application Context
* **v1** → Version
* **users** → Resource
* **{id}** → Parameter

---

# ⭐ Real Example: Instagram REST API

```
https://api.instagram.com/v1/users/12345/posts
```

### Meaning:

* Protocol → **https**
* Domain → **api.instagram.com**
* Version → **v1**
* Resource → **users**
* Parameter → **12345**
* Sub-resource → **posts** (fetch posts of a user)

---

# 🟩 Why REST is used outside company?

* Flexible structure
* Easy versioning
* Backward compatible
* Apps of 10 years old can still work (sir’s feature phone example)

Example:

* Old app calls: `/v1/feed`
* New app calls: `/v2/feed`

Both work.

---

