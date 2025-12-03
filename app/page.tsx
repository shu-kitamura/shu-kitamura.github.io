"use client"

import { useState } from "react";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";

import Image from "next/image";

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import AboutMe from "@/app/components/aboutMe"
import Activity from "@/app/components/activity";
import Certification from "@/app/components/certification";
import Creative from "@/app/components/creative";
import Project from "@/app/components/project";
import Hero from "@/app/components/hero";
import Test from "@/app/components/test";

export default function Home() {
  const { setTheme } = useTheme()
  const { theme } = useTheme()
  const [tabValue, setTabValue] = useState<"tech" | "life">("tech");
  return (
    <>
      <header className="flex flex-col items-center">
        <div className="w-full sm:w-1/2">
            <Button variant="ghost" size="icon" onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark")
            }}>
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
      </header>
      <main className="flex flex-col items-center space-y-4 p-4">
        <Hero />
        <Test />
        {tabValue === "tech" ? (
          <>
            <AboutMe variant={tabValue} />
            <Project />
            <Certification />
          </>
        ) : (
          <>
            <AboutMe variant={tabValue} />
            <Activity />
            <Creative />
          </>          
        )}
      </main>
      <footer>
        <p className="text-center text-sm text-zinc-900 dark:text-zinc-400">
          © 2024 shu-kitamura
        </p>
      </footer>
    </>
  );
}
