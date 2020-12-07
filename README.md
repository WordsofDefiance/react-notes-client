# React Notes App

## Installation

Pretty straightforward -- clone, initialize the submodules, install the node modules, start the servers.

```
git clone https://github.com/WordsofDefiance/react-notes.git
git submodule init && git submodule update
cd client && npm install && cd ../
cd server && npm install && cd ../
```

Next, you will need to start the front-end and back-end servers.

To start the back-end server:
```
cd server
npx nodemon server.js
```

To start the front-end server:
```
cd client
npm start
```
Once the front-end and the back-end servers are up, you should be able to access the app at http://localhost:3000.
