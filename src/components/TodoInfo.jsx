import React from "react";

export default function TodoInfo({ todos }) {
  return (
    <div className="p-3 flex justify-between bg-white shadow rounded-md capitalize font-semibold text-gray-600">
      <p>all : {todos.all}</p>
      <p>going : {todos.going}</p>
      <p>done : {todos.done}</p>
    </div>
  );
}
