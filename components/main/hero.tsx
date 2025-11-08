import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"

export default function Hero() {
  return (
    <div className="w-full flex justify-center space-x-2 sm:space-x-10 my-5">
      <Label>
        <Image
          src="/icon-light.svg"
          alt="shu-kitamura icon"
          width={150}
          height={150}
          className="w-35 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100"
        />
        <Image
          src="/icon-dark.svg"
          alt="shu-kitamura icon"
          width={150}
          height={150}
          className="absolute w-35 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
      </Label>
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-4xl font-extrabold">
          shu-kitamura
        </h2>
        <div>
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
      </div>
    </div>
  );
}
