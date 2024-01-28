import axios from "axios";
import { Todo } from "./types";

export const getTodos = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const response = await axios.get< Todo[] >(url);
  return response.data;
};