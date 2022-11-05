
# dottxt

  

## Project setup

  

For project setup, run

```

npm install

```


For production environment application to be generated, run

```

npm run build

```

  
  To push to the student server, run

```

npm run deploy

```
  

## Front End
 
To experience the front-end part of this application, run the following command.

```

npm run serve

```

This will automatically refresh when changes are made.
## Back End



To start the back-end API, run

```

npm run start
  
```

There is currently only one route in the API, which gives different results depending on the interaction of the route. 

The route ***/docs***  has the functionality of..
 - When using GET method, returning a list of all the current available documents
 - When using POST, adding a new document to the dataset. This requires a body which contains keys **Name** and  **docContent** together with data for each key.
 - When using PUT, editing an existing document. This requires a body which contains keys **Name** and  **docContent**, where Name is used for finding the document to edit, and docContent used for replacing the specified content. Returns edited document.

  


