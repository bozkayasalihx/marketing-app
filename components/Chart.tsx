import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

interface CartProps {
    productName: string;
    total: string;
    perPrice: string;
}

const Chart: React.FC<CartProps> = ({ productName, total, perPrice }) => {
    const [count, setCount] = useState<number>(0);
    const handleDecrease = useCallback(() => {
        if (count > 0) {
            setCount(prev => (prev -= 1));
        }
    }, [count]);

    const handleIncrease = useCallback(() => {
        setCount(prev => (prev += 1));
    }, [count]);
    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <Text>{productName}</Text>
                <Text>{total}</Text>
                <Text>{perPrice}</Text>
            </View>
            <View style={styles.flex}>
                <Button label='-' onPress={handleDecrease} width={40} height={30} />
                <Text>{count}</Text>
                <Button label='+' onPress={handleIncrease} width={40} height={30} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "85vw",
        marginHorizontal: "auto",
        height: 70,
        backgroundColor: "#00A19D",
        borderRadius: 10,
    },
    flex: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        overflow: "hidden",
    },
});
export default React.memo(Chart);
