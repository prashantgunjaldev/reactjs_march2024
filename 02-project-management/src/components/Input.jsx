import { forwardRef } from "react";

export default forwardRef(function Input({ label, textarea, ...props }, ref) {
  const cssClasses =
    "w-full p-1 border-b-2 rounded-sm bg-stone-200 border-stone-300 focus:outline-none focus:border-stone-600";
  return (
    <p className="felx flex-col my-4 gap-1">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={cssClasses} {...props}></textarea>
      ) : (
        <input ref={ref} className={cssClasses} {...props} />
      )}
    </p>
  );
});
