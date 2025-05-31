"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Card } from "@heroui/card";
import { Trash, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function ToDoListPage() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e: { target: HTMLInputElement }) {
    setNewTask((e.target as HTMLInputElement)?.value);
  }

  function addTask() {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="to-do-list">
      <h1 className={title()}>To-Do List</h1>
      <div className="flex flex-row gap-2 mt-6">
        <Input
          className="flex-grow"
          placeholder="Enter a task..."
          type="text"
          value={newTask}
          onChange={handleInputChange}
        />
        <Button isDisabled={!newTask.trim()} onPress={addTask}>
          Add
        </Button>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Card key={index} className="mt-2 p-2">
            <div className="flex flex-row items-center gap-2 pl-1">
              <span className="flex-grow">{task}</span>
              <Button
                isDisabled={tasks.length === 1}
                size="sm"
                onPress={() => moveTaskUp(index)}
              >
                <ArrowUp />
              </Button>
              <Button
                isDisabled={tasks.length === 1}
                size="sm"
                onPress={() => moveTaskDown(index)}
              >
                <ArrowDown />
              </Button>
              <Button
                color="danger"
                size="sm"
                onPress={() => deleteTask(index)}
              >
                <Trash />
              </Button>
            </div>
          </Card>
        ))
      ) : (
        <Card className="mt-2 p-3 text-small text-neutral-600 dark:text-neutral-400">
          No tasks to display.
        </Card>
      )}
    </div>
  );
}
