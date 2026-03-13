import React from "react";
export default function Card({ title, content }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  );
}