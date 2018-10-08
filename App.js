import React from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, Image, TouchableOpacity, Button, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants, LinearGradient} from 'expo';
import styles from "./styles";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.statusBar}></View>

          <View style= {styles.searchBarRow}>
            <TextInput underlineColorAndroid="transparent" style={styles.searchInputText}/>
            <Image style={styles.profileImage} source={require('./assets/sara.jpg')}/>
            <Ionicons name="ios-notifications-outline" size={55} style={styles.notificationIcon}/>
          </View>

          <View style= {{paddingTop: 25}}>
            <View style={{flexDirection: 'row'}}>
               <TouchableOpacity style={styles.buttonGradient}>
                <LinearGradient
                   colors={['#8ADE8E', '#56C3A4']}
                   start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                   style={{borderRadius: 10}}
                 >
                 <View style= {styles.commonBtnStyle}>
                    <Text style= {styles.commonTextColor}> Your Portfolio </Text>
                    <Ionicons name="ios-trending-up" size={30} style={styles.portStyle}/>
                 </View>
                 <View style= {styles.commonIcon}>
                    <Ionicons name="ios-add" size={30} style= {styles.commonTextColor}/>
                    <Text style={styles.portPercentage}> 29% </Text>
                 </View>
                </LinearGradient>
               </TouchableOpacity>

               <TouchableOpacity style={styles.buttonGradient}>
                 <View style= {styles.commonBtnStyle}>
                    <Text style= {styles.coinDownName}> Ethereum </Text>
                    <Ionicons name="ios-trending-down" size={30} style={styles.ioniconsDown}/>
                 </View>
                 <View style= {styles.commonIcon}>
                    <Ionicons name="ios-remove" size={10} style= {styles.removeIconColor}/>
                    <Text style={styles.percentage}> 5% </Text>
                 </View>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
               <TouchableOpacity style={styles.buttonGradient}>
                   <View style= {styles.commonBtnStyle}>
                      <Text style= {styles.commonBitcoin}> Bitcoin </Text>
                      <Ionicons name="ios-trending-up" size={30} style={styles.ioniconsUp}/>
                   </View>
                   <View style= {styles.commonIcon}>
                      <Ionicons name="ios-add" size={30} style= {styles.commonBitcoin}/>
                      <Text style={styles.bitCoinPercentage}> 39% </Text>
                   </View>
                </TouchableOpacity>

               <TouchableOpacity style={styles.buttonGradient}>
                   <View style= {styles.commonBtnStyle}>
                      <Text style= {styles.coinDownName}> Crypterium </Text>
                      <Ionicons name="ios-trending-down" size={30} style={styles.ioniconsDown}/>
                   </View>
                   <View style= {styles.commonIcon}>
                      <Ionicons name="ios-remove" size={30} style= {styles.removeIconColor}/>
                      <Text style={styles.percentage}> 5% </Text>
                   </View>
                </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style= {styles.addWalletbtn}>
            <View style={{flexDirection: 'row',justifyContent: 'center', marginTop: 30}}>
              <Ionicons name="ios-add-circle-outline" size={15} style={styles.addWalletIcon}/>
              <Text style={styles.addWalletTextColor}>Add Wallet </Text>
            </View>
          </TouchableOpacity>

          <View style= {styles.portBalanceStyle}>

          </View>
          <View style= {{flex: 1, flexDirection: 'row', marginTop: 20}}>
              <TouchableOpacity style={styles.buttonGradient}>
                <LinearGradient
                   colors={['#8ADE8E', '#56C3A4']}
                   start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                   style={{borderRadius: 10}}
                 >
                 <View style= {styles.commonBtnStyle}>
                    <Text style= {styles.commonTextColor}> Your Portfolio </Text>
                    <Ionicons name="ios-trending-up" size={30} style={styles.portStyle}/>
                 </View>
                 <View style= {styles.commonIcon}>
                    <Ionicons name="ios-add" size={30} style= {styles.commonTextColor}/>
                    <Text style={styles.portPercentage}> 29% </Text>
                 </View>
                </LinearGradient>
               </TouchableOpacity>
            <TouchableOpacity style= {styles.withdrawBtn}>
              <View style= {{flexDirection: 'row'}}>
                  <Text>Withdraw</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
