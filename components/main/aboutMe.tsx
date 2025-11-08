import { CircleUserRound, Info } from "lucide-react"

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

export default function AboutMe() {
  return (
    <Section sectionId="aboutMe-section" contents={
      <div>
        <Title title="ABOUT ME" icon={<Info className="w-10 h-10" />} />
        <div className="flex flex-col items-center">
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
      </div>
    } />
  );
}
