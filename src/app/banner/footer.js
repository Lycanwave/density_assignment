import data from "./data";
import "./footer.css";
import logo from "../assets/dribbble-logo.svg";

// console.log(logo);
function Footer() {
    return (
        <div className="footer">
            <div className="footer_logo">
                <a href="/">
                    <img
                        style={{
                            color: "#ea518d",
                            width: "104px",
                            // filter: "invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)",
                            filter: "invert(46%) sepia(25%) saturate(6568%) hue-rotate(311deg) brightness(102%) contrast(83%)",
                        }}
                        src={logo.src}
                        alt=""
                    />
                </a>
                <div className="tagline">
                    Dribbble is the world’s leading community for creatives to
                    share, grow, and get hired.
                </div>
            </div>
            <div className="links_container">
                {data.map((data) => {
                    return (
                        <div className="links_column">
                            {data.map((items) => {
                                return (
                                    <>
                                        <div className="link-heading">
                                            {items.title}
                                        </div>

                                        {items.links.map((item) => {
                                            return (
                                                <div
                                                    className="link"
                                                    style={{
                                                        marginTop: "16px",
                                                    }}
                                                >
                                                    <a href={item.link}>
                                                        {item.name}
                                                    </a>
                                                </div>
                                            );
                                        })}
                                    </>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Footer;
