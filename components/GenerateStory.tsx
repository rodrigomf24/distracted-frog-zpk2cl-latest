"use client";

import { useState } from "react";
import { Flame } from "./Flame";

export const GenerateStory = () => {
  const [text, setText] = useState("");

  const handleFormSubmit = async () => {
    const result = await fetch("/api/generate-story", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await result.json();

    console.log(data);
  };

  return (
    <>
      <div className="flex flex-row w-full relative">
        <Flame />
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Welcome lurker
        </h2>
      </div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
        className="w-full"
      >
        <div className="col-span-full">
          <label className="block text-sm font-semibold leading-6 text-white">
            Unleash Your Imagination: Write a Story That Takes Us on an
            Adventure!
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          {/* <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button> */}
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Generate
          </button>
        </div>
      </form>
    </>
  );
};
