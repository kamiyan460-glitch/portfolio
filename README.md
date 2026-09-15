# かみりゅうのポートフォリオ

サイト本体は `dist/index.html`。追加ライブラリ不要のHTML・CSS・JavaScriptです。

## 内容
- 公開名：かみりゅう
- 公開メール・フォーム受信先：kamiyan460@gmail.com
- デザイン：素材フォルダの白・青・番号付きタブを参考に制作
- プロフィール画像：本人指定のJPGをコピーして使用
- 制作事例の図は説明用に作成したもの。実画面のスクリーンショットではありません。

## 問い合わせフォーム
FormSubmitの通常POST送信を使用。入力チェックと同意チェック、迷惑送信対策のハニーポット、サービス標準のreCAPTCHAを利用します。サーバーもアカウント登録も不要で、静的サイトのままGitHub Pagesで動きます。

送信が成功すると `dist/thanks.html` に戻ります。戻り先は `_next` という隠し入力で指定しますが、公開先のURLをファイルに書き込まずに済むよう、`dist/script.js` が表示中のURLから組み立てて入れています。JavaScriptが無効な場合はFormSubmit標準の確認画面が表示されます。

公式説明：https://formsubmit.co/

### 公開後にやること（未実施）
1. フォームから自分で一度テスト送信する
2. `kamiyan460@gmail.com` に届くFormSubmitの確認メールのリンクを押して有効化する
3. 改めて送信し、受信・返信先が正しいこと、`thanks.html` に戻ることを確認する

有効化するまで送信しても届きません。ファイルを直接開く方式（`file://`）では動かないため、HTTP(S)で表示して利用してください。

### 有効化後に差し替える（未実施）
現状は `dist/index.html` の `form action` にメールアドレスがそのまま入っており、HTMLのソースから読めます。迷惑メールの収集対象になるため、有効化時にFormSubmitから発行されるランダムな文字列（エイリアス）に差し替えてください。

```
変更前：<form action="https://formsubmit.co/kamiyan460@gmail.com" method="POST">
変更後：<form action="https://formsubmit.co/ランダムな文字列" method="POST">
```

なお `dist/index.html` の `mailto:` リンクと `dist/script.js` のコピー機能は、来訪者に見せるための記載なのでそのままにします。

メールリンクは端末のメールアプリを開きます。メールアカウント自体を新規作成したものではありません。

## 更新
本文はdist/index.html、送信完了ページはdist/thanks.html、見た目はdist/style.css、ナビゲーションとコピー操作と戻り先の設定はdist/script.jsを編集してください。
公開する場合はdistフォルダの中身のみをアップロードし、素材や作業用の記録は含めないでください。

## 公開
GitHub Pagesで公開します。`main` ブランチにpushすると `.github/workflows/pages.yml` が動き、**`dist/` の中身だけ**がサイトとして公開されます。`素材/` とプレビュー画像は `.gitignore` で除外してあるため、リポジトリにも公開サイトにも含まれません（Dropboxには残ります）。

GitHub側で一度だけ、Settings → Pages → Source を **GitHub Actions** に設定する必要があります。

### 残っている作業
- GitHubにリポジトリを作り、リモートとして登録してpushする
- Settings → Pages の Source を GitHub Actions にする
- 公開後、フォームの有効化とエイリアス差し替え（上記「問い合わせフォーム」参照）

## 内容の根拠
- 第2の脳/日記/2026-08-30.md：出品準備の仕組み
- ブログ/入稿/CLAUDE.md：WordPressへの下書き入稿・検査
- original-tool/README.md：動画要約・LINE配信とローカル運用
- 第2の脳/CLAUDE.md：人物像・発信方針

売上、受託実績、削減時間、対応年数などの未確認の数値は掲載していません。
