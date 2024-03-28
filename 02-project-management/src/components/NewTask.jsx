import { useState } from "react";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewTask({ onNewTask }) {
  const [task, setTask] = useState("");
  const modal = useRef();

  function saveTask() {
    if (task.trim() !== "") {
      onNewTask(task);
      setTask("");
    } else {
      modal.current.show();
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Modal ref={modal} buttonCaption="Ok">
        <h2 className="text-xl font-bold text-stone-700 mb-4 my-4">
          Invalid Task
        </h2>
        <p className="text-stone-600 mb-4">Please provide valid values</p>
      </Modal>
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={saveTask}
      >
        Save
      </button>
    </div>
  );
}
