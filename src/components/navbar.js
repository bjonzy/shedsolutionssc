import Image from 'next/image'
import Link from 'next/link'

import logo from "../../public/images/logo-new.jpg"

export default function Navbar(props) {
    return (
        <div className="navbar-switch">
            <div className='navbar-wrapper'>
                <a href="/">
                    <Image src={logo} alt="logo" priority />
                </a>
                
                <div className="links-wrapper">
                    <Link href="/">Home</Link>
                    <Link href="/pricing">Sizing&nbsp;&&nbsp;Pricing</Link>
                    <Link href="/financing">Financing</Link>
                    <Link href="/about">About&nbsp;Us</Link>
                    <a target="blank" href="https://www.facebook.com/profile.php?id=100091247108647&mibextid=LQQJ4d">Facebook</a>
                </div>
            </div>

            <div className="navbar-wrapper-mobile">
                <Image src={logo} alt="logo" priority />
                
                <div className="links-wrapper">
                    <Link href="/">Home</Link>
                    <Link href="/pricing">Sizing&nbsp;&&nbsp;Pricing</Link>
                    <Link href="/financing">Financing</Link>
                    <Link href="/about">About&nbsp;Us</Link>
                    <a target="blank" href="https://www.facebook.com/profile.php?id=100091247108647&mibextid=LQQJ4d">Facebook</a>
                </div>
            </div>
        </div>
    )
}