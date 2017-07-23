# MEAN stack application

This project uses the MEAN stack. The frontend is written in Angular v4. It provides a simple interface for searching through the German civil code (BGB).

Run the following commands to start the application:

1.  mongoimport --db test --collection bgb --drop --type json --file bgb.json --jsonArray
    (feeds the database with the German civil code BGB (Buergerliches Gesetzbuch)
2.  ng server
    (starts the Angular4 server)
3.  nodemon server/server.js
    (start the backend server)
