"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";

import Image from "next/image";

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import AboutMe from "@/components/main/aboutMe"
import Certification from "@/components/main/certification";
import Project from "@/components/main/project";


export default function Home() {
  const { setTheme } = useTheme()
  const { theme } = useTheme()
  return (
    <div>
      <header className="flex flex-col items-center bg-gray-500 dark:bg-gray-900">
        <div className="w-full sm:w-1/2">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-2">
              <Label>
                <Image
                  src="/icon-light.svg"
                  alt="shu-kitamura icon"
                  width={60}
                  height={60}
                  className="scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100"
                />
                <Image
                  src="/icon-dark.svg"
                  alt="shu-kitamura icon"
                  width={60}
                  height={60}
                  className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
                />
              </Label>
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                shu-kitamura
              </h1>
            </div>            
            <Button variant="ghost" size="icon" onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark")
            }}>
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <Tabs defaultValue="work" className="w-[400px]">
            <TabsList className="bg-gray-500 dark:bg-gray-900">
              <TabsTrigger value="work" className="data-[state=active]:bg-gray-400 dark:data-[state=active]:bg-gray-700">技術者として</TabsTrigger>
              <TabsTrigger value="pastime" className="data-[state=active]:bg-gray-400 dark:data-[state=active]:bg-gray-700">人として</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>
      <main className="flex flex-col items-center space-y-4 p-4 bg-gray-300 dark:bg-gray-800">
        <AboutMe />
        <Project />
        <Certification />
      </main>
      <footer className="bg-gray-500 dark:bg-gray-900">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          © 2024 shu-kitamura
        </p>
      </footer>
    </div>
  );
}
