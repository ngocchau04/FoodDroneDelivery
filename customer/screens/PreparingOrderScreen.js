import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import DroneMap from '../components/DroneMap';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  const [orderStatus, setOrderStatus] = useState("PREPARING");

  useEffect(() => {
    // Simulate order progression
    setTimeout(() => setOrderStatus("PICKED_UP"), 5000);
    setTimeout(() => setOrderStatus("DELIVERING"), 10000);
    setTimeout(() => setOrderStatus("DELIVERED"), 40000);
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#00CCBB' }}>
      {/* Header với styling tốt hơn */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#00CCBB'
      }}>        
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {/* <XMarkIcon color="white" size={30} /> */}
          <Text className="font-light text-white text-lg">Go Back</Text>
        </TouchableOpacity>
        <Text className="font-light text-white text-lg">Order Help</Text>
      </View>

      {/* DroneMap chiếm phần còn lại */}
      <View style={{ flex: 1 }}>
        <DroneMap orderStatus={orderStatus} />
      </View>
    </SafeAreaView>
  );
};

// const PreparingOrderScreen = () => {
//     const navigation = useNavigation()

//     useEffect(() => {
//         setTimeout(() => {
//             navigation.navigate("Delivery");
//         }, 4000);
//     }, []);

//   return (
//     <SafeAreaView className="bg-[#fff] flex-1 justify-center items-center">
//       <Animatable.Image
//         source={require("../assets/364.jpg")}
//         animation="slideInUp"
//         iterationCount={1}
//         className="h-96 w-96"
//       />

//       <Animatable.Text
//         animation="slideInUp"
//         iterationCount={1}
//         className="text-lg my-10 font-bold text-center"
//       >
//         Waiting for Restaurant to accept your order!
//       </Animatable.Text>

//       <Progress.Circle size={60} indeterminate={true} color='black' />

//     </SafeAreaView>
//   )
// }


export default PreparingOrderScreen