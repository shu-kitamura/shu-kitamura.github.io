"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


export default function Home() {
  const { setTheme } = useTheme()
  return (
    <div>
      <header className="flex flex-col items-center bg-gray-300 dark:bg-gray-700">
        <div className="w-full sm:w-1/3">
          <div className="flex justify-between py-2">
            <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
              shu-kitamura
            </h1>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100" />
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
          <div className="flex py-2">
            <Button variant="ghost" size="icon" className="mr-2" asChild>
              <Link href="https://github.com/shu-kitamura">
                <Avatar className="scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100">
                  <AvatarImage src="/github-mark.svg" alt="GitHub icon" />
                  <AvatarFallback>GitHub</AvatarFallback>
                </Avatar>
                <Avatar className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0">
                  <AvatarImage src="/github-mark-white.svg" alt="GitHub icon" />
                  <AvatarFallback>GitHub</AvatarFallback>
                </Avatar>
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Link href="https://x.com/prog_shu">
                <Avatar>
                  <AvatarImage src="/x-logo.svg" alt="X icon" />
                  <AvatarFallback>X</AvatarFallback>
                </Avatar>
              </Link>
            </Button>
          </div>
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
