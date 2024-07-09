import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet} from "react-native";

function ActivityIndicator({visible = false}) {
    if (!visible) return null;
    return (
            <LottieView
                autoPlay
                style={styles.loader}
                source={require('../assets/animations/uB066ljPUr.json')}
            />
    );
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
    }
})

export default ActivityIndicator;