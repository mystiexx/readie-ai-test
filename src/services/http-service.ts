import axios from "axios";

const username = import.meta.env.VITE_APP_USERNAME;
const password = import.meta.env.VITE_APP_PASSWORD;
const auth = btoa(`${username}:${password}`);
const baseUrl = import.meta.env.VITE_APP_API;

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Basic ${auth}`,
  },
});

export const endpoint = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "authtoken": `1232233333`,
  },
})