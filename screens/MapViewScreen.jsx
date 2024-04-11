import React from 'react';
import {StyleSheet, View} from "react-native";
import MapView, {Marker} from "react-native-maps";

function MapViewScreen(props) {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 49.163128,
                    longitude: -0.34709599999999996,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <Marker
                    key={1}
                    coordinate={{
                        latitude: 49.163128,
                        longitude: -0.34709599999999996,
                    }}
                    title={"Festival"}
                    description={"2022-23"}
                    onPress={() => alert("COOOLL")}
                />
                <Marker
                    key={2}
                    coordinate={{
                        latitude: 46.163128,
                        longitude: -1.34709599999999996,
                    }}
                    title={"Festival"}
                    onPress={() => alert("COOOLL")}
                    description={"2022-23"}
                />
                <Marker
                    key={3}
                    onPress={() => alert("COOOLL")}
                    coordinate={{
                        latitude: 49.163128,
                        longitude: -0.34709599999999996,
                    }}
                    title={"RDV Diapason"}
                    description={"2023-24"}
                />
                <Marker
                    key={4}
                    coordinate={{
                        latitude: 48.163128,
                        longitude: -0.34709599999999996,
                    }}
                    onPress={() => alert("COOOLL")}
                    title={"Concert Fally Ipupa"}
                    description={"2022-23"}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%"
    }
})

export default MapViewScreen;