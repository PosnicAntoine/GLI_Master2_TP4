 # React Exercise
Created by [Luc Merceron](https://github.com/lucmerceron/)

## Information
### Setup

* Install [create-react-app](https://github.com/facebook/create-react-app) by typing `npm install -g create-react-app`
* Create an app named **NAME_LASTNAME_CLASS** with the command `create-react-app <NAME_LASTNAME_CLASS>`
* **cd** in your newly created app & run the development mode with `npm start`
* Your application will be served through `http://localhost:3000`
* Hot-reloading is activated (auto reload when you make changes to the code)
* The entry point of your application is **App.js**

### At the end
* Compress your folder and send it to **luc.merceron.dev@gmail.com** with the object: **React_Exercices_NAME_LASTNAME_CLASS**

## Group Expenses App
The goal of this exercise will be to create a dynamic Tricount-like app. The design is not important. It will not (yet) be connected to a back-end. This application will be mostly used on mobiles. Our main target will be Iphone 6/7/8: 375x667 pixels.  

Put your browser view in **Responsive Design Mode** with those dimensions.

### 1. The mock

![](https://nextcloud.nebula.ovh/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=656&a=true&file=React%2520Exercise%2520Tricount.png&t=2dog5RLLTZrDKzy&scalingup=0)

### 2. The data

I recommend creating mock data for your app initial state, the data should look like:  
*  An Array of users ([2-3], fixed): ['Amine', 'Julie', 'Kévin']
*  An Array of costs: [{ paidBy: 'Amine', title: 'Beer', amount: 15 }, ...]

### 3. User Stories

**As a user of this application, I should be able to:**
* See the list of each expense with its title, the name of the payer and the amount paid
* Filter on the list by user
* Add a new expense to the list by filling what it is, who paid it and how much it cost
* See the total expenses of the displayed list
* [Optional] Add a new payer
    *  UI: The new input should be next to the filter
* [Optional] Keep my data between each page refresh
    * Technically: Store & retrieve the application state with the localStorage of the browser
    
### 4. Follow the 4 steps of **Thinking In React** from the course