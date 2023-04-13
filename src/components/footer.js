export default function Footer(props) {
    return (
        <div className="footer-switch">
            <div className='footer-wrapper'>
                Copyright © {(new Date()).getFullYear()} · Shed Solutions · (864)-565-1425
            </div>

            <div className="footer-wrapper-mobile">
                <span>Copyright © {(new Date()).getFullYear()}</span>
                <span>Shed Solutions · (864)-565-1425</span>
            </div>
        </div>
    )
}