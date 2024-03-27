import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    //Do validation if all good
    //title.current.value;
    //console.log("Save", title.current.value);

    onAdd({
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancel}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="text-stone-50 bg-stone-800 hover:bg-stone-950 px-6 py-2 rounded-md"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" type="text" ref={title} />
        <Input label="Description" textarea ref={description} />
        <Input label="Due Date" type="date" ref={dueDate} />
      </div>
    </div>
  );
}
