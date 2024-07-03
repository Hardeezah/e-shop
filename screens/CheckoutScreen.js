import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { CheckoutContext } from '../App';

export default function CheckoutScreen({ navigation }) {
  const { checkoutItems, setCheckoutItems } = useContext(CheckoutContext);

  const removeFromCheckout = (product) => {
    setCheckoutItems(checkoutItems.filter((item) => item.id !== product.id));
  };

  return (
    <View style={tw`flex-1 p-4 bg-gray-100`}>
      <FlatList
        data={checkoutItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`bg-white p-4 mb-4 rounded-lg shadow-md`}>
            <Image source={{ uri: item.image }} style={tw`w-full h-40 rounded`} />
            <Text style={tw`text-lg font-semibold mt-2`}>{item.name}</Text>
            <Text style={tw`text-gray-500`}>${item.price}</Text>
            <TouchableOpacity
              style={tw`mt-2 bg-red-500 p-2 rounded`}
              onPress={() => removeFromCheckout(item)}
            >
              <Text style={tw`text-white text-center`}>Remove from Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {checkoutItems.length > 0 && (
        <TouchableOpacity
          style={tw`mt-4 bg-green-500 p-4 rounded`}
          onPress={() => navigation.navigate('OrderSuccessful')}
        >
          <Text style={tw`text-white text-center text-lg`}>Order Successful</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
