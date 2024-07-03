import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function OrderSuccessfulScreen({ navigation }) {
  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Order Successful!</Text>
      <TouchableOpacity
        style={tw`bg-blue-500 p-4 rounded`}
        onPress={() => navigation.navigate('Products')}
      >
        <Text style={tw`text-white text-center`}>Go Back to Products</Text>
      </TouchableOpacity>
    </View>
  );
}
