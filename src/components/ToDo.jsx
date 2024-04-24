import React, { useState } from "react";
import AddToDo from "./AddToDo";
import Task from "./Task";

export const ToDo = () => {
  let [allTasks, setAllTasks] = useState([]);
  let [update, setUpdate] = useState(-1);

  const updateData = (text) => {
    let arr = [...allTasks];
    arr.forEach((task) => {
      if (task.id == update) {
        task.desc = text;
      }
      setAllTasks(arr);
    });
  };
  
  return (
    <div>
      <AddToDo
        update={update}
        setUpdate={setUpdate}
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        updateData={updateData}
      />
      <Task
        update={update}
        setUpdate={setUpdate}
        allTasks={allTasks}
        setAllTasks={setAllTasks}
      />
    </div>
  );
};
