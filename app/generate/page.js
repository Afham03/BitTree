// app/generate/page.js
import React from 'react';
import Link from 'next/link';
import GenerateClient from './GenerateClient';
import { Suspense } from 'react';

export default function GeneratePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
    <div className="bg-[#FFFFFF] flex w-full h-screen">
      <div className="col1 flex flex-1 justify-center text-gray-900">
        <div className="flex flex-col gap-5 my-8">
          <div className="mb-15">
            <Link href="/">
              <svg
                className="h-8"
                viewBox="0 0 1176 238"
                title="Linktree Logo"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="..."></path>
              </svg>
            </Link>
          </div>
          <h1 className="font-bold text-4xl">Create your Bittree</h1>

          {/* Client Component */}
          <GenerateClient />
        </div>
      </div>

      <div className="col2 bg-[#FFFFFF] flex-1">
        <img
          className="h-[962] w-[840]"
          src="https://linktr.ee/universal-login/assets/banner-login-desktop-D8selsDi.webp"
          alt="Generate your links"
        />
      </div>
    </div>
    </Suspense>
  );
}
