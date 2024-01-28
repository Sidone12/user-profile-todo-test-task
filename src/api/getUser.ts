import axios from "axios";
import { User } from "./types";

export const getUser = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await axios.get<{ data: User[] }>(url);
  return response.data;
};
