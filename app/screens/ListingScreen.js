import React, {useEffect} from 'react';
import { StyleSheet, FlatList} from 'react-native'

import listingsAPI from "../api/listings";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";


function ListingScreen({navigation}) {
    const [listings, setListings] = React.useState([]);

    const loadListings = async () => {
        const response = await listingsAPI.getListings();

        if (!response.ok) return console.log(response.problem);

        setListings(response.data);
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i].images[0].url);
        }
    }

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <Screen style={styles.screen}>
            <FlatList
                style={styles.list}
                showsVerticalScrollIndicator={false}
                data={listings}
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