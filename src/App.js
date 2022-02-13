import './App.css';
import SnapSlider from "snapslider-react";
import {useEffect, useState} from "react";

function App() {
    const images = useRandomImages()

    return (
        <div className="App">
            <h1>SnapSlider v1</h1>
            <Section title={'SnapSlider Test v.0.1.7'}>
                <SnapSlider
                    groupSize={'100%'}
                    itemsPerGroup={1}
                >
                    {images.map(image => <img key={image.id} src={image.download_url} alt={image.author}/>)}
                </SnapSlider>
            </Section>
        </div>
    );
}

const Section = ({title, children}) => {
    return (
        <div className={'section'}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

const useRandomImages = (limit = 10) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('https://picsum.photos/v2/list?limit=' + limit).then(resp => resp.json()).then(data => {
            setImages(data)
        })
    }, [limit])

    return images
}

export default App;
