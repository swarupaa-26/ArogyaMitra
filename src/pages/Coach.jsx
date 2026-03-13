import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Coach() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  async function ask() {
    const res = await axios.get(`http://localhost:8000/coach/${msg}`);
    setReply(res.data.reply);
  }

  return (
    <div>
      <input
        className="border p-2 w-64"
        placeholder="Ask something..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button
        onClick={ask}
        className="bg-purple-600 text-white px-4 py-2 ml-2 rounded"
      >
        Send
      </button>
      <p className="bg-white p-4 mt-4 rounded shadow">
        <b>Coach:</b> {reply}
      </p>
    </div>
  );
}