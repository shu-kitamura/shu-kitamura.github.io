import Image from "next/image";

import { Label } from "@/components/ui/label"
import ServiceIcon from "@/components/main/utils/serviceIcon";

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
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          shu-kitamura
        </h1>
        <div className="flex space-x-2 sm:space-x-5">
          <ServiceIcon
            href="https://github.com/shu-kitamura"
            size={10}
            imagePathLight="/logos/github/github-mark-light.svg"
            imagePathDark="/logos/github/github-mark-dark.svg"
            altText="GitHub icon"
          />
          <ServiceIcon
            href="https://x.com/prog_shu"
            size={10}
            imagePathLight="/logos/x/x-mark-light.svg"
            imagePathDark="/logos/x/x-mark-dark.svg"
            altText="X icon"
          />
          <ServiceIcon
            href="https://zenn.dev/shu_kitamura"
            size={10}
            imagePathLight="/logos/zenn/zenn-mark.svg"
            imagePathDark="/logos/zenn/zenn-mark.svg"
            altText="Zenn icon"
          />
        </div>
      </div>
    </div>
  );
}