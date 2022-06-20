import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, setZipCodeInfo } from '../redux/action';
import { SafeAreaView, StatusBar, ScrollView, StyleSheet, Alert } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Header from '../components/Header';
import Content from '../components/Content';
import SearchForm from '../components/SearchForm';
import Result from '../components/Result.js';
import { getZipcodeInformation } from '../services/api';

function ZipcodeValidate() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    //Show Alert when there is an issue with the api request.
    const onShowApiIssueAlert = () => {
        Alert.alert(
            "API Issue",
            "There is an issue while fetching an api. Please check your internet connection and try again",
            [
                {
                    text: "Close",
                    style: "cancel"
                },
            ]
        );
    }

    const onSearch = async (zipcode) => {
        if (!isLoading) {
            dispatch(setLoading(true));
            const info = await getZipcodeInformation(zipcode);
            dispatch(setLoading(false));
            if (!info) {
                onShowApiIssueAlert();
            } else {
                dispatch(setZipCodeInfo(info));
            }
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.container}>
                <Header title={"Zipcode Validation"} />
                <Content>
                    <SearchForm onSearch={onSearch} />
                    {
                        isLoading ?
                            <ActivityIndicator
                                animating={true}
                                size={'large'}
                                style={{ marginTop: 150 }}
                            />
                            :
                            <Result />
                    }
                </Content>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ZipcodeValidate;