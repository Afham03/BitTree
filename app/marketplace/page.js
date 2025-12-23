import React from "react";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-pink-600 px-10 py-40">
      <h1 className="text-5xl font-bold mb-6">
        Discover apps & integrations
      </h1>

      <p className="max-w-2xl mb-10 text-lg">
        Connect Linktree with tools you already love.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white text-black p-5 rounded-xl shadow">Spotify</div>
        <div className="bg-white text-black p-5 rounded-xl shadow">YouTube</div>
        <div className="bg-white text-black p-5 rounded-xl shadow">PayPal</div>
        <div className="bg-white text-black p-5 rounded-xl shadow">Shopify</div>
      </div>
    </div>
  );
}

export default Marketplace