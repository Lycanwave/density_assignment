import "./banner.css";
function Banner() {
    return (
        <div className="hero-media-asset">
            <video
                width="100%"
                // src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906"
                src="https://cdn.dribbble.com/userupload/3938332/file/original-984e9c8aa7bb40df5be856ec56201be1.mp4"
                autoPlay
                loop
                muted
                playsInline="playsinline"
            />
        </div>
    );
}

export default Banner;
