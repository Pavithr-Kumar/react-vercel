import React, { useEffect, useRef } from "react";

const AddToDo = ({ allTasks, setAllTasks, update, updateData, setUpdate }) => {
  let text = "";

  useEffect(() => {
    allTasks.forEach((t) => {
      if (t.id === update) text = t.desc;
    });
    inputRef.current.value = text;
  }, [update]);

  let inputRef = useRef("");
  const addObj = () => {
    if (update !== -1) {
      updateData(inputRef.current.value);
      setUpdate(-1);
      inputRef.current.value = "";
    } else {
      let obj = {
        id: Math.floor(Math.random() * 1000),
        desc: inputRef.current.value,
        date: new Date().toISOString().slice(11, 19),
      };

      setAllTasks([...allTasks, obj]);
      inputRef.current.value = "";
    }
  };
  return (
    <div className="addToDo">
      <div className="row1">
        <input ref={inputRef} type="text" />
        <button onClick={addObj}>
          {update === -1 ? "Add Task" : "Update Task"}
        </button>
      </div>
      <div className="row2">
        <span>No of Tasks: {allTasks.length}</span>
        <button onClick={() => setAllTasks([])}>Clear All</button>
      </div>
    </div>
  );
};

export default AddToDo;
