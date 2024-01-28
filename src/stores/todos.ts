import { defineStore } from "pinia";
import type { Todo } from "../api/types";
import { getTodos } from "../api/getTodos";
import { addTodo } from "../api/addTodo";

export interface TodosStore {
  todos: Todo[];
  favoriteIds: [];
}

const FAVORIT_TODOS = "favorites";
const getFavorite = () => {
  const items = localStorage.getItem(FAVORIT_TODOS);
  if (!items) {
    return [];
  }
  return JSON.parse(items) ?? [];
};

export const useTodosStore = defineStore("todos", {
  state: (): TodosStore => ({
    todos: [],
    favoriteIds: getFavorite(),
  }),
  actions: {
    async getTodos(): Promise<void> {
      this.todos = await getTodos();
    },
    async addNewTodo(newTodo): Promise<void> {
      try {
        await addTodo(newTodo);
        this.todos.unshift(newTodo);
      } catch (error) {
        console.error("Failed to add todo:", error);
      }
    },
    async filteredTodos(
      tokenFilter?: string,
      completedFilter?: string,
      userIdFilter?: number
    ): Promise<void> {
      let filteredTodos = await getTodos();

      if (tokenFilter?.length > 0) {
        filteredTodos = filteredTodos.filter((todo) => todo.title.includes(tokenFilter));
      }

      // Фільтр по статусу
      if (completedFilter === "Completed") {
        filteredTodos = filteredTodos.filter((todo) => todo.completed);
      }
      if (completedFilter === "Uncompleted") {
        filteredTodos = filteredTodos.filter((todo) => !todo.completed);
      }
      if (completedFilter === "Favorites") {
        filteredTodos = filteredTodos.filter((todo) => this.favoriteIds.includes(todo.id));
      }
      // Фільтр по ID юзера
      if (userIdFilter !== null) {
        filteredTodos = filteredTodos.filter((todo) => todo.userId === userIdFilter);
      }

      this.todos = filteredTodos;
    },

    addFavorite(id) {
      let index = this.favoriteIds.findIndex((el) => el === id);
      if (index > -1) {
        this.favoriteIds.splice(index, 1);
      } else {
        this.favoriteIds.push(id);
      }
      localStorage.setItem(FAVORIT_TODOS, JSON.stringify(this.favoriteIds));
    },
  },
});
