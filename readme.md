# UCM Challenge

## How to run the project

In order to run the project locally:

1. Clone the repo
2. Install all dependencies with `yarn`
3. Ask other team members for firebase credentials (unless you already have those)

- create `firebase.config.ts` (it is added to `.gitignore`)
- fill in the appropriate data:

```typescript
export const firebaseConfig = {
  apiKey: 'someKey',
  authDomain: 'someDomain',
  projectId: 'someId',
  storageBucket: 'someStorageBucket',
  messagingSenderId: '123',
  appId: '123',
  measurementId: '123',
}
```

4. Start the bundler with `yarn start`
5. Run the app on the platform of your choice (see the hints in the CLI)

## Access the app via Expo Go

Ask a team member to invite you to the Expo project so that you can download the latest JS build!

1. Have/install the Expo Go app on your device
2. Log in with an email that the invitation was sent to
3. Open the below link in the browser

Expo GO Link: exp://exp.host/@daniel_grychtol/ucm-challenge

## Preview

![iOS App walkthrough demo](./ios_demo.gif)
