import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </ul>
    </nav>
  )
}

export default Nav;