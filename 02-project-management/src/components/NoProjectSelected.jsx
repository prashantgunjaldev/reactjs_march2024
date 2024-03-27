import Button from "./Button";

import noProjImg from "../assets/no-projects.png";

export default function NoProjectSelected({ onStartAddProj }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjImg} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">Please select project to work</p>
      <Button onClick={onStartAddProj}>Create New Project</Button>
    </div>
  );
}
