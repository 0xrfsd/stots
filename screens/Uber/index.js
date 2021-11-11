import React from 'react';
import { Text, View, Pressable, Dimensions } from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import HorizontalView from '../../components/HorizontalView';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Uber = () => {

    const NomeFuncao = ({ titulo }) => {

        return (
         <>
         <Text style={{ color: 'red' }}>{titulo}</Text>
         </>
        )
    }

    const [changeColor, setChangeColor] = React.useState(false);

       return (
        <View style={{ flex: 1, height: height, width: width, justifyContent: 'center', alignItems: 'center' }}>
            <NomeFuncao titulo="Nome1"/>
        </View>
    )
}

export default Uber;