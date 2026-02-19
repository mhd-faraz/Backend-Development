1. What is an API?

API (Application Programming Interface) is a way for two software systems to communicate with each other.

Definition:

API is a set of rules that allows one software application to interact with another.

Example:

When a mobile app talks to a server to get data (like login, fetch posts), it uses an API.

When you use Google Maps inside a food-delivery app, that app is communicating with Google Maps API.

-----------------------------------------------------------------------------------------------------------

2. Types of APIs (Sir started with REST API)
What is REST API?

REST (Representational State Transfer) API is a style of designing APIs that follow certain rules — the biggest rule is that REST API is stateless.


3. Stateless Communication (Very Important)

Sir explained this with examples of asking a person for a pen, notes, water.

Stateful Communication (Human Example)

When you ask a person:

“Give me a pen”

5 seconds later: “Give me notes”

10 seconds later: “Give me water”

The person remembers the previous requests.
This is called stateful (communication depends on past interactions).



⭐ Stateless Communication (REST works like this)

In REST API:

If a client sends a request to the server,

After 5 seconds sends another request,

After 10 seconds sends a third request,

👉 The server does NOT remember anything about previous requests.
👉 Every single request is treated like a new request.

Definition:

“Stateless” means the server does not store any information about the client’s previous requests. Every request is independent.

Real REST Example:

The client must send all necessary data in every request:

Login token

Query

Parameters

Body

Because server does not remember you.

------------------------------------------------------------------------------------------------------

4. HTTP Methods in REST (Sir Explained GET & POST)

REST APIs commonly use HTTP methods like:

GET

POST

PUT

DELETE


1. => GET Method (Read Data)

GET request is used to fetch or read data from the server.

Example (Sir’s Example):

When you search on Google:

“Sachin Tendulkar”
Google sends a GET request to the server.

Definition:

GET method is used to request data from a server. It does not modify data.

---------------------------------------------------------------------------------------------

2. => POST Method (Send / Insert Data)

POST request is used to send data to the server or create new data.

Example (Sir’s Example):

When you comment on YouTube:

“Your video is nice”
Your browser sends a POST request to the server with your comment.

Definition:

POST method sends data to the server, usually to create new information (like creating a comment, uploading a photo, sending a form).

-----------------------------------------------------------

📘 Final Summary (Short + Clean)
API

A way for two software systems to communicate.

REST API

A design pattern for building APIs. REST APIs are stateless.

Stateless Communication

Server does not remember previous requests. Every request is fresh and independent.

GET

Used to fetch data.

Example: Searching “Sachin Tendulkar” on Google.

POST

Used to send data / create new data.

Example: Commenting on a YouTube video.
--------------------------------------------------------------------------------------------------------------


⭐ 3. PUT Method (Full Update)

PUT = Replace the entire resource with a new one.

📌 Your Sir’s Example (Profile)

Your profile:

{
  "name": "Faraz",
  "class": "12th",
  "age": 28,
  "phone": "9999999",
  "email": "xyz@gmail.com"
}


Now you want to update everything.

You send a PUT request:

PUT /user/23
{
  "name": "Faraz Ali",
  "class": "Graduated",
  "age": 20,
  "phone": "8888888",
  "email": "faraz@mail.com"
}


💡 Server deletes old data and replaces it completely with new data.

✔ Full update
✔ Overwrites everything
✔ Even if you miss one field, it may get removed

⭐ 2. PATCH Method (Partial Update)

PATCH = Update only specific fields.

📌 Your Sir’s example

If you want to change only age:

PATCH /user/23
{
  "age": 20
}


Only age updates.
Other fields stay untouched.

✔ Partial update
✔ Safer
✔ Used most in real projects

⭐ 3. DELETE Method (Remove Resource)

DELETE = Remove a resource from the server.

Your sir said:

"Practically not used much, mainly for knowledge."

Actually DELETE is used, but not too frequently by front-end students — mainly backend devs use it.

📌 Example

You want to delete your profile:

DELETE /user/23


Server removes your profile from the database.

