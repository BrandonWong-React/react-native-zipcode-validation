import React, { useState } from 'react';
import { Card, Button } from 'react-native-paper';
import { getMapImage } from '../services/api';

function MapImage({ latitude, longitude }) {
    const [zoom, setZoom] = useState(10);
    const [imageUrl, setImageUrl] = useState(false);

    React.useEffect(() => {
        const image = getMapImage(latitude, longitude, zoom);
        setImageUrl(image);
    }, [])

    const onClickZoomIn = () => {
        setZoom(zoom => zoom * 2);
    }

    const onClickZoomOut = () => {
        setZoom(zoom => Math.ceil(zoom / 2));
    }

    return (
        <>
        {/* TODO: Show map image with zoom in & out capabilities */}
            <Card.Cover source={{ uri: imageUrl ? imageUrl : "http://via.placeholder.com/640x360" }} />
            <Card.Actions style={{ alignSelf: 'flex-end' }}>
                <Button onPress={onClickZoomIn} icon="magnify-plus-outline"></Button>
                <Button onPress={onClickZoomOut} icon="magnify-minus-outline"></Button>
            </Card.Actions>
        </>
    )
}

export default MapImage;