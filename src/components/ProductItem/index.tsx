import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Colors} from 'react-native-ui-lib';
import {DETAIL_PRODUCT_SCREEN} from '../../navigation/routename';

const ProductItem = (props: {image: string; name: string; price?: string}) => {
  const {navigate} = useNavigation();
  return (
    <View
      backgroundColor={Colors.white}
      padding-10
      style={{aspectRatio: 1, flex: 1 / 2}}>
      <TouchableOpacity
        onPress={() => {
          navigate('Product', {screen: DETAIL_PRODUCT_SCREEN});
        }}>
        <ImageBackground
          source={{
            uri: props.image,
          }}
          imageStyle={{borderRadius: RFValue(10)}}
          style={{
            width: Dimensions.get('window').width / 2.5,
            height: 120,
            justifyContent: 'center',
          }}></ImageBackground>
        <Text numberOfLines={1} style={{padding: RFValue(5)}} font14bold>
          {props.name}
        </Text>
        {/* <Text
          style={{paddingHorizontal: RFValue(5)}}
          font10
          color={Colors.grey40}>
          $ 120.000
        </Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
