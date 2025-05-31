"use client";

import { useState } from "react";

interface Task {
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      {
        text: newTask,
        completed: false,
      },
    ]);
    setNewTask("");
  }

  function handleToggleTask(index: number) {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function handleDeleteTask(index: number) {
    const updatedTasks = [...tasks];

    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-neutral-50 dark:bg-neutral-950 rounded-xl shadow-md shadow-neutral-300 dark:shadow-neutral-800 space-y-4">
      <h1 className="text-2xl font-bold text-center">
        <span className="bg-gradient-to-b from-sky-500 to-sky-700 bg-clip-text text-transparent">
          To-Do
        </span>
        &nbsp;List
      </h1>
      <div className="flex space-x-2">
        <input
          className="flex-1 p-2 border border-neutral-300 dark:border-neutral-700 rounded dark:bg-neutral-900"
          placeholder="Add a new to-do..."
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />
        <button
          className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map(({ text, completed }, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 rounded ${
              completed
                ? "bg-green-100 dark:bg-green-950"
                : "bg-neutral-100 dark:bg-neutral-900"
            }`}
          >
            <span
              className={`flex-1 cursor-pointer ${
                completed
                  ? "line-through text-neutral-500 dark:text-neutral-300"
                  : ""
              }`}
              role="button"
              onClick={() => handleToggleTask(index)}
            >
              {text}
            </span>
            <button
              className="text-red-500 hover:text-red-700 ml-4"
              onClick={() => handleDeleteTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
