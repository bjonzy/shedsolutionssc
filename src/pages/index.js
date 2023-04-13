import Image from 'next/image'
import Link from 'next/link';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css"

import shed1 from "../../public/images/shed-aframe-2.jpg"
import shed2 from "../../public/images/shed-aframe-3.jpg"
import shed3 from "../../public/images/shed-barn-1.jpg"
import shed4 from "../../public/images/shed-aframe-1.jpg"
import shed5 from "../../public/images/garage-aframe-1.jpg"
import shed6 from "../../public/images/shed-barn-3.jpg"

export default function Home() {
  const animationConfig = {
    animateOnce: true,
    offset: 150,
    duration: .2,
    animateIn: "animate__fadeInUp"
  }

  return (
    <div className="home-wrapper">
      <div className="page-content">
        <div className="content-block-with-image">
          <Image src={shed1} alt="shed" priority />

            <div className="content">
              <div className="text-content animate__animated animate__fadeIn animate__faster">
                <h1>Custom Built Sheds & Garages In South Carolina</h1>
                <p>Shed Solutions will work with you to design and build exactly what you want. We build everything from tiny chicken coops to sheds, barns and small garages. If you can dream it, we can build it! Just pick the size, style, shingle color, windows, doors, etc. and we will get to building it.</p>
                <h3>(864)-565-1425</h3>
                <h1>Built On Site or FREE Delivery</h1>
                <p>Easley, SC, 29640</p>
              </div>
            </div>
        </div>

        <AnimationOnScroll {...animationConfig} className="content-block">
          <h1>In House Financing</h1>
          <p>Don't pay expensive rent to own fees!!! Use our easy in house financing with payments as low as $25.00 per month and zero interest. Our pricing is substantially less than any of our competition's. In fact, if you can find a lower price anywhere, we will beat it!</p>
          <h1>(864)-565-1425</h1>
          <Link href="/financing"><button className='light'>Read More</button></Link>
        </AnimationOnScroll>

        <div className="content-block-with-image">
          <Image src={shed2} alt="shed" />

          <div className="content">
            <AnimationOnScroll {...animationConfig} className="text-content">
              <h1>Quality Constructtion</h1>
              <p>Our skilled craftsmen use high grade materials to construct our buildings to the highest standards. We also guarantee that your building will be code compliant with your municipality. With proper maintenance, your building will last for years to come.</p>
            </AnimationOnScroll>
          </div>
        </div>

        <AnimationOnScroll {...animationConfig} className="content-block">
          <h1>Easy & Affordable Payments</h1>
          <p>Most of our competitors do not finance their buildings, and the few that do charge exorbitant "rent to own" fees. All of these types of contracts have you paying much more for the building than you should. Our financing has very fair interest rates, low monthly payments, and affordable down payments. We do not check credit or income and will work with you to set up a payment that works for your budget.</p>
        </AnimationOnScroll>

        <div className="content-block-with-image">
          <Image src={shed3} alt="shed" />

          <div className="content">
            <AnimationOnScroll {...animationConfig} className="text-content">
              <h1>Quick Turnaround</h1>
              <p>We pride ourselves in getting you the building you want, when you want it. Our craftsmen are fast and efficient. Most of our customers are amazed at how quickly our buildings go up. Most standard sheds can be stick built from start to finish in one day!</p>
              <h1>(864)-565-1425</h1>
            </AnimationOnScroll>
          </div>
        </div>

        <AnimationOnScroll {...animationConfig} className="content-block">
          <h1>Our Work</h1>
          <div className="showcase-block-wrapper">
            <Link href="/pricing">
              <div className="showcase-block">
                <h2>Sheds</h2>
                <Image src={shed4} alt="shed"  />
              </div>
            </Link>

            <Link href="/pricing">
              <div className="showcase-block">
                <h2>Garages</h2>
                <Image src={shed5} alt="shed"  />
              </div>
            </Link>
          </div>
        </AnimationOnScroll>

        <div className="content-block-with-image">
          <Image src={shed6} alt="shed" />

          <div className="content">
            <AnimationOnScroll {...animationConfig} className="text-content">
              <h1>About Our Team</h1>
              <p>Not the least important in considering your purchase is the type of people you will be dealing with. In addition to having years of construction experience, all of the members of our company are friendly and courteous. Besides designing your building, we will also navigate the permit process and deal with any code compliance issues. We want your business and do not take our customers for granted. We do not take lightly the fact that you have given us your business. We will do everything we can to make sure that the purchase of your building will be both easy and enjoyable!</p>
              <Link href="/about"><button className='dark'>Read More</button></Link>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  )
}
