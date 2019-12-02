# Portfolio


# ソースの構成　（Project Structure）

dist/                        コンパイルされた静的ファイル　compiled static file
docs/                        プロジェクト説明とコーディング方法ベストプラクティスなど project docs, coding guides and best practice（開発中）
e2e/                         結合テスト end-to-end tests（開発中）
src/                         プロジェクトのソースコード　project source code
|- app/                      ルートコンポーネントapp components
|  |- core/                  コアモジュール（単機能サービスとコンポーネント） core module (singleton services and single-use components)
|  |- shared/                共有モジュール（共通のコンポーネント、ディレクティブ、パイプ「ボタンやスピンナー、フォーム入力項目」）　shared module  (common components, directives and pipes)
|  |- app.component.*        ルートコンポーネント（アプリシェル）app root component (shell)
|  |- app.module.ts          ルートモジュール app root module definition
|  |- app-routing.module.ts  アプリのルーティング app routing
|  +- ...                    追加のモジュールとコンポーネント additional modules and components
|- assets/                   アプリ資産（画像、フォント、サウンド...）app assets (images, fonts, sounds...)
|- environments/             さまざまなビルド環境（運用環境、開発環境、ステージング環境）の環境変数 environment variable for various build environments (production, developmnent, staging environment)
|- theme/                    アプリのグローバルscss変数とテーマ app global scss variables and theme
|- translations/             翻訳ファイル translations files
|- index.html                htmlエントリポイント html entry point
|- styles.scss               グローバルスタイルエントリポイント global style entry point
|- main.ts                   アプリエントリポイント app entry point
|- polyfills.ts              ブラウザ対応 Browser compatibility
+- test.ts                   単体テストエントリーポイント unit tests entry point
proxy.conf.js                corsの設定ファイル（今回のプロジェクトは不使用） backend cors configuration(not used in this project)
