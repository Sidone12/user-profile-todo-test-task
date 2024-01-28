import axios from "axios";

import type { Todo } from "./types";

export const addTodo = async (newTodo: Todo) => {
  await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
};
