# TODO

## 自分で記載

- 色使いがなんかダサい
- tech/life の切り替えが本当に必要？  
  - レンダリングまでする意味はあるのか  
  - /tech, /life の静的ページでもいいのでは？とか

## Codex 記載

- next.config.ts / .github/workflows/nextjs.yml: GitHub Pages で ./out を配信する前提なのに output: "export" や images.unoptimized の指定がなく、next build しても out/ が出ない構成。静的エクスポートが通るように設定とワークフローを見直す。
- .github/workflows/nextjs.yml: CI がビルドのみで lint/test のゲートが無い。最低でも npm run lint を追加し、将来的にテストも入れたい。
- app/page.tsx: TabsContent を使わず値だけ変えているので「タブ」として ARIA 的に成立していない。表示内容も Tabs 配下に置くか、単なるトグル UI に置き換える。
- app/page.tsx: タブコンテナが w-[400px] 固定でモバイルではみ出す。レスポンシブに幅を調整する。
- app/page.tsx: useTheme を二重に呼びつつマウントチェック無しでトグルを描画しており、初期描画でチラつき/誤判定の恐れ。1 回の呼び出しにまとめて mounted ガードを入れる。
- app/page.tsx, components/main/*: ページ全体が client component 扱いになっており静的セクションまでバンドルされる。テーマ切替・タブだけを client に分離し、それ以外は server component に戻して軽量化したい。
- app/page.tsx, components/main/*: 背景やボーダーを bg-gray-*** などハードコードしており、globals.css のテーマトークンを活かせていない。light/dark の色ズレやコントラストを解消するためトークン化する。
- components/main/activity.tsx: ネストした ul が li の外に出ており HTML 構造が崩れている。li 内に入れ直す。
- components/main/aboutMe.tsx, activity.tsx, certification.tsx, creative.tsx: map の key に index を使っている。title/generation など安定キーに差し替える。
- components/main/project.tsx ほか: 外部リンクに target/rel が無く同一タブ遷移になる。別タブ + rel="noreferrer"（必要に応じ aria-label）で安全に開く。
- components/main/utils/topicCard.tsx, app/page.tsx: 見た目目的で Label コンポーネントを使っておりセマンティクスがずれている。span/div に置き換える。
- next/image 利用箇所（app/page.tsx のロゴ、activity.tsx/creative.tsx のカルーセル画像）に sizes/priority を設定し、static export 前提なら unoptimized も検討してレイアウトシフトや過剰ダウンロードを防ぐ。
- app/layout.tsx: metadata が title/description のみで OG/Twitter カードや metadataBase、構造化データが無い。SNS プレビューと SEO を整備する。
- app/ 配下: sitemap.ts と robots.txt が無い。公開サイトなので生成してクロール経路を明示する。
- 依存関係整理: accordion/dropdown-menu/hover-card/menubar/tw-animate-css など未使用ライブラリ・UI コンポーネントが残っている。削除してロックファイルとバンドルを軽くする。
- types/certification.d.ts: JSX.Element を import なしで参照しており、skipLibCheck を外すと落ちる懸念。import 追加 or .ts 化する。
- レイアウト幅: Section が sm:w-1/2 固定で大画面でも横幅が使えず余白だらけ。max-width と左右マージンを再設計する。
- テスト無し: ユニット/E2E/Storybook などが一切無い。最低限の UI スナップショットか e2e を導入して回帰検知したい。

## 改善方針  

- まずデプロイ土台を直す: `next.config.ts`に`output: "export"`と`images.unoptimized: true`を入れ、`nextjs.yml`を`npm run lint && next build`で`out/`を吐く形にする。
- タブ/テーマを整理: TabsContent配下にコンテンツを移すかトグルに置換し、`useTheme`は1回＋mountedガード。タブ幅は`w-full max-w-sm`などでモバイル対応。
- スタイルとレイアウトを再設計: `bg-gray-*`直書きをトークン化し、セクション幅を`max-w-4xl`前後＋`px-4`などで中央寄せ。カード/セクションの背景もトークンに寄せる。
- マークアップ修正: Activityの`ul`ネスト修正、`Label`誤用を`span/div`へ、`map`キーは安定キーに変更。外部リンクは`target="_blank" rel="noreferrer"`。
- 画像とパフォーマンス: `next/image`に`sizes`/必要なら`priority`を設定し、静的書き出し運用なら`unoptimized`を活用。
- SEO/公開準備: metadataにOG/Twitterカードを追加し、`sitemap.ts`と`robots.txt`を用意。タイトル/descriptionも適宜見直す。
- 依存・型の健全化: 未使用Radix/animate依存を削除し、`types/certification.d.ts`に`JSX`をimportまたは`.ts`化。`skipLibCheck`を前提にしない。
- 品質ゲート: CIにlintを常時入れ、余裕があればPlaywright/Cypressなどで1本でもe2eを追加して回帰検知の足場を作る。
