import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: "https://cloud.appwrite.io/v1",
  projectId: "67488edc001e371a7ef2",
  databaseId: "67488f16001332c9a32e",
  storageId: "67488f83003d882f9a57",
  userCollectionId: "67488f2d00342418219c",
  postCollectionId: "67488f4900131a91d3b4",
  savesCollectionId: "67488f520026020a463a",
};

console.log(appwriteConfig.url);

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
