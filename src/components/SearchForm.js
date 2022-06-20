import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../redux/action.js';
import { View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { validateZipcode } from '../services/util.js';

function SearchForm({ onSearch }) {
    const [zipcode, setZipcode] = React.useState("");

    const dispatch = useDispatch();
    const errorMsg = useSelector(state => state.errorMsg);
    const hasError = useSelector(state => state.hasError);

    const onChangeZipcode = (text) => {
        setZipcode(text);
    }

    const onClickSearch = () => {
        if (validateZipcode(zipcode)) {
            dispatch(setError(false, ""));
            onSearch(zipcode);
        } else {
            dispatch(setError(true, "No validated zipcode"));
        }
    }

    return (
        <View>
            <HelperText type="error" visible={hasError}>
                {errorMsg}
            </HelperText>
            <TextInput
                label={'Zipcode'}
                value={zipcode}
                mode={'outlined'}
                error={hasError}
                onChangeText={onChangeZipcode}
                keyboardType={'numeric'}
                onSubmitEditing={onClickSearch}
                right={
                    <TextInput.Icon
                        name={'magnify'}
                        onPress={onClickSearch}
                        forceTextInputFocus={false}
                    />
                }
            />
        </View>
    )
}

export default SearchForm;