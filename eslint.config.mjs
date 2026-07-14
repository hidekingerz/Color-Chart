import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      // 静的エクスポート (output: "export") では next/image の画像最適化サーバーが使えないため <img> を許容する
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
