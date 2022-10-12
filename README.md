## 環境構築手順

### Next.js プロジェクトの作成

```
yarn create next-app app --typescript
```

```
cd app
```

```
mkdir src
```

```
mv pages src
```

```
mv styles src
```

### .eslintrc.json を修正

```
{
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {}
}
```

### .prettierrc ファイルを作成

```
touch .prettierrc
```

```
{
  "printWidth": 120,
  "semi": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "useTabs": false
}
```

### Tailwind のインストール

```
npm install -D tailwindcss postcss autoprefixer
```

設定ファイルを作成

```
npx tailwindcss init -p
```

tailwind.config.js を編集

```
module.exports = {
  // --- content 追加 ---
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  // -------------------
  theme: {
    extend: {},
  },
  plugins: [],
};
```

src/styles/grobals.css を編集

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
