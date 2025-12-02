export default function Title({ title }: { title: string }) {
  return (
    <div className="flex items-start p-2">
      <h2 className="text-2xl font-extrabold">
        {title}
      </h2>
    </div>
  );
}
