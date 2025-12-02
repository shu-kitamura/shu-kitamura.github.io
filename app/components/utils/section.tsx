import { JSX } from "react";

export default function Section({ sectionId, contents }: { sectionId: string, contents: JSX.Element }) {
  return (
    <section className="w-full sm:w-1/2 pt-1 bg-gradient-to-r from-orange-500 dark:from-orange-600 from-0% to-blue-500 dark:to-blue-800 to-100%" id={sectionId}>
      <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl/30 p-4 space-y-4">
        {contents}
      </div>
    </section>
  );
}
