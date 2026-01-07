import { db } from "../firebase/firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Collection reference
const todosCollection = collection(db, "todos");

// CREATE
export async function addTodoService(todo) {
  return await addDoc(todosCollection, todo);
}

// READ (get all todos for a user)
export async function getTodosService(userId) {
  const snapshot = await getDocs(todosCollection);
  const todos = [];

  snapshot.forEach((docItem) => {
    const data = docItem.data();
    if (data.userId === userId) {
      todos.push({ id: docItem.id, ...data });
    }
  });

  return todos;
}

// UPDATE
export async function updateTodoService(id, updatedFields) {
  const todoRef = doc(db, "todos", id);
  return await updateDoc(todoRef, updatedFields);
}

// TOGGLE STATUS
export async function toggleTodoStatusService(id, currentStatus) {
  const todoRef = doc(db, "todos", id);
  return await updateDoc(todoRef, { completed: !currentStatus });
}

// DELETE
export async function deleteTodoService(id) {
  const todoRef = doc(db, "todos", id);
  return await deleteDoc(todoRef);
}
