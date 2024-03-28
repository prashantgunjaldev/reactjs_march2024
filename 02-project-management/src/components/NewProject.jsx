import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  function handleSave() {
    //Do validation if all good
    //title.current.value;
    //console.log("Save", title.current.value);
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      dueDate.current.value.trim() === ""
    ) {
      modal.current.show();
      return;
    }

    onAdd({
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Ok">
        <h2 className="text-xl font-bold text-stone-700 mb-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">Please provide valid values</p>
      </Modal>
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
    </>
  );
}
