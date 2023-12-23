import Link from "next/link";
import React from "react";
import GithubButton from "./GithubButton";
import Image from "next/image";
export default function Projects() {
  return (
    <section className="">
      <h2 className="text-3xl text-center font-bold">My Projects</h2>

      <div className="flex flex-wrap justify-center gap-8 mt-10 mx-8">
        <div className="w-[530px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
          <Image
            src="/pethub.png"
            width={500}
            height={20}
            className="rounded-lg mt-5 mb-10"
          />
          <div className="bg-yellow-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">
            In Progress
          </div>
          <h1 className="font-bold">Pethub</h1>
          <p className="font-[300]">
            A final year project that is a general pet service web app where
            users can make appointments to different pet services, check out pet
            related news topics and have discussions in our pet forums.
          </p>

          <Link href="https://github.com/Tharshen2124/Restaurant-api">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Website
            </div>
          </Link>
        </div>

        <div className="w-[530px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
          <Image
            src="/hacktrackmmu.png"
            width={600}
            height={20}
            className="rounded-lg mt-5 mb-10"
          />
          <div className="bg-yellow-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">
            In Progress
          </div>
          <h1 className="font-bold">Hacktrack MMU</h1>
          <p className="font-[300]">
            A website where we in Hackerspace manage our members details and
            store their IdeaTalks and ProgressTalks relating to the projects
            they have worked on.
          </p>
          <Link href="https://github.com/Tharshen2124/Restaurant-frontend">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Frontend Repository
            </div>
          </Link>
          <Link href="https://github.com/Tharshen2124/Restaurant-api">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Backend Repository
            </div>
          </Link>
        </div>

        <div className="w-[530px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
          <Image
            src="/restaurant.png"
            width={600}
            height={20}
            className="rounded-lg mt-5 mb-10"
          />
          <div className="bg-yellow-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">
            In Progress
          </div>
          <h1 className="font-bold">Restaurant Order Website</h1>
          <p className="font-[300]">
            A website where we manage our members details and store their
            IdeaTalks and ProgressTalks for each meetup which is relating to the
            projects they have worked on.
          </p>
          <Link href="https://github.com/Tharshen2124/Restaurant-frontend">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Frontend Repository
            </div>
          </Link>
          <Link href="https://github.com/Tharshen2124/Restaurant-api">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Backend Repository
            </div>
          </Link>
        </div>

        <div className="w-[530px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
          <Image
            src="/todoList.png"
            width={600}
            height={20}
            className="rounded-lg mt-5 mb-10"
          />
          <div className="bg-green-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">
            Completed
          </div>
          <h1 className="font-bold">To-do List Website</h1>
          <p className="font-[300]">
            Users can input a task and set a date when they would like to
            complete it which is either today or tomorrow. Users can also check
            the task as completed as well as edit and delete the task.
          </p>
          <Link href="https://github.com/Tharshen2124/quiz-app">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Repository Link
            </div>
          </Link>
        </div>

        <div className="w-[530px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
          <div className="bg-green-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">
            Completed
          </div>
          <h1 className="font-bold">File Sorter</h1>
          <p className="font-[300]">
            A simple script i made that sorts the files you have in your files
            explorer and places them into their respective extension named
            folders
          </p>
          <Link href="https://github.com/Tharshen2124/File-sorter">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Repository Link
            </div>
          </Link>
        </div>
      </div>

      <GithubButton />
    </section>
  );
}
