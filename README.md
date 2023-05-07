# travel-community

Travel Community WebApp

## Instalation

Before:
Clone the repo or unzip the app file
Init command requires mongoimport utility. Install Mongo Tools and enable it https://www.mongodb.com/docs/database-tools/
Create an empty database in Mongo called travelCommunity with one empty collection called trips. 
Import the trips.json file in scripts folder into trips collection.

Commands to start the app :
npm install
npm run init
npm run dev or npm run start (if you want productive deployment)

Project should listen in http://localhost:3000

## Documentation

Models: 

trip, user, registration

RESTFul API operations:

get trips
get trips/id
get trips/search
post trips
delete trips/id

get subscriptions

get users/id
post users/authenticate
post users
delete users/id
