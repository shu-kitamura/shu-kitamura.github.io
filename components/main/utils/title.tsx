import { JSX } from "react";

export default function Title({ title, icon }: { title: string, icon: JSX.Element }) {
  return (
    <div className="flex items-start p-2">
      {icon}
      <h2 className="text-4xl font-extrabold">
        {title}
      </h2>
    </div>
  );
}
