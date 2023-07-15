import Link from "next/link"

const HomePage = () => {
  return(
    <div>
      <div>
        <p>Home Page</p>
        <Link className="text-blue-300 underline" href='/about'>About</Link>
        <br />
        <Link className="text-blue-300 underline" href='/about/team'>Team</Link>
      </div>
    </div>
  )
}

export default HomePage