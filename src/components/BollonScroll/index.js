// import React from "react";
// import { View, StyleSheet } from "react-native";
// import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

// import { colors } from "../../constants/colors";

// export default function BollonScroll({ currentIndex, index }) {
//   const opacity = interpolate(currentIndex, {
//     inputRange: [index - 1, index, index + 1],
//     outputRange: [0.5, 1, 0.5],
//     extrapolate: Extrapolate.CLAMP,
//   });

//   const scale = interpolate(currentIndex, {
//     inputRange: [index - 1, index, index + 1],
//     outputRange: [1, 1.25, 0.5],
//     extrapolate: Extrapolate.CLAMP,
//   });

//   return (
//     <View style={[styles.container, { opacity, transform: [{ scale }] }]} />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: 10,
//     height: 10,
//     borderRadius: 10,
//     backgroundColor: colors.blue,
//     marginLeft: 5,
//   },
// });

import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

import { colors } from "../../constants/colors";

export default function BollonScroll() {
  //   const opacity = interpolate(currentIndex, {
  //     inputRange: [index - 1, index, index + 1],
  //     outputRange: [0.5, 1, 0.5],
  //     extrapolate: Extrapolate.CLAMP,
  //   });

  //   const scale = interpolate(currentIndex, {
  //     inputRange: [index - 1, index, index + 1],
  //     outputRange: [1, 1.25, 0.5],
  //     extrapolate: Extrapolate.CLAMP,
  //   });

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: colors.blue,
    marginLeft: 5,
  },
});
