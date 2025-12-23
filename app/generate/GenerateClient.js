"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GenerateClient = () => {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState(searchParams.get("handle") || "");
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((prevLinks) =>
      prevLinks.map((item, i) => (i === index ? { link, linktext } : item))
    );
  };

  const addLink = () => setLinks([...links, { link: "", linktext: "" }]);

  const submitLinks = async () => {
    try {
      const res = await fetch("/api/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ links, handle, pic, desc }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success(result.message);
        setLinks([{ link: "", linktext: "" }]);
        setHandle("");
        setPic("");
        setDesc("");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Failed to submit links");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="item">
        <h2 className="font-semibold text-2xl">Step 1: Claim your Handle</h2>
        <input
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          className="px-4 py-2 my-2 focus:outline-pink-500 rounded-full"
          type="text"
          placeholder="Choose a Handle"
        />
      </div>

      <div className="item">
        <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
        {links.map((item, index) => (
          <div key={index}>
            <input
              value={item.linktext}
              onChange={(e) => handleChange(index, item.link, e.target.value)}
              className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full"
              type="text"
              placeholder="Enter link text"
            />
            <input
              value={item.link}
              onChange={(e) => handleChange(index, e.target.value, item.linktext)}
              className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full"
              type="text"
              placeholder="Enter link"
            />
          </div>
        ))}
        <button
          onClick={addLink}
          className="p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl"
        >
          + Add Link
        </button>
      </div>

      <div className="item flex flex-col">
        <h2 className="font-semibold text-2xl">Step 3: Add Picture and Description</h2>
        <input
          value={pic}
          onChange={(e) => setPic(e.target.value)}
          className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full"
          type="text"
          placeholder="Enter link to your Picture"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full"
          type="text"
          placeholder="Enter description"
        />
        <button
          disabled={!pic || !handle || !links[0].linktext}
          onClick={submitLinks}
          className="disabled:bg-slate-500 p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl"
        >
          Create your BitTree
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default GenerateClient;