✔ Removes permanently
✔ Not reversible normally

⭐ 4. GET Method (Get/Fetch data)

Your sir said:

“You can send a body even in a GET request.”

Technically:

Browsers do NOT allow body in GET

But Node.js allows it (not recommended)

Still GET with body is almost NEVER used

📌 Real Example

GET request to find all users:

GET /users


Server returns data.

GET is only for:
✔ Reading data
✔ Fetching resources
❌ No updating
❌ No deleting
❌ No creating

---------------------------------------------------------------------------------

⭐ 5. Real-Life Analogy (Very Easy)

Imagine a school record office.

📍 PUT = Replace entire record

You give a new form with ALL details filled again.

📍 PATCH = Correct only one detail

You say:
“Change only the age from 28 to 20.”

📍 DELETE = Remove the record

Your file is thrown away from the cupboard.

📍 GET = Just read

The staff gives you a photocopy of your file.

-------------------------------------------------------------------------------------------------


⭐ Final Summary Table


| Method     | Meaning         | Example                           | Action          |
| ---------- | --------------- | --------------------------------- | --------------- |
| **GET**    | Fetch data      | Search Sachin Tendulkar on Google | Read only       |
| **POST**   | Create new data | Comment on YouTube                | Add new         |
| **PUT**    | Full update     | Change full profile               | Replace all     |
| **PATCH**  | Partial update  | Update only age                   | Update specific |
| **DELETE** | Remove resource | Delete account                    | Remove          |

-----------------------------------------------------------------------------------------------------------

⭐ HTTP Status Codes — Simple Explanation

HTTP status codes are grouped like this:

| Range   | Meaning      |
| ------- | ------------ |
| **1XX** | Information  |
| **2XX** | Success      |
| **3XX** | Redirection  |
| **4XX** | Client Error |
| **5XX** | Server Error |


✅ 2XX = Everything is good

Examples:

200 OK → Request successful

201 Created → Something new was created (like new user, new post)

Now let’s explain what you asked:

⭐ 3XX Status Codes — Redirection (VERY EASY)

3XX means: “Go somewhere else.”
The server is telling the browser:

“The thing you are looking for is not here. Go to a different location.”

🔥 Real-life example (your sir’s style)
📌 Example: Visiting an old website

You type:

http://facebook.com

But the actual website is now:

https://www.facebook.com


So what happens?

The server sends back:

301 Moved Permanently
Location: https://www.facebook.com


Your browser automatically redirects you to the new URL.

------------------------------------------------------------------------------

⭐ Best Explanation With Examples of 3XX Codes
1️⃣ 301 – Moved Permanently

“Website has a new address forever.”

Example:

Old link

/myprofile


New link

/user/profile


Server says:

“Bro, the page moved permanently. Go to this new URL.”

Used when site structure changes.

2️⃣ 302 – Found / Temporary Redirection

“Go to another URL for now, but this is NOT permanent.”

Example:

Site under maintenance

/dashboard


Redirects temporarily to

/maintenance


When maintenance ends, dashboard works again.

3️⃣ 307 – Temporary Redirect (Modern version of 302)

Same as 302 but guarantees:

✔ Method (GET/POST) will not change
✔ Body is not dropped

Example:
A login page temporarily redirects to OTP verification.

4️⃣ 308 – Permanent Redirect (Modern version of 301)

Like 301, but method and body remain unchanged.

Used in modern APIs.

⭐ Simple Analogy to Remember 3XX

Imagine you go to a shop:

🟥 You go to the old shop → It has moved

Shopkeeper says:

301 → "We moved permanently. Here's our new address."

302 → "We're temporarily at another shop. Later we’ll return here."

307 → "Go to this temporary shop, but continue your same work."

308 → "We permanently moved, and everything stays same — use new shop."


---------------------------------------------------------------------------------

2nd API is SOAP


⭐ SOAP — Simple Object Access Protocol (Easy Notes)
✔ SOAP stands for Simple Object Access Protocol
✔ It is a strict protocol
✔ It offers very high security and very strict rules
✔ SOAP works only with XML (not JSON)
⭐ Where SOAP is used?

