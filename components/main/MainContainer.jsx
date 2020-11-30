import React from 'react';
import { View } from 'react-native';
import styles from './MainContainer.module.scss';

const MainContainer = (props) => (
    <View>
        <View style={styles.header}>

        </View>
        <View>
            {props.children}
        </View>
    </View>
)

export default MainContainer;