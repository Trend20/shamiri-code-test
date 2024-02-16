"use client";
import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search locations..."
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-3 py-2 mt-3 mb-5"
      />
    </div>
  );
};

export default SearchBar;
