"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skill", label: "Skill" },
  { href: "#projects", label: "Projects" },
  { href: "#career", label: "Career" },
];

type HeaderProps = {
  containerClass: string;
};

export function Header({ containerClass }: HeaderProps) {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="py-3 sticky top-0 z-50 bg-white/95 backdrop-blur dark:bg-slate-900/60">
      <div className={containerClass}>
        <nav className="flex items-center justify-end sm:justify-between">
          <div className="hidden sm:block text-lg font-black uppercase tracking-[0.28em] text-slate-900 dark:text-slate-50">
            shu-kitamura
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative inline-flex items-center after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-orange-400 after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">change theme</span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
