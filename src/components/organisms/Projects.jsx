import React from 'react'

export default function Projects() {
  return (
    <section className="">
        <h2 className=" text-3xl text-center">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="w-[500px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="bg-yellow-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">In Progress</div>
                <h1 className="font-bold">Restaurant Website</h1>
                <p className="font-[300]">A website where a customer can add foods to their order and then checkout once they have confirmed their order items</p>
            </div>
            <div className="w-[500px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="bg-yellow-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">In Progress</div>
                <h1 className="font-bold">RL Analyst</h1>
                <p className="font-[300]">This website shows rocket league related statistics that is fetched from a Rocket League API</p>
            </div>
            <div className="w-[500px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="bg-yellow-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">In Progress</div>
                <h1 className="font-bold">Quiz Web App</h1>
                <p className="font-[300]">A simple quiz game i made that fetches data from the Open Trivia API. It will show after each question the correct answer and at the end of the quiz, it shows your score</p>
            </div>
            <div className="w-[500px] py-5 px-10 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="bg-green-500 text-black font-bold text-sm rounded-xl w-24 text-center py-1 my-2">Completed</div>
                <h1 className="font-bold">File Sorter</h1>
                <p className="font-[300]">A simple script i made that sorts the files you have in your files explorer and places them into their respective extension named folders</p>
            </div>
        </div>
    </section>
  )
}
