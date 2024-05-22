import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/Colors";

const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        images: [{url: require("../assets/jacket.jpg")}]
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 1000,
        images: [{url: require("../assets/couch.jpg")}]
    }
]


function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        img={item.images[0].url}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingScreen;