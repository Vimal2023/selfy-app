import 'react-native-url-polyfill/auto';
import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

  // Do NOT use setPlatform() when you are using Expo (managed workflow).

export const account = new Account(client);
export const avatars = new Avatars(client);
