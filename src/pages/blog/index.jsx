import Link from 'next/link'

export default function index() {
  return (
    <>
    <section className="laptop:mx-48">
        <h1 className="mt-10 text-4xl font-bold mb-5">Blog</h1>

        <Link href="/blog/why-i-love-hackerspacemmu">
            <div className="transition shadow-lg rounded-lg py-5 px-7 w-full bg-gradient-to-r from-gray-900 to-black">
                <h2 className="text-2xl">Why I love HackerspaceMMU</h2>
                <p className="mt-1 font-[300]">If you are a Hackerspace member, i highly suggest to give it a read hehe.</p>
            </div>
        </Link>
        
    </section>
    </>
  )
}
