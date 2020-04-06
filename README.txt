
# Project - SavMyBil

* Date Created: 06 APR 2020
* Last Modification Date: 06 APR 2020

## Authors

* Ujwal Vikas Chanda - uj225642@dal.ca
* Adithya, Amogh - am210633@dal.ca
* Bajunaid, Hisham - hs875452@dal.ca
* Khant, Hirenkumar Jayantilal - hr266981@dal.ca
* Sharafi, Rodean - rd921712@dal.ca

## Getting Started

Features included for development of mobile app:
1. Net Zero Status
2. Trending Eco Devices
3. Smart Home

### Built With

The Mobile app was developed using IONIC Framework for both Android and IOS platforms.
Server is developed using Express, Node and Mongo DB Atlas and hosted on AWS cloud on EC2 instance.
Docker containers are used to run all the three services (Net Zero, Eco Devices, and Smart Home) independently on cloud.
Rest api's are used to access the server and mongodb on cloud from the mobile application.

The web based plugin is an Alexa skills set api that allows the user to interact with
it based on "utterances" and invocation commands, parses the the speech input into a JSON format.
The skills api then sends the JSON request to a backend server which is this case is AWS Lambda service.

AWS Lambda is a web based serverless program that allows users to write functions in Python that perform 
required tasks. We have coded the program to specifically retrieve data from our backend dynamoDB. 
This program is uploaded as "lambda.py" which is enclosed in the project folder.

The plugin is named "Savemybill" which is certified by Amazon developement team
and is available in the Amazon marketplace which can be monetized. 
We have used this plugin in our demo.

### File Name

Frontend: https://git.cs.dal.ca/uchanda/techinno_savmybil/-/tree/dev

Backend: https://git.cs.dal.ca/uchanda/techinno20_savmybil_backend


### Prerequisites

Mobile Device - Android ( Version 8 or low) & IOS


## Links

* [Ionic](https://ionicframework.com) - Frontend Framework
* [nodeJS](https://nodejs.org/en/) - Backend
* [AngularJS](https://angular.io/docs) - Frontend Framework
* [Express](https://express-validator.github.io/docs/) - Backend Framework
* [Mongoose](https://mongoosejs.com) - Database connection
* [MongoDB Atlas](https://mongodb.com) - Database
* [Docker](https://www.docker.com) - Cloud Container
* [AWS](https://aws.amazon.com/ec2/) - Cloud Host
* [Python]

## References

[1]"Angular", Angular.io, 2020. [Online]. Available: https://angular.io/docs. [Accessed: 04- Apr- 2020].
[2]"Node.js", Node.js, 2020. [Online]. Available: https://nodejs.org/en/. [Accessed: 04- Apr- 2020].
[3]"Mongoose ODM v5.9.7", Mongoosejs.com, 2020. [Online]. Available: https://mongoosejs.com. [Accessed: 04- Apr- 2020].
[4]"MongoDB Atlas", MongoDB, 2020. [Online]. Available: https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_canada_search_brand_atlas_desktop&utm_term=atlas%20mongodb&utm_medium=cpc_paid_search&utm_ad=e&gclid=CjwKCAjw4KD0BRBUEiwA7MFNTa5M16-XT2aBpLScSdmt2pTBvpU-8mk5S5OP83tsoyJISCf8WHbCpRoCp7sQAvD_BwE. [Accessed: 04- Apr- 2020].
