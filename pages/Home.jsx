import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    const goToAbout = () => {
        navigation.navigate('About')
    }

    return (
        <View>
            <Text>Home View YAAAS!!</Text>
            <Button
                title="Ir a About"
                onPress={goToAbout} />
        </View>
    )
}

export default Home;