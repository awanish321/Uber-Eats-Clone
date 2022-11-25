// import { View, Text } from 'react-native';
// import React from 'react';

// export default function OrderItem(item) {
//     const {title, price} = item;
//   return (
//     <View style={{
//         position: 'relative',
//         flexDirection: "row",
//         justifyContent: "space-between",
//         padding: 20,
//         borderBottomWidth: 1,
//         borderBottomColor: "#999"
//     }}>
//       <Text style={{fontWeight: "600", fontSize: 16}}>{item.title}</Text>
//       <Text style={{opacity: 0.7, fontSize: 16}}>{item.price}</Text>
//     </View>
//   );
// }

import React from "react";
import { View, Text } from "react-native";

export default function OrderItem({ item }) {
  const { title, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{price}</Text>
    </View>
  );
}

