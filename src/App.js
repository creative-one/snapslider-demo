import './App.scss';
import SnapSlider, {DotsWithArrows} from "snapslider-react";
import {useRandomImages} from "./hooks";
import {useState} from "react";

function App() {
    const images = useRandomImages()
    const [parallax, setParallax] = useState(0)
    const [width, setWidth] = useState(window.width)
    const [active, setActive] = useState(1)

    return (
        <SnapSlider
            className={'style-1'}
            groupSize={'100%'}
            itemsPerGroup={1}
            showTopControls={false}
            bottomControls={DotsWithArrows}
            onScroll={(position, props) => {
                console.log(position, props.activeSlide) //eslint-disable-line
                setParallax(position)
                setActive(props.activeSlide)
                setWidth(props.sliderRef.innerWidth)
            }}
        >
            {images.map(image => <img style={{transform: `translateX(${parallax - (width * (active - 1))}px)`}} key={image.id} src={image.download_url} alt={image.author}/>)}
        </SnapSlider>
    );
}

export default App;
