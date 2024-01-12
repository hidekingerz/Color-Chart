import { describe, Mock } from "vitest";
import { render, screen, userEvent } from "@src/lib/vitest/test-util.ts";
import SearchAppBar from "@src/feature/ColorChart/AppBar/index.tsx";

describe("AppBar test", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const mockOnInput: Mock = vi.fn();
  const mockOnReset: Mock = vi.fn();
  const inputValue = "";

  const setup = (onInputHandler: Mock, onResetHandler: Mock, inputValue: string) => {
    render(<SearchAppBar onInputHandler={onInputHandler} onResetHandler={onResetHandler} inputValue={inputValue} />);
  };

  describe("初期レンダリング", () => {
    it("Tamiya Colorsの文字が表示される", () => {
      setup(mockOnInput, mockOnReset, inputValue);
      expect(screen.getByText("Tamiya Colors")).toBeInTheDocument();
    });

    it("検索ボックスが表示される", () => {
      setup(mockOnInput, mockOnReset, inputValue);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
  });

  describe("検索ボックスのテスト", () => {
    it("検索ボックスが空文字の場合、リセットボタンが表示されない", () => {
      setup(mockOnInput, mockOnReset, inputValue);
      expect(screen.queryByRole("button")).toBeNull();
    });

    it("検索ボックスに文字を入力すると、onInputHandlerが入力文字数分実行される", async () => {
      setup(mockOnInput, mockOnReset, inputValue);
      const input = screen.getByRole("textbox");
      await userEvent.type(input, "11");
      expect(mockOnInput).toHaveBeenCalledTimes(2);
    });

    it("検索ボックスに文字が入力されている場合、リセットボタンが表示される", async () => {
      setup(mockOnInput, mockOnReset, "11");
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("検索ボックスに文字が入力されている場合、リセットボタンをクリックするとonResetHandlerが1回実行される", async () => {
      setup(mockOnInput, mockOnReset, "11");
      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(mockOnReset).toHaveBeenCalledTimes(1);
    });
  });
});
