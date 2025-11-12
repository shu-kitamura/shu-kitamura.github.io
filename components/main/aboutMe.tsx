import Link from "next/link";

import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import Title from "@/components/main/utils/title";
import Section from "@/components/main/utils/section";

export default function AboutMe() {
  return (
    <Section sectionId="aboutMe-section" contents={
      <div>
        <div className="flex items-center mb-2">
          <Title title="About Me" />
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/shu-kitamura">
              <Avatar className="w-5 h-5 rounded-none scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100">
                <AvatarImage src="/logos/github/github-mark-light.svg" alt="GitHub icon" />
                <AvatarFallback>GitHub</AvatarFallback>
              </Avatar>
              <Avatar className="w-5 h-5 rounded-none absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0">
                <AvatarImage src="/logos/github/github-mark-dark.svg" alt="GitHub icon" />
                <AvatarFallback>GitHub</AvatarFallback>
              </Avatar>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://x.com/prog_shu">
              <Avatar className="w-5 h-5 rounded-none scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100">
                <AvatarImage src="/logos/x/x-mark-light.svg" alt="X icon" />
                <AvatarFallback>X</AvatarFallback>
              </Avatar>
              <Avatar className="w-5 h-5 rounded-none absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0">
                <AvatarImage src="/logos/x/x-mark-dark.svg" alt="X icon" />
                <AvatarFallback>X</AvatarFallback>
              </Avatar>
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="https://zenn.dev/shu_kitamura">
              <Avatar className="w-5 h-5 rounded-none">
                <AvatarImage src="/logos/zenn/zenn-mark.svg" alt="Zenn icon" />
                <AvatarFallback>Zenn</AvatarFallback>
              </Avatar>
            </Link>
          </Button>
        </div>
        <div className="flex flex-col items-start space-y-2 p-2">
          <p>
            大阪出身、札幌在住。
          </p>
          <p>
            SIer 企業でサーバ開発・保守の業務をしています。
          </p>
          <p>
            CLIツールとバックエンドの開発が好きです。Rust, Pythonを使っています。
          </p>
          <p>
            最近はWebアプリ開発(Next.js, FastAPI)にも興味があります。
          </p>
        </div>
      </div>
    } />
  );
}