SOAP is used where security, reliability, and strict validation are required:

Banking systems (money transfer, account details)

Telecom (SIM activation, prepaid recharge, user verification)

Government & Enterprise systems

Reason: These industries need very strict rules, fixed format, and guaranteed delivery.

⭐ SOAP Requires Rules → WSDL

To use a SOAP API, you must follow some predefined rules written in a document called WSDL.

🔹 WSDL — Web Service Description Language

It is like the API blueprint or contract between client and server.

WSDL tells you:

1️⃣ What methods (functions) are available
Example: getBalance(), transferMoney(), activateSim()

2️⃣ What parameters you must send
Example:

accountNumber

mobileNumber

amount

3️⃣ What is the data structure
(Exactly how data should be written in XML)

4️⃣ What will be the response structure
(How server will send data back in XML format)

🔹 You must follow this structure exactly.
🔹 If you break the XML format → SOAP request will fail.

⭐ Simple Example to Understand SOAP & WSDL
📦 Imagine Banking SOAP API

You want to check your account balance.

WSDL says:

Method: getBalance

Parameter: accountNumber (string)

Request structure: must be XML

Response structure: must be XML


You send something like:
  <soap:Envelope>
    <soap:Body>
        <getBalance>
            <accountNumber>12345</accountNumber>
        </getBalance>
    </soap:Body>
</soap:Envelope>



Server will respond:

<soap:Envelope>
    <soap:Body>
        <getBalanceResponse>
            <balance>5000</balance>
        </getBalanceResponse>
    </soap:Body>
</soap:Envelope>


⭐ In One Line

SOAP = Highly secure + XML-only + very strict + used in banking/telecom + must follow WSDL rules.

-----------------------------------------------------------------------------------------------------------------

⭐ What Sir Explained About GraphQL (Simple Notes)
🔴 First — Problem with REST API

In REST API, you need multiple endpoints to get different data.

Example:

👉 To get user detail
GET /users/10

👉 To get user’s posts
GET /users/10/posts

❗ Problem:

You must call multiple URLs to fetch related data.
You cannot control the exact fields you want — server decides what to send.

🟣 Solution — GraphQL
GraphQL = One Endpoint for Everything

Instead of using many REST endpoints, GraphQL uses:

✔ One single endpoint (example: /graphql)
✔ You write a query and ask exactly what you need
✔ Server returns only requested fields

⭐ Example Explained by Sir
🔹 REST Example (Old Way)

To get:

user id

user name

email

You do:

GET /users/10


To get user posts:

GET /users/10/posts


➡ 2 endpoints
➡ 2 network calls
➡ Extra data sometimes comes even if you don't need it

⭐ GraphQL Example (New Way)

Your teacher wrote this:

{
  user(id: 10) {
    id,
    name,
    email
  }
}

✔ From ONE endpoint
✔ You ask EXACTLY the fields you want
✔ You save multiple API calls
⭐ GraphQL is Flexible — Add More Fields Anytime

Sir then showed you this example:

{
  user(id: 10) {
    id,
    name,
    email,
    post
  }
}

✔ You can just add post
✔ Same endpoint
✔ Same query
✔ No new REST route needed

REST → new endpoint for posts
GraphQL → just ask for posts

