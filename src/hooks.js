import {useEffect, useState} from "react";

export const useRandomImages = (limit = 10) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('https://picsum.photos/v2/list?limit=' + limit).then(resp => resp.json()).then(data => {
            setImages(data)
        })
    }, [limit])

    return images
}
