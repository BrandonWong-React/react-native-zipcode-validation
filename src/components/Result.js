import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-native-paper';
import MapImage from './MapImage';

function Result() {
    const result = useSelector(state => state.information);

    if (result) {
        return (
            <Card mode={'outlined'} style={{ marginTop: 40 }}>
                <Card.Title
                    title={`${result['post code']}`}
                    subtitle={`${result.places[0]['place name']}, ${result.places[0]['state abbreviation']}, ${result['country']}   (${result.places[0]['latitude']} , ${result.places[0]['longitude']})`}
                />
                <MapImage
                    latitude={result.places[0]['latitude']}
                    longitude={result.places[0]['longitude']}
                />
            </Card>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Result;