# Portfolio

## 目次　(Table of Contents)
- [Portfolio](#portfolio)
  - [目次　(Table of Contents)](#%e7%9b%ae%e6%ac%a1-table-of-contents)
  - [What is this?](#what-is-this)
  - [Live Demo](#live-demo)
  - [Project Structure](#project-structure)
  - [Features](#features)
  - [Requirements?](#requirements)
  - [Installation](#installation)
  - [Run Application and start development Server](#run-application-and-start-development-server)
  - [Run Tests](#run-tests)
  - [Build Application for Deployment](#build-application-for-deployment)

---

## What is this?
Angular 9 で作られた自分についての自己紹介のウェブアプリです。 (This small Angular9 application is a self intro web app of me.)

## Live Demo

Live Demoは[こちらから](https://master.d3phb5yfhxhh0o.amplifyapp.com/)

## Project Structure
ソースの構成は以下となります：
<pre>
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
</pre>

## Features
使用しているライブラリ
- Angular 8.2.14
- Angular Material 8.2.3

## Requirements?
- Node v10.16.3 ~

## Installation
パッケージインストール
```SH
$ npm install
```

## Run Application and start development Server
アプリ実行コマンド
```SH
$ npm start
```
起動したら``http://localhost:4200/``をブラウザーで開く

## Run Tests
 - ツール
   -  [jasmin](https://jasmine.github.io)
   -   [karma](https://karma-runner.github.io) 設定ファイル `karma.conf.js`.
- テストの実行コマンド：
```SH
$ npm test
```
## Build Application for Deployment
 デプロイビルド実行コマンド：
```SH
$ npm run build
```
デプロイビルド完了したら`dist/portfolio/`にコンパイルされたJS、CSSとHTMlファイルが格納される

