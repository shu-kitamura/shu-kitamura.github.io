import Link from "next/link";

import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

type ServiceIconProps = {
  href: string;
  imagePathLight: string;
  imagePathDark: string;
  altText: string;
}

export default function ServiceIcon({ href, imagePathLight, imagePathDark, altText }: ServiceIconProps) {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href={href}>
        <Avatar className="w-5 h-5 rounded-none scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-100">
          <AvatarImage src={imagePathLight} alt={altText} />
          <AvatarFallback>{altText}</AvatarFallback>
        </Avatar>
        <Avatar className="w-5 h-5 rounded-none absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0">
          <AvatarImage src={imagePathDark} alt={altText} />
          <AvatarFallback>{altText}</AvatarFallback>
        </Avatar>
      </Link>
    </Button>
  );
}
