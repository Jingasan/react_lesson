# 00_hello_world

## インストール方法

１．VSCode, node.js(v16.14.0), npm(8.3.1), git をインストールしておく。

２．VSCode でターミナルを開く。

３．本リポジトリをクローンする。

```
git clone https://github.com/Jingasan/react_lesson.git
```

４．依存パッケージをインストールする。

```
cd react_lesson/00_hello_world
npm install
```

## 動作確認方法

１．デバッグサーバーを起動する。

```
npm start
```

２．ブラウザで以下の URL を開く。

```
http://localhost:3000
```

## デプロイ方法

１．プロジェクトをビルドする。

```
npm run build
```

２．build ディレクトリ内のファイルを本番用サーバーにデプロイする。
