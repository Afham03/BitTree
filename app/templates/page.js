import React from "react";

const Templates = () => {
  return (
    <div className="min-h-screen bg-blue-600 px-10 py-40 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Choose a template. Make it yours.
      </h1>

      <p className="max-w-2xl mb-10 text-lg">
        Beautiful Linktree templates designed for creators, brands and businesses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white text-black p-6 rounded-xl">Creator</div>
        <div className="bg-white text-black p-6 rounded-xl">Business</div>
        <div className="bg-white text-black p-6 rounded-xl">Artist</div>
      </div>
    </div>
  );
}

export default Templates