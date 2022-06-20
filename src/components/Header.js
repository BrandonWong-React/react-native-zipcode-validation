import React from 'react';
import { Appbar } from 'react-native-paper';

function Header({ title }) {
    return (
        <Appbar.Header>
            <Appbar.Content title={title} />
        </Appbar.Header>
    )
}

export default Header;