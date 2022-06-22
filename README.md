# **The Tech Prospective Survey**
[Team Collaboration Agreement](https://docs.google.com/document/d/1Ei7RcvOaHzeyUDbDCYfNEVa91ktPXAih2gQk4I0Fmmc/edit#heading=h.y52avp42q2jv)

## **Survey URL**

[Tech Perspective Survey](https://tech-perspective-survey.netlify.app/admin)

## **The vision**

- The vision compiling diversity data and using it as a teaching tool to bring to light internal biases and ways to be more conscious with regard to inclusivity and diversity .

## **The Problem Domain**

- This project will revolutionize the existing survey data, making it more user friendly and caching historical data.

## **The Importance**

- This product will drastically improve the awareness of internalized biases, discrimination and privilege based on a multitude of factors. This product will serve to bring about a more inclusive and self-aware team.

### **The Project Scope (In/Out)**

![Survey Admin](./public/assets/surveyadmin.png)

#### *In Scope*

*Allow the Admin user to...*

- Access the survey.
- Complete the survey.
- View data on a stylized graph.
- Compare data by multiple students in one class.
- See how many students participate in the survey.
- Have multiple active surveys each being for an individual class


## How To Use **The Tech Perspective Survey**
## Step One
Be sure you are in the directory in which you want these repos to live before you clone.

Begin by running:
`git clone https://github.com/teamRed-d85/techperspective-front.git`

Do the same for the backend repo:
`git clone https://github.com/teamRed-d85/techperspective-back.git`

## Step Two

In your terminal and inside of the root directory of the project `cd techperspective-front`
- then `npm install`
- then `npm install`

- repeat **step two** for 'techperspective-back'

## Step Three

- Your are going to need to create a `.env` file in your frontend and backend root directories. Below are the env variables you will need.

FRONT END!
```
REACT_APP_AUTH_DOMAIN=<your-value-here>
REACT_APP_AUTH_CLIENT_ID=<your-value-here>
REACT_APP_AUTH_REDIRECT_URI=<your-value-here>
REACT_APP_SERVER_URL=<your-value-here>
```

BACK END!
```
MONGO_DB=mongodb+srv://<username>:<password>@cluster0.uj68i.mongodb.net/?retryWrites=true&w=majority
JOTFORM_API=<your-value-here>
JOTFORM_TEMPLATE=212435934626054
JWKS_URI=<your-value-here>
```

You can obtain your JotForm API key from [JotForm](https://www.jotform.com/)
1. Make an account
2. Log in
3. Click on profile icon picture in the top right and select `Settings`
4. In the left column click `API` and then click the `Create New Key` button to generate an API key


## To start server

- Within your backend root directory type `npm start` or `nodemon` if you have that installed globally
This will start the backend services.

- Within your frontend root directory type `npm run`
This will start up your frontend React project files
