import { describe } from "vitest";
import { TamiyaColorForm } from "@src/feature/ColorChart/TamiyaColorForm/index.tsx";
import { render, screen, userEvent } from "@src/lib/vitest/test-util.ts";

const testData = [
  {
    colorCode: 1,
    name: "White",
    url: "https://www.tamiya.com/english/products/81501/img/81501_01.jpg",
  },
];

describe("TamiyaColorFormのテスト", () => {
  describe("初期描画確認", () => {
    it("checkboxは有効状態である", () => {
      // TamiyaColorFormコンポーネントをレンダリングし、スイッチボタンが有効状態であることを確認する
      render(<TamiyaColorForm colorList={testData} label={"X"} />);
      const switchElement = screen.getByRole("checkbox");
      expect(switchElement).toBeEnabled();
    });

    it("TamiyaColorImageListが表示される", () => {
      // TamiyaColorFormコンポーネントをダミーデータを用いてレンダリングし、TamiyaColorImageListが表示されることを確認する
      render(<TamiyaColorForm colorList={testData} label={"X"} />);
      expect(screen.getByText("White")).toBeInTheDocument();
    });
  });

  describe("checkbox をオフにするとTamiyaColorImageListが非表示になる", () => {
    it("checkbox をオフにするとTamiyaColorImageListが非表示になる", async () => {
      // TamiyaColorFormコンポーネントをダミーデータを用いてレンダリングし、checkboxをオフにするとTamiyaColorImageListが非表示になることを確認する
      render(<TamiyaColorForm colorList={testData} label={"X"} />);
      const switchElement = screen.getByRole("checkbox");
      await userEvent.click(switchElement);
      expect(screen.queryByText("White")).not.toBeInTheDocument();
    });
  });
});
