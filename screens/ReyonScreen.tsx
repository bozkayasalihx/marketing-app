import React, { useEffect } from "react";
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from "react-native";
import Chart from "../components/Chart";
import { fetchProducts, Idata } from "../features/productsSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export default function ReyonScreen() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const data = useAppSelector(state => state.products.data);

    const renderItem = ({ item }: { item: Idata }) => (
        <Chart
            perPrice={item.perPrice}
            productName={item.productName}
            total={item.total}
        />
    );

    return (
        <View>
            {data.length > 0 && (
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
