import { describe } from "vitest";
import { screen, render } from "@src/lib/vitest/test-util.ts";
import { TamiyaColor } from "./index.tsx";

describe("TamiyaColorのテスト", () => {
  describe("単一データのテスト", () => {
    it("タイトルが表示されること", () => {
      // TamiyaColorコンポーネントをダミーデータを用いてレンダリングし、ImageListItemBarに指定のタイトルが表示されることを確認する
      const testData = [
        {
          colorCode: 1,
          name: "White",
          url: "https://www.tamiya.com/english/products/81501/img/81501_01.jpg",
        },
      ];
      render(<TamiyaColor prefix="X" colorList={testData} />);
      expect(screen.getByText("White")).toBeInTheDocument();
    });

    it("画像が表示されること", () => {
      // TamiyaColorコンポーネントをダミーデータを用いてレンダリングし、ImageListItemに指定の画像が表示されることを確認する
      const testData = [
        {
          colorCode: 2,
          name: "Red",
          url: "https://www.tamiya.com/english/products/81502/img/81502_01.jpg",
        },
      ];
      render(<TamiyaColor prefix="X" colorList={testData} />);
      const imageElement = screen.getByAltText("Red");
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", "https://www.tamiya.com/english/products/81502/img/81502_01.jpg");
    });
  });

  describe("複数データのテスト", () => {
    it("複数の画像が表示されること", () => {
      // TamiyaColorコンポーネントをダミーデータを用いてレンダリングし、複数のImageListItemに指定の画像が表示されることを確認する
      const testData = [
        {
          colorCode: 3,
          name: "Blue",
          url: "https://www.tamiya.com/english/products/81503/img/81503_01.jpg",
        },
        {
          colorCode: 4,
          name: "Yellow",
          url: "https://www.tamiya.com/english/products/81504/img/81504_01.jpg",
        },
      ];
      render(<TamiyaColor prefix="X" colorList={testData} />);
      const blueImageElement = screen.getByAltText("Blue");
      const yellowImageElement = screen.getByAltText("Yellow");
      expect(blueImageElement).toBeInTheDocument();
      expect(blueImageElement).toHaveAttribute("src", "https://www.tamiya.com/english/products/81503/img/81503_01.jpg");
      expect(yellowImageElement).toBeInTheDocument();
      expect(yellowImageElement).toHaveAttribute(
        "src",
        "https://www.tamiya.com/english/products/81504/img/81504_01.jpg",
      );
    });
  });

  describe("データが空の場合", () => {
    it("nothingと表示されること", () => {
      // TamiyaColorコンポーネントをダミーデータを用いてレンダリングし、nothingと表示されることを確認する
      render(<TamiyaColor prefix="X" colorList={[]} />);
      expect(screen.getByText("nothing")).toBeInTheDocument();
    });
  });
});
