import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center h-screen ">
      <div className="flex justify-center items-center flex-wrap gap-8">
        <Image
          src="/me.jpg"
          alt="Tharshen"
          width={200}
          height={200}
          className="rounded-[1000px]"
        />
        <div className="" id="something" data-aos="fade-up">
          <div className="py-8 sm:w-[320px] lg:w-[420px] px-10 rounded-lg drop-shadow-lg  bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse phone:mx-5">
            <h1 className="font-[400] laptop:text-4xl tablet:text-2xl phone:text-lg sm:text-center laptop:text-left phone:text-center" >I&rsquo;m Tharshen</h1>
            <h3 className="mt-1 font-[300] laptop:text-left phone:text-center">Just a lifeless geek who loves programming</h3>
          </div>
        </div>
      </div>
    </header>
  )
}
