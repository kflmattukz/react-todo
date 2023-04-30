import React from "react";

export default function TodoInfo({ todos }) {
  const { all, going, done } = todos;
  return (
    <div className="p-3 flex justify-between bg-white shadow rounded-md capitalize font-semibold text-gray-600">
      <p>all : {all}</p>
      <p>going : {going}</p>
      <p>done : {done}</p>
    </div>
  );
}
