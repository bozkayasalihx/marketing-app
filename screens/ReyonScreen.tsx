import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchProducts, Idata } from "../features/productsSlice";
import Chart from "../components/Chart";

interface ReyonScreenProps {}

const ReyonScreen: React.FC<ReyonScreenProps> = () => {
    const dispatch = useAppDispatch();
    const [data, setData] = useState<Idata[]>([]);

    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, [dispatch]);

    useLayoutEffect(() => {
        const inner = async () => {
            const data = await dispatch(fetchProducts()).unwrap();
            setData(data);
        };
        inner();
    }, [dispatch, fetchProducts]);

    // const { data, error, status } = useAppSelector(state => state.products);

    // const newData = data.slice(0, 5);
    // console.log("newData", newData);

    // if (status === "pending") {
    //     <View style={styles.view}>
    //         <Text>...loading</Text>
    //     </View>;
    // }

    // if (status === "rejected") {
    //     <View style={styles.view}>
    //         <Text>{error}</Text>
    //     </View>;
    // }

    return (
        <View style={styles.view}>
            {data.length > 0 && (
                <FlatList
                    data={data}
                    pagingEnabled
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Chart
                            productName={item.productName}
                            perPrice={item.perPrice}
                            total={item.total}
                        />
                    )}
                    scrollEnabled
                />
                // <Text>james is bset</Text>
            )}
            <Text>salih</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ReyonScreen;

// endpoint = https://615df41e12571a00172079c7.mockapi.io/:endpoint
