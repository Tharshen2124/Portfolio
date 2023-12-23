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
            <br />
            <br />
            Working on the API/backend for it.
          </p>

          <Link href="https://github.com/Tharshen2124/pethub-backend">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Backend Repository
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
            A website where we in Hackerspace MMU manage our members details and
            store their IdeaTalks and ProgressTalks relating to the projects
            they have worked on.
            <br />
            <br />
            Currently working on a new interface that uses the same backend as the previous one but modified into an API.
          </p>
          <Link href="https:hacktrackmmu.herokuapp.com">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Website
            </div>
          </Link>
          <p class="mt-3 text-red-500">Repositories can&#39;t be shown due to being under the Hackerspace MMU Organisation. Requires permission from higher ups.</p>
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
            A website where users can view and add menu items to their cart
            and then confirm their order to send it to the kitchen.
            <br />
            <br />
            Discovered a few bugs, fixing them currently.
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
            src="/heco.png"
            width={600}
            height={20}
            className="rounded-lg mt-5 mb-10"
          />
          <div className="bg-green-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">
            Completed
          </div>
          <h1 className="font-bold">Heco</h1>
          <p className="font-[300]">
          A web application that uses an alogrithm to recommend the best
          healthcare facility for users. Algorithm will take in different factors.
          Factors include distance, cost, rating and reviews. 
          Used a trained ML model to give a sentiment analysis of the reviews.
          <br />
          <br />
          Worked together with 3 other members to create this during a hackathon. 
          </p>
          <Link href="https://hecohealth.vercel.app">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Website
            </div>
          </Link>
          <Link href="https://github.com/Tharshen2124/Heco/">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Repository
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
          <Link href="https://github.com/Tharshen2124/To-do-List-website">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Repository
            </div>
          </Link>
        </div>

        <div className="w-[530px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
          <Image
            src="/numberguesser.png"
            width={600}
            height={20}
            className="rounded-lg mt-5 mb-10"
          />
          <div className="bg-green-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">
            Completed
          </div>
          <h1 className="font-bold">Number guesser game</h1>
          <p className="font-[300]">
            A game i made using some vanilla JavaScript with HTML and CSS. 
            You predict the give number that will be shown after you press the guess button. 
            The computer will also try to guess it. Whoever is the closest wins a point! 
          </p>
          <Link href="https://guesswhatsthenumber.netlify.app">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Website
            </div>
          </Link>
          <Link href="https://github.com/Tharshen2124/number-guesser-game">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Repository
            </div>
          </Link>
        </div>

        <div className="w-[530px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
          <Image
            src="/filesorter.png"
            width={600}
            height={20}
            className="rounded-lg mt-5 mb-10"
          />
          <div className="bg-green-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">
            Completed
          </div>
          <h1 className="font-bold">File Sorter</h1>
          <p className="font-[300]">
            A script i made that sorts the files you have in your files
            explorer and places them into their respective extension named
            folders
          </p>
          <Link href="https://github.com/Tharshen2124/File-sorter">
            <div className="transition text-blue-400 hover:text-blue-500 active:text-blue-600 underline mt-3">
              Repository
            </div>
          </Link>
        </div>
      </div>

      <GithubButton />
    </section>
  );
}
