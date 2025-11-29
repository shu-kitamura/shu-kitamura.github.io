import { JSX } from "react";

export default function Section({ sectionId, contents }: { sectionId: string, contents: JSX.Element }) {
  return (
    <section className="w-full sm:w-1/2" id={sectionId}>
      {contents}
    </section>
  );
}
