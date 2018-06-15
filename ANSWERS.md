<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware is a function that can access and alter the request and response objects before they are sent to the server.

Sessions are one way to store user data. A session is created when a user logs in, for example, and the browser will remember who they are even if they refresh the page.

bcrypt is a hashing function often used to hash passwords.

JWT (json web tokens) are another way to store user data. The token is encrypted.

2.  What does bcrypt do in order to prevent attacks?

bcrypt can be used to hash passwords so that they are impractical to brute force in the event of a database being compromised.

3.  What are the three parts of the JSON Web Token?

JWTs have a header - which can include an algorithm and type, a payload - which is the data you want to save in the browser, and a signature - which includes a secret to encrypt everything.
