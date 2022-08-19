import React, { useState, useEffect, useRef } from 'react'

const ImgSlider = () => {
    const image = ["https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80", "https://blog.hubspot.com/hubfs/image10.jpg", "https://images.unsplash.com/photo-1525119257764-35ca8b725677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFnbmlmeXxlbnwwfHwwfHw%3D&w=1000&q=80", "https://images.unsplash.com/photo-1605270854320-07767ebafa10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"]
    const delay = 4000
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === image.length - 1 ? 0 : prevIndex + 1), delay)
        return () => { resetTimeout() }
    }, [index]);

    return (
        <>
            <div className="slideshow">
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {image.map((img, index) => (
                        <img className="slide" key={index} src={img} />
                    ))}
                </div>

                <div className="slideshowDots">
                    {image.map((_, idx) => (
                        <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => { setIndex(idx) }}></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ImgSlider
