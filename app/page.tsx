import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="text-center py-10 bg-gray-300 dark:bg-gray-700">
        <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
          shu-kitamura
        </h1>
      </header>
      <main className="flex justify-center">
        <div className="p-5">
          <Image
            src="/underConst.png"
            alt="Under Construction"
            width={400}
            height={400}
          />
        </div>
      </main>
      <footer>
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          © 2024 shu-kitamura
        </p>
      </footer>
    </div>
  );
}
