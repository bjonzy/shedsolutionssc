import Head from "next/head"
import "animate.css/animate.min.css"

export default function Financing(props) {
    return (
        <div className='page-wrapper financing-wrapper'>
            <Head>
                <title>Shed Solutions SC</title>
                <meta name="description" content="Shed Solutions" />
                <meta name="keywords" content="Sheds, Shed, Barns, Barn, Garages, Garage, Construction, On-site, Delivery, Custom, Financing" />
            </Head>
            <div className="page-background">
                <div className="page-content animate__animated animate__fadeIn animate__fast">
                    <div className="content-block">
                        <h1>Financing</h1>

                        <hr />

                        <p>It has been our experience that there are many people people who want or need a storage building but do not have several thousand dollars available to pay cash for one. However, they could afford a small down payment and a few dollars a month. So, in order to accommodate these people we’ve developed a very simple and affordable financing program.</p>
                    </div>

                    <div className="content-block">
                        <h2>Rent to Own</h2>

                        <p>At Shed Solutions, we not only offer the best storage solutions for your needs, we offer the lowest financing plans to suit your budget! Our Rent-to-Own process is easy and affordable, with no credit check, and only a small down payment. With the lowest monthly payment around, anyone can own a Shed Solutions shed.</p>
                    </div>

                    <div className="content-block">
                        <h2>Regardless of Past Credit History</h2>

                        <p>We are willing to extend credit to anyone regardless of past credit history. Our financing is “in house” with no credit checks, employment verification, rent or mortgage verification, or any of the other hassles associated with borrowing money.</p>
                            
                        <p>Currently, we have the following 3 financing programs available:  A.  No down payment required for credit scores over 635.  B.  Rent to own up to 53 months with no credit check.  C.  In house installment program with 0% interest,  50% down, and no credit check.</p>
                            
                        <p>Our lending parameters are very simple and are as follow:</p>

                        <ol>
                            <li>Down payments must be paid at the time of completion of the building on site, or delivery.</li>
                            <li>Purchasers must sign an installment sales contract at the time of completion of the building on site, or delivery.</li>
                            <li>Storage sheds must be accessible to Shed Solutions, LLC at all times until paid in full</li>
                            <li>Financing contracts can be written on any building, subject to certain restrictions</li>
                            <li>Extra windows, sales tax, and delivery charges (if applicable) are not able to be financed.</li>
                        </ol>

                        <p>Once a shed is ordered, we immediately schedule it to be built. Upon completion or delivery of the building to your property, we will collect your down payment and schedule your first monthly payment to be due thirty days from delivery.</p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}