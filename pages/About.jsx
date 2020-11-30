import React from 'react';
import { View, Text, Button } from 'react-native';

const About = ({ navigation }) => {
    const goToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View>
            <Text>About View YAAAS!!</Text>
            <Button
                title="Ir a Home"
                onPress={goToHome} />
        </View>
    )
}


export default About;