import Link from 'next/link'

const Navbar = () => (
    <div className="container">
        <Link href="/"><a>Home</a></Link> &nbsp; <Link href="/dapp"><a>Dapp</a></Link>
    </div>
)

export default Navbar
