"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const process = () => {
    setLoading(true);
    try {
      // TODO: Implement formatter logic
      setOutput(input);
    } catch (e) {
      setOutput("Error: " + e.message);
    }
    setLoading(false);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    alert("Copied!");
  };

  const clear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-center text-white mb-2">
            YAML Formatter Validator
          </h1>
          <p className="text-center text-purple-200 mb-8">
            Free online yaml format validate tool
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-purple-200 font-medium">Input</label>
                <button onClick={clear} className="text-purple-300 hover:text-white text-sm">
                  Clear
                </button>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-64 p-4 bg-white/5 border border-white/10 rounded-xl text-white font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Enter your content here..."
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-purple-200 font-medium">Output</label>
                {output && (
                  <button onClick={copy} className="text-purple-300 hover:text-white text-sm">
                    Copy
                  </button>
                )}
              </div>
              <textarea
                value={output}
                readOnly
                className="w-full h-64 p-4 bg-white/5 border border-white/10 rounded-xl text-white font-mono text-sm resize-none"
              />
            </div>
          </div>

          <button
            onClick={process}
            disabled={loading || !input}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : "Process"}
          </button>
        </div>

        <div className="mt-8 text-center text-purple-300 text-sm">
          <p>Free Online Tool - No registration required</p>
          <p className="mt-1">2026 YAML Formatter Validator</p>
        </div>
      </div>
    </div>
  );
}