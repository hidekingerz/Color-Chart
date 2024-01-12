import { render, screen } from "@src/lib/vitest/test-util.ts";
import { App } from "./index.tsx";
import { describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

describe("App test", () => {
  it("Tamiya Colorsの文字が表示される", () => {
    render(<App />);
    expect(screen.getByText("Tamiya Colors")).toBeInTheDocument();
  });

  describe("各プレフィックスのチェックボックスが表示される", () => {
    it("Xのチェックボックスが表示される", () => {
      render(<App />);
      expect(screen.getByLabelText("X")).toBeInTheDocument();
    });
    it("XFのチェックボックスが表示される", () => {
      render(<App />);
      expect(screen.getByLabelText("XF")).toBeInTheDocument();
    });
    it("LPのチェックボックスが表示される", () => {
      render(<App />);
      expect(screen.getByLabelText("LP")).toBeInTheDocument();
    });
  });

  describe("各プレフィックスのチェックボックスがチェックされている", () => {
    it("Xのチェックボックスがチェックされている", () => {
      render(<App />);
      expect(screen.getByLabelText("X")).toBeChecked();
    });
    it("XFのチェックボックスがチェックされている", () => {
      render(<App />);
      expect(screen.getByLabelText("XF")).toBeChecked();
    });
    it("LPのチェックボックスがチェックされている", () => {
      render(<App />);
      expect(screen.getByLabelText("LP")).toBeChecked();
    });
  });

  describe("各プレフィックスのチェックボックスをクリックするとチェックが外れる", () => {
    it("Xのチェックボックスをクリックするとチェックが外れる", async () => {
      render(<App />);
      const checkbox = screen.getByLabelText("X");
      await userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
    it("XFのチェックボックスをクリックするとチェックが外れる", async () => {
      render(<App />);
      const checkbox = screen.getByLabelText("XF");
      await userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
    it("LPのチェックボックスをクリックするとチェックが外れる", async () => {
      render(<App />);
      const checkbox = screen.getByLabelText("LP");
      await userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe("各プレフィックスのチェックボックスをクリックするとチェックが付く", () => {
    it("Xのチェックボックスをクリックするとチェックが付く", async () => {
      render(<App />);
      const checkbox = screen.getByLabelText("X");
      await userEvent.click(checkbox);
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
    it("XFのチェックボックスをクリックするとチェックが付く", async () => {
      render(<App />);
      const checkbox = screen.getByLabelText("XF");
      await userEvent.click(checkbox);
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
    it("LPのチェックボックスをクリックするとチェックが付く", async () => {
      render(<App />);
      const checkbox = screen.getByLabelText("LP");
      await userEvent.click(checkbox);
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  });

  describe("チェックボックスを無効にすると対応するイメージが消える", () => {
    it("XのチェックボックスをクリックするとXのイメージが消える", async () => {
      render(<App />);
      const checkbox = screen.getByLabelText("X");
      await userEvent.click(checkbox);
      expect(screen.queryByText("X-11")).not.toBeInTheDocument();
    });
    it("XFのチェックボックスをクリックするとXFのイメージが消える", async () => {
      render(<App />);
      const checkbox = screen.getByLabelText("XF");
      await userEvent.click(checkbox);
      expect(screen.queryByText("XF-2")).not.toBeInTheDocument();
    });
    it("LPのチェックボックスをクリックするとLPのイメージが消える", async () => {
      render(<App />);
      const checkbox = screen.getByLabelText("LP");
      await userEvent.click(checkbox);
      expect(screen.queryByText("LP-3")).not.toBeInTheDocument();
    });
  });
});
