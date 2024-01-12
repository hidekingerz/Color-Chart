import { render, screen } from "@src/lib/vitest/test-util.ts";
import { App } from "./index.tsx";
import { describe } from "vitest";

describe("App test", () => {
  it("Tamiya Colorsの文字が表示される", () => {
    render(<App />);
    expect(screen.getByText("Tamiya Colors")).toBeInTheDocument();
  });

  describe("各プレフィックスのTamiyaImageFormが表示される", () => {
    it("XのTamiyaImageFormが表示される", () => {
      render(<App />);
      expect(screen.getByText("X")).toBeInTheDocument();
    });
    it("XFのTamiyaImageFormが表示される", () => {
      render(<App />);
      expect(screen.getByText("XF")).toBeInTheDocument();
    });
    it("LPのTamiyaImageFormが表示される", () => {
      render(<App />);
      expect(screen.getByText("LP")).toBeInTheDocument();
    });
  });
});
