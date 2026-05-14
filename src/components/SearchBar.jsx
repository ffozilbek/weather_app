import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchBar = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const trimmed = input.trim();
    if (!trimmed) return;

    setCity(trimmed);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="flex items-center bg-white shadow-sm/10 rounded-lg hover:shadow-lg/10 relative transition-shadow duration-75 ease-in">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-15 outline-0 px-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Search className="h-15 mr-5 cursor-text group-focus-within:text-gray-400" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
