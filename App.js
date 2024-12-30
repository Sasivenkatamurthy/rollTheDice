// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

export default function App() {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const randomDiceValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomDiceValue);
  };

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const getDiceImage = (value) => {
    switch (value) {
      case 1:
        return require('./src/assests/diceOne.jpeg');
      case 2:
        return require('./src/assests/diceTwo.jpeg');
      case 3:
        return require('./src/assests/dice3.jpeg');
      case 4:
        return require('./src/assests/dice4.jpeg');
      case 5:
        return require('./src/assests/dice5.jpeg');
      case 6:
        return require('./src/assests/dice6.jpeg');
       default:
       console.log('error') ;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  };
  return (
    <View style={styles.container}>
    <View style={styles.DiceImgeSty}>
          <Image source={getDiceImage(diceValue)} style={styles.DiceImage}/>
          </View>
      <TouchableOpacity  onPress={rollDice}>
          <Text  style={styles.PressMe}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
  },
  DiceImage:{
    width:100,
    height:100,
  },
  DiceImgeSty:{
    marginLeft:15,
    marginBottom:16
  },
  PressMe:{
    margin:5,
    backgroundColor:'#335566',
    borderRadius:5,
    textAlign:'center',
    padding:10,
    width:120,
  }
});
