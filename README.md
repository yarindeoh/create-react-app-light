# My Application
### Tech stack
React 16.9
Redux
Latest react-redux
webpack
typescript
express
NodeJS
react-router
redux-saga

### Development Mode

1. Install Frontend dependencies from root directory:
```js
npm install
```

2. Install server dependencies:
```js
cd /server
npm install
```

3. Run start-dev script to run both server and client:
```js
npm run start-dev
```

### Production / Staging Mode
In prod/staging we are using webpack CopyPlugin to copy the server directory
in order to run it on the deployed vm as a middle layer server that serving static bundle and using
as proxy to listen and authenticate rest calls on port 8080.

### Authentication
When login occurs a session is being created through Jira Crowd Rest API
and an encrypted 'token' is being sent to the frontend which saves it in localstorage.

Each request from the FE to the middle layer is adding this token to the header.
