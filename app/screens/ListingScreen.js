import React, {useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native'

import listingsAPI from "../api/listings";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import Text from "../components/Text";


function ListingScreen({navigation}) {
   const getListingsAPI = useApi(listingsAPI.getListings);

    useEffect(() => {
        getListingsAPI.request();
    }, []);

    return (
        <Screen style={styles.screen}>
            {
                getListingsAPI.error && (
                    <>
                        <Text>Couldn't retrieve the listings.</Text>
                        <Button title="Retry" onPress={getListingsAPI.request()}/>
                    </>
                )
            }
            <ActivityIndicator
                visible={getListingsAPI.loading}
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={getListingsAPI.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={()=> navigation.navigate( routes.LISTING_DETAILS, item)}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 20,
        paddingHorizontal: 10,
        backgroundColor: colors.light
    },
})

export default ListingScreen;