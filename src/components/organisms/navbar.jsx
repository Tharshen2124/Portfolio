import Link from 'next/link'

export default function Navbar() {
  return (
    <>
    <nav> 
        <ul class="flex mt-5 justify-end mx-10">
            <li className="text-lg transition mx-7 hover:text-[#c9c9c9] active:text-[#999999]"><Link href="">Home</Link></li>
            <li className="text-lg transition mx-7 hover:text-[#c9c9c9] active:text-[#999999]"><Link href="">About</Link></li>
            <li className="text-lg transition mx-7 hover:text-[#c9c9c9] active:text-[#999999]"><Link href="/blog">Blog</Link></li>
        </ul>
    </nav>
    </>
  )
}
