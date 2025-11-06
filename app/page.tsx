"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";

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
  const { setTheme } = useTheme()
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
                <Button variant="ghost" size="default">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-10 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-10">
                  <DropdownMenuRadioItem value="system" onClick={() => setTheme("system")}>
                    システム
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="light" onClick={() => setTheme("light")}>
                    ライト
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark" onClick={() => setTheme("dark")}>
                    ダーク
                  </DropdownMenuRadioItem>
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
