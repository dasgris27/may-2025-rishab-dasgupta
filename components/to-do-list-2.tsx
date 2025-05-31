"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Plus } from "lucide-react";
import { useState } from "react";

interface Task {
  text: string;
  completed: boolean;
}

interface ListItemProps {
  index: number;
  tasks: Task[];
  text: string;
  completed: boolean;
  toggleTaskCompleted: (index: number) => void;
  moveTaskUp: (index: number) => void;
  moveTaskDown: (index: number) => void;
  deleteTask: (index: number) => void;
}

export default function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim()) {
      setTasks([{ text: newTask, completed: false }, ...tasks]);
      setNewTask("");
    }
    // alert(tasks);
  }

  function toggleTaskCompleted(index: number) {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
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
    const updatedTasks = [...tasks];

    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function moveTaskToIndex(oldIndex: number, newIndex: number) {
    const updatedTasks = [...tasks];
    const taskToMove = updatedTasks.splice(oldIndex, 1)[0];

    updatedTasks.splice(newIndex, 0, taskToMove);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="flex flex-row gap-2">
        <Input
          placeholder="Enter a new task..."
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <Button onPress={addTask}>
          <Plus />
          Add
        </Button>
      </div>
      <Table className="mt-2" selectionMode="multiple">
        <TableHeader>
          <TableColumn>TASK</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No">
          {tasks.map(({ text, completed }, index) => (
            <TableRow key={index}>
              <TableCell>{text}</TableCell>
              <TableCell>{completed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