⭐ Why GraphQL is Powerful (Based on Sir's Explanation)
✔ 1. Single endpoint instead of many

REST = multiple URLs
GraphQL = only one

✔ 2. Query-based

You write what you want — like asking a waiter for specific items.

✔ 3. No over-fetching

Server sends only requested fields.

✔ 4. No under-fetching

You get all related data in one request.

✔ 5. Faster for frontend

Mobile/web apps can request only necessary data.

⭐ Simplest Real-Life Explanation

REST is like:

➡ You go to 3 different shops for:

Clothes

Shoes

Watch

GraphQL is like:

➡ One mall → you ask for whatever you want → they give exactly that.

⭐ Summary (Exam-Friendly)

GraphQL is an API query language where instead of multiple REST endpoints, a single endpoint is used. The client sends a query describing exactly which fields it needs. This avoids multiple network calls, prevents over-fetching, and makes data retrieval efficient and flexible.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  4.RPC 

  ✅ 1. What Does the Definition of RPC Mean?

Your sir said:

Remote Procedure Call (RPC) allows you to call a function on another computer just like calling a function in your code.

This simply means:

✔ Local Function Call:
getUserDetails();


This function runs in your own computer.

✔ RPC Function Call:
getUserDetailsFromServer();


This function looks like a normal function, but actually runs on another computer (server).

🔥 In simple words:

RPC makes calling a function on another computer feel as easy as calling a normal function in your own program.


✅ 2. What is actually happening in the background?

Your sir explained:

Google has many servers

One server talks to other internal services

For this internal communication, developers do not use REST API

They use RPC

✔ Why?

Because inside big systems, speed, performance, and efficiency matter a lot.

REST uses JSON, which is slow to convert.

RPC uses Protobuf, which is extremely fast.


✅ 3. What is Serialization and Deserialization? (Super Simple)

To send data over the internet:

✔ Serialization → Converting data into a transferable format
✔ Deserialization → Converting it back to usable format

Example:

You have:

{
   "name": "Faraz",
   "age": 20
}


Before sending:
→ Serialize into a format that can travel over the network
After receiving:
→ Deserialize back into an object


❌ Why JSON is expensive?

Because JSON is:

Big in size

Slower to parse

Text-based

Requires more CPU to read/convert

In large companies like Google, this wastes a lot of time and resources.


🚀 4. What is Protobuf? (Protocol Buffers)

Protobuf (Protocol Buffers) is a data format created by Google.

🔥 Simple explanation:

Protobuf is like a super-fast, super-small alternative to JSON.

✔ JSON → slow, heavy
✔ Protobuf → fast, light-weight

✅ Why RPC + Protobuf is used?

Because RPC using Protobuf:

Runs faster

Sends smaller data

Uses less CPU

Works great for internal communication

Helps large systems scale easily

This is why big companies prefer RPC over REST internally.


✅ 1. What is RPC? (Exact meaning)

RPC = Remote Procedure Call

👉 It means calling a function on another server just like calling a function locally in your code.

Example (local function):

addUser();


Example (RPC function call):

authService.addUser();


You write a normal function call,
but internally it calls a function on another computer/server.

RPC = Function calling on another machine
✅ 2. Why does RPC exist? (Sir’s explanation)

Your sir said:

Big companies like Google have many internal services

Those services talk to each other

For internal communication, they use RPC + Protobuf

Because JSON is slow/expensive, but Protobuf is fast

✔ Yes, THIS is the correct explanation.

RPC is mainly used for internal service-to-service communication because it is:

Faster

Lightweight

Uses Protobuf instead of JSON

Low latency

High performance

✅ 3. What is Protobuf? (Protocol Buffers)

Protobuf = A binary format created by Google that is:

Much faster than JSON

Much smaller data size

More efficient for CPU

✔ Used heavily inside large backend systems.

❌ 4. Then why don’t developers use RPC for everything? (Important part sir told)

Your sir said:

“Because of versioning issues, RPC is not commonly used in public APIs.”

This is 100% correct.

Why versioning is a problem in RPC?

RPC needs strict schema contracts.

If a function changes like:

createUser(name, email) 


and you later change it to:

createUser(name, email, age)


Then ALL clients using that RPC must update their code → this is painful.

RPC changes break clients easily.

🟢 5. REST API solves this problem

REST APIs:

Use URLs

Are loosely coupled

Use JSON (easy, flexible)

Are easy to version (/v1/users, /v2/users)

✔ REST is BEST for public APIs

(Because clients change slowly and need stable contracts.)

🟢 6. So when do we use what? (Simple rule)
⭐ Use REST when:

You are building a public API

You want easy versioning

You want flexibility

You want easy debugging

Client apps may not update frequently

You want human-readable data (JSON)

Examples:

Mobile app → REST

Website backend → REST

Third-party APIs → REST

Payment API → REST (Razorpay, Stripe)

Social media APIs → REST

⭐ Use RPC when:

Internal microservices talk to each other

High performance is required

You want extremely fast communication

You have stable internal teams

You already use Protobuf or gRPC

Examples:

Google internal services

Netflix microservices

Uber internal backend

High-speed internal requests

ML/AI model servers.



✅ What is a “schema contract” in RPC?

A schema contract means:

👉 “The client and server must agree on the exact shape, order, and type of data.”

If ANYTHING changes…
the RPC call breaks.

🔥 Example that will make everything clear
Suppose you have an RPC function:
createUser(name, email)


This is the contract between client and server:

It MUST have 2 arguments

Name MUST be string

Email MUST be string

Order MUST be the same

Now imagine one day the backend team updates the function:

createUser(name, email, age)

🚨 Now what happens?

❌ All old clients sending only (name, email) will break
❌ RPC will throw error because contract doesn’t match
❌ RPC expects 3 arguments, but client only sends 2
❌ Old apps must update their code or they will stop working

This is called strict schema contract.

It means:

“RPC is very strict. Client and server must follow the same exact structure.”

🆚 Now compare this with REST

REST:

POST /users
{
  "name": "Faraz",
  "email": "xyz@gmail.com"
}


If backend adds a new field:

age: 20


REST DOES NOT BREAK ⭐

Because:

REST is not strict

JSON is flexible

Extra fields are OPTIONAL

Order doesn’t matter

Missing fields don’t break the API

REST is “loosely coupled”.

RPC is strictly coupled.

🧠 Why is strict schema a problem?

(Your sir’s point)

Because clients cannot update instantly.

Example:

Old Android app

Old iPhone app

Third-party integrations

Old websites

These cannot update immediately.

So RPC version changes → breaks millions of clients.

REST is better here because:

✔ JSON is flexible
✔ You can add new fields safely
✔ Old clients still work
✔ You can version endpoints (/v1, /v2)

That’s why:

RPC = not good for public APIs (strict contract)
REST = perfect for public APIs (flexible)
🪄 One line summary you can remember

RPC breaks easily because client and server must follow an exact function signature. If you change the function even slightly, all clients break. REST is flexible, so it doesn’t break easily.



✅ What was your sir trying to explain with the Facebook example?

Your sir’s example:

10 years ago, some people used feature phones → old Facebook app

Others used smartphones → newer Facebook app

Both apps were different versions

But both apps still worked with Facebook server

👉 This is the benefit of REST API, NOT RPC.

🔥 Why did both old and new Facebook apps work?

Because REST + JSON is flexible.

Example:

Old app sends:
{
  "name": "Faraz"
}

New app sends:
{
  "name": "Faraz",
  "age": 20,
  "profilePic": "abc.jpg"
}


The server still works because:

JSON doesn't care about extra fields

Missing fields don’t break

Order doesn’t matter

You can add new fields anytime

Old clients still work fine

This is why REST is perfect for apps used by millions of devices with different versions.

❌ Why RPC would fail here?

RPC uses strict schema:

If server expects:

createUser(name, age, city)


But old phone sends:

createUser(name)


RPC will break.

Old apps stop working.
Users cannot log in.
App crashes.

This is why:

Large companies like Facebook cannot use pure RPC for public client apps.

REST allows 10-year-old old app + modern app to work together safely.



💡 7. Why Facebook example relates to REST, not RPC

Your sir’s example:

10 years ago some people used feature phones

Some used old Android versions

Some used new smartphones
→ All had different Facebook app versions

This is possible because REST:

✔ Is flexible

Older clients can still call older REST endpoints.

✔ JSON allows optional fields

New fields don’t break old clients.

✔ Versioning is easy

/api/v1/…
/api/v2/…

REST is perfect for public clients → where everyone uses different devices and versions.

RPC is not good for public clients → because strict schema breaks old versions.


