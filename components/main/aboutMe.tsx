import Title from "@/components/main/utils/title";
import Section from "@/components/main/utils/section";

export default function AboutMe() {
  return (
    <Section sectionId="aboutMe-section" contents={
      <section>
        <Title title="About Me" />
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
      </section>
    } />
  );
}
