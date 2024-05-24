import React from 'react';
import {View, Image, StyleSheet} from "react-native";
import Text from "../components/Text";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({route}) {
    const listing = route.params;

    return (
        <View>
            <Image style={styles.image} source={listing.images[0].url}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.price}>{listing.price}</Text>
                <ListItem
                    img={require("../assets/mosh.jpg")}
                    title={"Mosh Hamedani"}
                    subTitle={"5 Listings"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: '500',
    },
    price:{
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    }
})
export default ListingDetailsScreen;