import Title from "@/app/components/utils/title";
import Section from "@/app/components/utils/section";
import ServiceIcon from "@/app/components/utils/serviceIcon";

type AboutMeProps = {
  variant: "tech" | "life";
}

export default function AboutMe({ variant }: AboutMeProps) {
  const texts = {
    "tech": [
      "大阪出身、札幌在住。",
      "SIer 企業でサーバ開発・保守の業務をしています。",
      "CLIツールとバックエンドの開発が好きです。Rust, Pythonを使っています。",
      "最近はWebアプリ開発(Next.js, FastAPI)にも興味があります。",
    ],
    "life": [
      "大阪出身、札幌在住。",
      "お笑いが好きです。実家に帰ったときに見に行きます。",
      "よく行っていた祇園花月が閉館して悲しいです。",
      "ラーメン屋でバイトをしてました。焼き飯には自信があります。"
    ]
  }
  return (
    <Section sectionId="aboutMe-section" contents={
      <>
        <div className="flex items-center mb-2">
          <Title title="About Me" />
          <ServiceIcon
            href="https://github.com/shu-kitamura"
            size="5"
            imagePathLight="/logos/github/github-mark-light.svg"
            imagePathDark="/logos/github/github-mark-dark.svg"
            altText="GitHub icon"
          />
          <ServiceIcon
            href="https://x.com/prog_shu"
            size="5"
            imagePathLight="/logos/x/x-mark-light.svg"
            imagePathDark="/logos/x/x-mark-dark.svg"
            altText="X icon"
          />
          <ServiceIcon
            href="https://zenn.dev/shu_kitamura"
            size="5"
            imagePathLight="/logos/zenn/zenn-mark.svg"
            imagePathDark="/logos/zenn/zenn-mark.svg"
            altText="Zenn icon"
          />
        </div>
        <div className="flex flex-col items-start space-y-2 p-2">
          {texts[variant].map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </>
    } />
  );
}
