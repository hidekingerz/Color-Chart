import { render, screen } from "./lib/vitest/test-util.ts";
import { App } from "./App.tsx";

describe("App test", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
  });
});
