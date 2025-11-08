import { JSX } from "react";

export default function Section({ sectionId, contents }: { sectionId: string, contents: JSX.Element }) {
  return (
    <div className="w-full sm:w-1/2 my-5 bg-gray-100 dark:bg-gray-600" id={sectionId}>
      {contents}
    </div>
  );
}
