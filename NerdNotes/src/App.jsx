import "./App.css";
import { useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isDone, setIsDone] = useState([]);

  // task add
  const SubmitHandler = (e) => {
    e.preventDefault();
    setTask("");
    if (task.length == 0) {
      alert("add something..");
      return;
    }
    setTaskList([...taskList, { task }]);
    setIsDone([...isDone, false]);
    console.log(taskList);
  };

  // delete task
  const deleteHandler = (i) => {
    if (isDone[i] === true) {
      // Check if the task at index 'i' is done
      let taskListCopy = [...taskList];
      taskListCopy.splice(i, 1);
      setTaskList(taskListCopy);
      let isDoneCopy = [...isDone];
      isDoneCopy.splice(i, 1);
      setIsDone(isDoneCopy);
    } else {
      alert("Complete Task First");
    }
  };

  var res = "no task left ✅";

  if (taskList.length > 0) {
    res = taskList.map((t, i) => {
      return (
        <div className="task_content">
          <div className="innner_task">
            <label class="container">
              <input
                type="checkbox"
                checked={isDone[i]}
                onChange={(e) => {
                  let isDoneCopy = [...isDone];
                  isDoneCopy[i] = e.target.checked;
                  setIsDone(isDoneCopy);
                }}
              />
              <div class="checkmark"></div>
            </label>
            <h2>{t.task}</h2>
          </div>

          <button className="delete" onClick={() => deleteHandler(i)}>
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <>
      <div className="main">
        <div className="heading">
          <h2>Nerd Notes</h2>
          <p><span>Productivity</span> is just a click away.</p>
        </div>
        <div className="task_container">
          <div className="task">
            <form onSubmit={SubmitHandler}>
              <input
                className="task_list"
                placeholder="Enter task here"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button className="add_task">Add</button>
            </form>
          </div>

          <div className="task_box">{res}</div>
        </div>
      </div>
    </>
  );
}

export default App;
