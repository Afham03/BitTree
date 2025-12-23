"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")

  
  const createTree = () => { 
    
    router.push(`/generate?handle=${text}`)
  }
  return (
    <main>
    <section className="bg-[#D2E821] sec1 min-h-screen grid grid-cols-2">
    <div className="flex justify-center flex-col ml-[5vw] gap-3">
      <h1 className="text-[#254F19] w-[35vw] font-black  text-7xl">A link in bio built for you.</h1>
      <p className="text-[#254F19] text-xl my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      <div className="input flex gap-2">
        <input value={text} onChange={(e)=> setText(e.target.value)} className="pr-15 pl-4 py-5 bg-[#FFFFFF] text-[#757575] min-w-3xs focus:outline-white-500 rounded-md" type="text" placeholder="linktr.ee/yourname" />
        <button onClick={()=> createTree()} className="bg-[#254F19] rounded-full px-16 py-5 text-white font-semibold">Get started for free</button>
      </div>
    </div>
    <div className="flex items-center justify-center flex-col mr-[10vw]">
      <Image
  src="/download.webp"
  alt="Profile"
  width={800}
  height={800}
  className="rounded-4xl mx-auto"
/>
    </div>
      </section>
      <section className="bg-[#2565D6] sec2 grid grid-cols-2 min-h-[92vh]">
        <div className="flex items-center justify-center flex-col mr-[10vw]">
          <video
  id="customize-your-linktree"
  autoPlay
  playsInline
  loop
  muted
  poster="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/692eb9b488731835c528bb18_capture_1764669836574.webp"
  style={{
    maxWidth: "100%",
    width: "100%",
    height: "auto",
    maxHeight: "100%",
    borderRadius: "1rem",
  }}
>
  <source
    src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"
    type="video/webm"
  />
  <source
    src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4"
    type="video/mp4"
  />
</video>

    </div>
        <div className="flex justify-center flex-col gap-3">
      <h2 className="text-[#D2E922] w-[44vw] font-bold font-weight-700 text-6xl">Create and customize your Linktree in minutes</h2>
      <p className="text-[#FFFFFF] w-3xl text-xl my-4">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
      <div className="input flex gap-2">
        <button onClick={()=> createTree()} className="bg-[#D2E821] rounded-full px-16 py-5 text-black font-semibold">Get started for free</button>
      </div>
    </div>
    </section>
    {/* <section className="bg-[#780016] sec3 grid grid-cols-2 min-h-[84vh]">
      <div className="flex justify-center flex-col ml-[5vw] gap-3">
      <h2 className="text-[#EAC1EA] font-bold font-weight-900 w-[60vw] text-7xl">Share your Linktree anywhere you like!</h2>
      <p className="text-[#FFFFFF] w-[45vw] text-xl my-4">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.</p>
      <div className="input flex gap-2">
        <button onClick={()=> createTree()} className="bg-[#EAC1EA] rounded-full px-16 py-5 text-[#070607] font-semibold">Get started for free</button>
      </div>
    </div>
    <div className="flex items-center justify-center flex-col mr-[10vw]">

    </div>
    </section> */}
    <section className="bg-[#E8EFD5] sec4 grid grid-cols-2 min-h-[96vh] gap-2">
       <div className="flex items-center justify-center flex-col">
        <Image
  src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/68b80693934ab0ccd4bf7482_home-section-4.avif"
  alt="Profile"
  width={659}
  height={666}
/>
    </div>
        <div className="flex justify-center flex-col gap-3">
      <h2 className="text-[#1E2330] w-[44vw] font-bold font-weight-700 text-6xl">Analyze your audience and keep them engaged</h2>
      <p className="text-[#1E2330] w-3xl text-xl font-medium my-4">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
      <div className="input flex gap-2">
        <button onClick={()=> createTree()} className="bg-[#E9C0E9] rounded-full px-16 py-5 text-[#000000] font-semibold">Get started for free</button>
      </div>
    </div>
    </section>
    </main>
  );
}
