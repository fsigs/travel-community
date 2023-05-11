# travel-community

Travel Community WebApp

## Installation

Before:
Clone the repo or unzip the app file
Init command requires mongoimport utility. Install Mongo Tools and enable it https://www.mongodb.com/docs/database-tools/
Create an empty database in Mongo called **travelCommunity** with three empty collection called **trips** , **subscriptions** and **users**. 
Got to each of the collections folder in Mongo Server (Can use Compass) ,click on ADD DATA and click import JSON file.  
for trips collection folder: Import the **trips.json** file availabe in the scripts folder of the repositotry.  
for users collection folder: Import the **users.json** file availabe in the scripts folder of the repositotry.  
for subscriptions collection: Import the **subscriptions.json** file availabe in the scripts folder of the repositotry.  

Commands to start the app :
run the commands from project directory using console
* npm install
* npm run init
* npm run dev or npm run start (if you want productive deployment)

Project should listen in http://localhost:3000
