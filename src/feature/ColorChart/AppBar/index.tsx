"use client";

import { ChangeEvent, JSX } from "react";

type SearchAppBarProps = {
  inputValue: string;
  onInputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onResetHandler: () => void;
};

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5L20.49 19l-5-4.99zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

/**
 * 検索用インプット付きのAppBarコンポーネント
 * @param {string} inputValue
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} onInputHandler
 * @param {() => void} onResetHandler
 * @returns {JSX.Element}
 */
export default function SearchAppBar({ inputValue, onInputHandler, onResetHandler }: SearchAppBarProps): JSX.Element {
  return (
    <header className="bg-[#1976d2] text-white shadow-md">
      <div className="flex min-h-16 items-center gap-2 px-4 py-2">
        <h1 className="hidden grow text-xl font-medium sm:block">Tamiya Colors</h1>
        <div className="relative w-full rounded bg-white/15 transition-colors hover:bg-white/25 sm:ml-2 sm:w-auto">
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search…"
            aria-label="search"
            value={inputValue}
            onChange={onInputHandler}
            className="w-full bg-transparent py-2 pl-12 pr-2 text-white placeholder-white/70 outline-none transition-[width] sm:w-[16ch] sm:focus:w-[24ch]"
          />
        </div>
        {inputValue !== "" && (
          <button
            type="button"
            onClick={onResetHandler}
            className="rounded px-3 py-1.5 text-sm font-medium uppercase text-white transition-colors hover:bg-white/10"
          >
            Reset
          </button>
        )}
      </div>
    </header>
  );
}
