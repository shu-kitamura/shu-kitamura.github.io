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
import { Label } from "@/components/ui/label"


export default function Home() {
  const { setTheme } = useTheme()
  return (
    <div>
      <header className="flex flex-col items-center bg-gray-500 dark:bg-gray-900">
        <div className="w-full sm:w-1/2" >
          <div className="flex justify-between py-2">
            <h1 className="text-4xl font-extrabold">
              Header Menu
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
        </div>
      </header>
      <main className="flex flex-col items-center bg-gray-300 dark:bg-gray-800">
        <div className="w-full sm:w-1/2">
          <h2 className="text-4xl font-extrabold">
            Profile
          </h2>
          <div className="flex justify-center">
            <Label>
              <Image
                src="/icon-light.svg"
                alt="Under Construction"
                width={200}
                height={200}
                className="scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100"
              />
              <Image
                src="/icon-dark.svg"
                alt="Under Construction"
                width={200}
                height={200}
                className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
              />
            </Label>
          </div>
          <div className="flex justify-center py-2">
            <Button variant="ghost" size="icon" className="mr-2" asChild>
              <Link href="https://github.com/shu-kitamura">
                <Avatar className="rounded-none scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100">
                  <AvatarImage src="/logos/github/github-mark-light.svg" alt="GitHub icon" />
                  <AvatarFallback>GitHub</AvatarFallback>
                </Avatar>
                <Avatar className="rounded-none absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0">
                  <AvatarImage src="/logos/github/github-mark-dark.svg" alt="GitHub icon" />
                  <AvatarFallback>GitHub</AvatarFallback>
                </Avatar>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="mr-2" asChild>
              <Link href="https://x.com/prog_shu">
                <Avatar className="rounded-none scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100">
                  <AvatarImage src="/logos/x/x-mark-light.svg" alt="X icon" />
                  <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <Avatar className="rounded-none absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0">
                  <AvatarImage src="/logos/x/x-mark-dark.svg" alt="X icon" />
                  <AvatarFallback>X</AvatarFallback>
                </Avatar>
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Link href="https://zenn.dev/shu_kitamura">
                <Avatar className="rounded-none">
                  <AvatarImage src="/logos/zenn/zenn-mark.svg" alt="Zenn icon" />
                  <AvatarFallback>Zenn</AvatarFallback>
                </Avatar>
              </Link>
            </Button>
          </div>
          <div className="flex justify-center py-2">
            作成中...
          </div>
          <div className="flex justify-center py-4">
            <Image
              src="/underConst.png"
              alt="Under Construction"
              width={400}
              height={400}
            />
          </div>
        </div>
      </main>
      <footer className="bg-gray-500 dark:bg-gray-900">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          © 2024 shu-kitamura
        </p>
      </footer>
    </div>
  );
}
