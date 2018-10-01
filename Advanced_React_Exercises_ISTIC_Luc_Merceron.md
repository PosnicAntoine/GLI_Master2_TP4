 # Advanced React Exercise
Created by [Luc Merceron](https://github.com/lucmerceron/)

## Information
### Setup

* *cd* into your last React Exercise folder (should be named **NAME_LASTNAME_CLASS**)
* Install **parse** client SDK by typing `npm install --save parse`
* Install **redux**, **react-redux** and **redux-logger** & **redux-thunk** middleware by typing `npm install --save redux react-redux redux-logger redux-thunk`
* Run your app with `npm start`
* Your application will be served through `http://localhost:3000`

### At the end (max 1 week after the Practical Class)
* Compress your folder and send it to **luc.merceron.dev@gmail.com** with the object: **Advanced_React_Exercices_NAME_LASTNAME_CLASS**

## Enhanced Group Expenses App
The goal of this exercise will be to enhance your **Group Expenses App** with an Application Architecture system named **Redux** and to make your application's state persistant by connecting it to a Back-End [Parse](https://parseplatform.org/) server (which has been created and hosted by myself for the sake of this exercise; it's life should not exceed one month)

### 1. "Reduxify" your state
At the present time, your application state should be living in your root component and flowing down to your child-components through props. We want to put this state into a store, thus giving us the possibility to easily use it across our application's components if we had to enlarge its scope. To do so, we need to:
* Configure the store of our application by creating a *configureStore.js* file containing:
```
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger' // This will log into our console information about redux actions & store
import thunk from 'redux-thunk' // This middleware allows us to use Promises in our actions (async in action)

import rootReducer from './reducers/rootReducer' // We will implement this later on, create a file exporting and empty object for now

const middlewares = applyMiddleware(thunk, createLogger())

export default function configureStore(preloadedState = {}) { // preloadedState is useful for SSR, which we don't use
  const store = createStore(rootReducer, preloadedState, middlewares)

  return store
}
```
* Modify you **index.js** to import your `configureStore.js` file, call it and pass the result to a `react-redux` provider ([example](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store)).
* Create your **actions** to trigger events on your store.
* Create your **reducers** to manipulate your store from those events. Import these reducers an combine them in the *rootReducer* file:
* You now can wrap your Components with the *connect* HOC (from [`react-redux`](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)) when you want to retrieve from the store a state to display and/or map actions you want to dispatch.


### 2. Connection with Parse
Now that our application's state is stored into a Redux store, we can easily sync it with a **Database**. To do so, you will:
* Init a *Parse* SDK object by typing:
```
const Parse = require('parse')
Parse.initialize("zDdcWaZElGOezFM", "LQSdqPzemMvcxNE"); // Shhh, don't share them
Parse.serverURL = 'https://parse.nebula.ovh/parse'
```
The *Parse* object should now be "connected" to our **parse back-end** server. You can either put it in your rootReducer so you can access it from your actions or simply put the script above in a **Parse.js** file, export the Parse object and import it whenever you need it in an action (easier).
* Learn how to [CRUD entities with Parse](https://docs.parseplatform.org/js/guide/#objects). We only have one **database** for all of you, so please consider prefixing your entities with a unique identifier so you don't read/update/delete entities from your colleagues (ex: entities `'13aeAZEA_Costs'`, entities `'13aeAZEA_Payers'`).
* Initialise your application state by calling a "retrieve entities" action in your root Component. This action should use a *Parse* read operation and dispatch the result so a reducer can fill up the store.
* Update your actions that should modify your store with calls to your *Parse* SDK. Don't forget to modify your store every time an action succeed to keep it in sync with the *database*.
* [Optional] Host your application online using [now.sh](https://zeit.co/now) free service.