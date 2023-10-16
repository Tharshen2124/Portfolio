import Link from 'next/link'
import React from 'react'

export default function Projects() {
  return (
    <section className="">
        <h2 className="text-3xl text-center font-bold">My Projects</h2>

        <div className="flex flex-wrap justify-center gap-8 mt-10 mx-8">
            <div className="w-[500px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
            <div className="bg-yellow-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">In Progress</div>
                <h1 className="font-bold">Restaurant Website</h1>
                <p className="font-[300]">A website where a customer can add foods to their order and then checkout once they have confirmed their order items</p>
            </div>
            <div className="w-[500px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
            <div className="bg-yellow-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">In Progress</div>
                <h1 className="font-bold">RL Analyst</h1>
                <p className="font-[300]">This website shows rocket league related statistics that is fetched from a Rocket League API</p>
            </div>
            <div className="w-[500px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
            <div className="bg-yellow-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">In Progress</div>
                <h1 className="font-bold">Quiz Web App</h1>
                <p className="font-[300]">A simple quiz game i made that fetches data from the Open Trivia API. It will show after each question the correct answer and at the end of the quiz, it shows your score</p>
            </div>
            <div className="w-[500px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
            <div className="bg-green-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">Completed</div>
                <h1 className="font-bold">File Sorter</h1>
                <p className="font-[300]">A simple script i made that sorts the files you have in your files explorer and places them into their respective extension named folders</p>
            </div>
        </div>
        <h4 className="text-lg text-center mt-10 mb-5">See all my projects/repos on my Github!</h4>
        <Link href="https://github.com/Tharshen2124">
            <div class="mx-auto  flex items-center justify-center py-3 rounded-lg tablet:w-[180px] phone:w-[150px] text-black bg-white hover:bg-[#e0e0e0] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github mr-2" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Github
            </div>
        </Link>
    </section>
  )
}
