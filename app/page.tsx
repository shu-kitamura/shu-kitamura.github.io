"use client"

import * as React from "react"

import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Home() {
  const [position, setPosition] = React.useState("system")
  return (
    <div>
      <header className="flex flex-col items-center py-5 bg-gray-300 dark:bg-gray-700">
        <div className="flex justify-between sm:w-1/3">
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
            shu-kitamura
          </h1>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">☀️</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-10">
                <DropdownMenuLabel>テーマ</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="system">システム</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="light">ライト</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">ダーク</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex justify-end bg-red-500">
          <p className="mx-2 bg-blue-500 rounded-md px-1">
            github
          </p>
          <p className="mx-2 bg-blue-500 rounded-md px-1">
            x
          </p>
        </div>
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
