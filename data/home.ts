import type { AboutCardInfo, CareerStep, ProjectInfo, SkillGroup } from "@/types/home";

export const aboutCards: AboutCardInfo[] = [
  {
    title: "経歴",
    body: "SIerです。少し前までHadoopのサポートをしていました。今はドライバの評価・サポートをしています。",
  },
  {
    title: "得意なこと",
    body: "Python・シェルスクリプトでの業務効率化・自動化。ネットワーク（TCP/IP, Ethernet）。",
  },
  {
    title: "興味",
    body: "Webアプリ開発。特にバックエンド。最近はNext.jsやFastAPIを触っています。学んだことは勉強会などでアウトプットしています。",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "言語",
    items: [
      { name: "Python", years: "4年", note: "業務自動化スクリプトに使用" },
      { name: "Rust", years: "1年", note: "OSS / 個人開発で使用" },
      { name: "Shell Script", years: "4年", note: "テスト・ログ収集自動化に使用" },
    ],
  },
  {
    category: "OS・ミドルウェア",
    items: [
      { name: "Apache Hadoop (Hive, HBase, Spark)", years: "4年", note: "業務でテクニカルサポートを実施" },
      { name: "Linux (RHEL, CentOS)", years: "4年", note: "Hadoopの基盤として使用" },
      { name: "PostgreSQL", years: "4年", note: "Hadoopシステムの内部で使用" },
    ],
  },
  {
    category: "資格",
    items: [
      { name: "基本・応用情報", years: "-", note: "情報処理技術者試験" },
      { name: "OSS-DB Silver・Gold", years: "-", note: "DB設計・運用知識" },
      { name: "LinuC Level 1–3", years: "-", note: "Linuxサーバ設計・運用" },
      { name: "AZ-104", years: "-", note: "Azure運用知識" },
      { name: "AWS Developer Associate", years: "-", note: "AWSサービス開発知識(あと少しで期限切れ)" },
    ],
  },
];

export const projects: ProjectInfo[] = [
  {
    title: "投票アプリ",
    type: "個人開発",
    description: "投票アプリ。結果をリアルタイムで更新し、みんなの意見をその場で見える化。イベントや会議で活用できます。",
    imgSrc: "/tohyo-communication.png",
    imgAlt: "投票アプリのアイコン",
    href: "https://vote.shu-kita.net",
  },
  {
    title: "正規表現エンジン",
    type: "個人開発",
    description: "VM型正規表現エンジンとそれを使用したコマンド。正規表現の仕組みを理解するために一から実装しました。",
    imgSrc: "/regex-engine.svg",
    imgAlt: "正規表現エンジンのアイコン",
    href: "https://github.com/shu-kitamura/regular-expression",
  },
  {
    title: "Sniffnet",
    type: "OSS",
    description: "Rust製のネットワークモニタリングツール。ARPパケットのモニタリング機能を実装。依存ライブラリ（etherparse）にLinux_SLLの解析機能を実装。",
    imgSrc: "/sniffnet.svg",
    imgAlt: "Sniffnet(ネットワークモニタリングツール)のアイコン",
    href: "https://github.com/GyulyVGC/sniffnet",
  },
  {
    title: "Fjall",
    type: "OSS",
    description: "Rust製のKVS。Conpaction, Flush の実行回数カウント機能を実装。",
    imgSrc: "/fjall.png",
    imgAlt: "Fjall(KVS)のアイコン",
    href: "https://github.com/fjall-rs/fjall",
  },
];

export const careers: CareerStep[] = [
  { period: "2021.04 – 2025.03", detail: "Cloudera製品サポート（ログ調査・再現テスト）" },
  { period: "2025.04 – 現在", detail: "VMware ESXi ドライバ評価（テスト自動化・効率化）" },
];
