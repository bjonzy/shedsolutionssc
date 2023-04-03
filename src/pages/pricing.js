import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons"
import "animate.css/animate.min.css"

import aframe1 from "../../public/images/shed-aframe-1.jpg"
import aframe2 from "../../public/images/shed-aframe-2.jpg"
import aframe3 from "../../public/images/shed-aframe-3.jpg"
import aframe4 from "../../public/images/shed-aframe-4.jpg"
import aframe5 from "../../public/images/shed-aframe-5.jpg"
import aframe6 from "../../public/images/shed-aframe-6.jpg"

import barn1 from "../../public/images/shed-barn-1.jpg"
import barn2 from "../../public/images/shed-barn-2.jpg"
import barn3 from "../../public/images/shed-barn-3.jpg"

import { pricingData } from "../../public/data"

export default function Pricing(props) {
    const generateTable = (table, header) => {
        const generateTableRows = () => (
            pricingData[table].map((data, index) => (
                <div key={`table-${table}-row-${index}`} className="table-row">
                    <div className="table-row-content">${data.size}</div>
                    <div className="table-row-content">${data.smartsideTotal}</div>
                    <div className="table-row-content">${data.smartside60Month}</div>
                    <div className="table-row-content">${data.smartside48Month}</div>
                    <div className="table-row-content">${data.vinylTotal}</div>
                    <div className="table-row-content">${data.vinyl60Month}</div>
                    <div className="table-row-content">${data.vinyl48Month}</div>
                </div>
            ))
        )

        return (
            <div className="table-wrapper" id={table}>
                <div className="table-header">
                    <h2>{header}</h2>
                </div>

                <div className="table-columns">
                    <div className="table-column">Size</div>
                    <div className="table-column">Smartside</div>
                    <div className="table-column">60 Month</div>
                    <div className="table-column">48 Month</div>
                    <div className="table-column">Vinyl</div>
                    <div className="table-column">60 Month</div>
                    <div className="table-column">48 Month</div>
                </div>

                <div className="table-rows">
                    {generateTableRows()}
                </div>
            </div>
        )
    }

    const generateCarousel = (key, images) => {
        const [imageIndex, setImageIndex] = useState(0)

        const generateCarouselImageLockerImages = () => (
            images.map((image, index) => (
                <div key={`carousel-${key}-image-${index}`} className="locker-image">
                    <Image src={image} alt="shed" />
                </div>
            ))
        )

        const generateCarouselSelectionOptions = () => (
            images.map((_, index) => (
                <div 
                    key={`carousel-${key}-selection-${index}`}
                    className={index === imageIndex ? "carousel-selection-option-active" : "carousel-selection-option"}
                    onClick={() => setImageIndex(index)}
                >
                    <FontAwesomeIcon icon={faCircle} />
                </div>
            ))
        )
        
        return (
            <div className="carousel-wrapper">
                <div className="carousel-top">
                    <div 
                        className="carousel-nav" 
                        onClick={() => setImageIndex(imageIndex > 0 ? imageIndex - 1 : images.length - 1)}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>

                    <div className="carousel-image">
                        <div 
                            className="carousel-image-locker"
                            style={{ transform: `translateX(calc(-93vh * ${imageIndex}))` }}
                        >
                            {generateCarouselImageLockerImages()}
                        </div>
                    </div>

                    <div 
                        className="carousel-nav" 
                        onClick={() => setImageIndex(imageIndex < images.length - 1 ? imageIndex + 1 : 0)}
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>

                <div className="carousel-bottom">
                    <div className="carousel-selection">
                        {generateCarouselSelectionOptions()}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='page-wrapper pricing-wrapper'>
            <div className="page-background">
                <div className="page-content animate__animated animate__fadeIn animate__fast">
                    <div className="content-block">
                        <h1>Sizing & Pricing</h1>

                        <hr />

                        <p>Please check our price listing below then read up on the construction, custom pricing and specials below the pricing table. Please Call Us <strong>(864)-565-1425</strong> for a quote on custom garage or shed that has other features not listed below in the standard construction details. We accept payments in cash, check, credit/debit cards, or money order.</p>
                    </div>

                    {generateTable("aframe", "A-Frame")}

                    {generateCarousel("aframe", [aframe1, aframe2, aframe3, aframe4, aframe5, aframe6])}

                    {generateTable("barn", "Barn")}

                    {generateCarousel("barn", [barn1, barn2, barn3])}

                    <div className="content-block">
                        <h2>Options</h2>
                        <span>Windows: $125 ea</span>
                        <span>Extra Barn Door: $200 ea</span>
                        <span>Canister/Garage Door: Per Spec.</span>
                        <span>Rake/Gable Overhang: $200 (Per Gable End)</span>
                        <span>P/T Ramps: $150-$350</span>
                        <span>Steel “man” Door: $250 no glass, $325 w/glass</span>
                        <br />
                        <span>NEW!!: Aluminum ramp systems: $250 – $490 depending on length, width, and weight capacity.</span>
                    </div>

                    <div className="content-block">
                        <h2>What Is Included</h2>

                        <p>All sheds are built on 6X6 pressure treated skids, one double barn door of any width, 5/12 “A” style roof, 30 year three tab asphalt or architectural shingles. Gambrel roofs, salt box roofs are also available. Please note that we build on site for locations where access is difficult or for sheds over 12 X 20 in size. On site construction where no power is available will incur an additional $75.00 charge for generator usage.</p>
                    </div>

                    <div className="content-block">
                        <h2>Used Sheds and Special Deals</h2>

                        <p>We usually have available very inexpensive storage buildings which are either slightly used or are older inventory. These are sometimes sold for less than half their normal retail value. We truly have a shed for every budget!</p>
                    </div>

                    <div className="content-block">
                        <h2>Garage and Barn Pricing</h2>

                        <p>We offer turn key packages which include everything except any necessary grading. You can customize your garage or barn by selecting framing materials, roof styles, shingles, siding options, windows, doors, and trim colors. All garages are priced based upon material selections, size, location, and time of year. Please call for pricing.</p>
                    </div>

                    <div className="content-block">
                        <h2>Delivery</h2>

                        <p>We delivery anywhere in South Carolina. Delivery is free within 50 miles of Easley, SC. However, there may be additional cost for long distances and/or difficult locations. Any permits required are not included in the above prices and are the responsibility of the customer.</p>

                        <h2>(864)-565-1425</h2>

                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}