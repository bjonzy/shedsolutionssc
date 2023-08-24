import Head from "next/head"
import "animate.css/animate.min.css"

export default function About(props) {
    return (
        <div className='page-wrapper about-wrapper'>
            <Head>
                <title>Shed Solutions SC</title>
                <meta name="description" content="Shed Solutions" />
                <meta name="keywords" content="Sheds, Shed, Barns, Barn, Garages, Garage, Construction, On-site, Delivery, Custom, Financing" />
            </Head>
            <div className="page-background">
                <div className="page-content animate__animated animate__fadeIn animate__fast">
                    <div className="content-block">
                        <h1>About Us</h1>

                        <hr />

                        <p>At Shed Solutions we build your garage or shed to your specifications. We have a variety of construction materials, colors, and sizes to fit any need. We will work with our customers to provide a quality product they like at a reasonable price. We also offer financing through us at a very competitive rate, with low monthly payments.</p>
                    </div>

                    <div className="content-block">
                        <h2>Located in Beautiful South Carolina</h2>

                        <span>607 Black Snake Rd.</span>
                        <span>Easley, SC, 29640</span>
                        <span><strong>(864)-565-1425</strong></span>

                        <p>ShedSolutions.sc@gmail.com</p>

                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}