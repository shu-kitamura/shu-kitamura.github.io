import { CircleUserRound,} from "lucide-react"

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"

import Title from "@/components/main/utils/title";
import Section from "@/components/main/utils/section";

export default function Profile() {
  return (
    <Section sectionId="hero-section" contents={
      <div>
        <Title title="PROFILE" icon={<CircleUserRound className="w-10 h-10" />} />
        <div className="flex justify-center my-4">
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
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-extrabold mb-2">
            shu-kitamura
          </h2>
          <p>
            ネットワーク/インフラが得意です。
          </p>
          <p>
            Linux, PostgreSQL, Azure
          </p>
          <p>
            使用言語は主に Python, Rust
          </p>
        </div>
        <div className="flex justify-center my-2">
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
    } />
  );
}
