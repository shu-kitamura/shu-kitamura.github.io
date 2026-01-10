# TODO

## データ/構成

- `data/*.json` の型チェックを足す（`satisfies` を使うなら `data/*.ts` に戻す/もしくは `zod` 等でランタイム検証）
- `data/*.json` のキー名・命名（単数/複数、`project(s)` など）を統一する
- `README.md` にデータ更新手順（どのJSONを編集すればどこが変わるか）を書く

## ビルド/デプロイ

- `next/font/google` を使っている場合、オフライン/制限環境で `next build` が落ちるので対策する
  - 例: フォントを `public/` に置いて `next/font/local` に切り替える
  - 例: ビルド環境で外部アクセスを許可する/フォント取得をキャッシュする
- GitHub Actions 等で `npm ci` → `npm run lint` → `npx tsc --noEmit` → `npm run build` のCIを回す

## UI/コンテンツ

- Projects の並び替え・タグ付け（`type` を固定値にしてフィルタできるようにする）
- About/Career の文言を短くして読みやすくする（1カード/1文の粒度に整理）
- 画像（`imgSrc`）の最適化（サイズ統一、`next/image` の最適化設定確認）

## DX

- `npm run format`（Prettier 等）を導入するなら、既存のスタイルに合わせて最小差分で追加する
- `README.md` にローカル起動手順（Nodeバージョン、`npm run dev`）を追記する
