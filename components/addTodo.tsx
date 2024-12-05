import React from "react";

export default function AddTodo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-xl p-6 mx-auto rounded-lg shadow-lg border">
        <div className="mb-4">
          <input
            className="w-full px-4 py-3 text-lg text-black border rounded-lg"
            type="text"
            placeholder="Enter your todo"
          />
        </div>
        <button
          className="w-full px-4 py-2 bg-pink-500 hover:bg-pink-600"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
