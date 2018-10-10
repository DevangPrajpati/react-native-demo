import React from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, Image, TouchableOpacity, Button, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Constants, LinearGradient} from 'expo';
import { AreaChart, Grid } from 'react-native-svg-charts';
import { PieChart } from 'react-native-svg-charts';
import ModalDropdown from 'react-native-modal-dropdown';
import TabNavigator from 'react-native-tab-navigator';

import * as shape from 'd3-shape'

import styles from "./styles";

export default class App extends React.Component {
  static  defaultProps = {
          transactionData : [
            {
              date: "23 May, 2018",
              name: "Starbucks",
              image: require("./assets/IOTA.png"),
              cat: "Coffee",
              coin: "4 IOTA"
            },
            {
              date: "8 june, 2018",
              name: "Bitcoin",
              image: require("./assets/ethereum.png"),
              cat: "Investment",
              coin: "12 BTC"
            },
            {
              date: "13 Aug, 2018",
              name: "Burger",
              image: require("./assets/ethereum.png"),
              cat: "Food",
              coin: "5 ETH"
            }
          ],
          month : [
            "Feb",
            "Mar",
            "Apr",
            "May"
          ]

    }

  render() {
    const data = [ 40.2, 19.6, 13.2, 16.9, 15.4]

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data.filter(value => value > 0).map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.statusBar}></View>

          <View style= {styles.searchBarRow}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.searchInputText}
              placeholder="Start typing to search ..."
              placeholderTextColor="#5B7293"
            />
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
                    <Ionicons name="ios-add" size={23} style= {styles.commonPortTextColor}/>
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
                    <Ionicons name="ios-remove" size={15} style= {styles.removeIconColor}/>
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
                      <Ionicons name="ios-add" size={23} style= {styles.commonBitcoin}/>
                      <Text style={styles.bitCoinPercentage}> 39% </Text>
                   </View>
                </TouchableOpacity>

               <TouchableOpacity style={styles.buttonGradient}>
                   <View style= {styles.commonBtnStyle}>
                      <Text style= {styles.coinDownName}> Crypterium </Text>
                      <Ionicons name="ios-trending-down" size={23} style={styles.ioniconsDown}/>
                   </View>
                   <View style= {styles.commonIcon}>
                      <Ionicons name="ios-remove" size={15} style= {styles.removeIconColor}/>
                      <Text style={styles.percentage}> 5% </Text>
                   </View>
                </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style= {styles.addWalletbtn}>
            <View style={{flexDirection: 'row',justifyContent: 'center', alignItem: 'center'}}>
              <Ionicons name="ios-add-circle-outline" size={15} style={styles.addWalletIcon}/>
              <Text style={styles.addWalletTextColor}> Add Wallet </Text>
            </View>
          </TouchableOpacity>

          <View style= {styles.portBalanceStyle}>
             <View style= {styles.commonBtnStyle}>
                <Text style= {styles.yourPortBalanceBtnStyle}> Your Portfolio Balance </Text>
             </View>
             <View style= {styles.portBlancePercentageIcon}>
                <View style= {{flexDirection: 'row'}}>
                  <Text style= {styles.dollarIconColor}> $ </Text>
                  <Text style={styles.portBalance}> 397,900 </Text>
                </View>
                <View style= {{flexDirection: 'row'}}>
                  <Text style={styles.balancePercentage}> 15% </Text>
                  <Ionicons name="ios-trending-up" size={30} style= {styles.portBalanceUpArrow}/>

                </View>
             </View>
          </View>

          <View style= {{flex: 1, flexDirection: 'row', marginTop: 10}}>
           <TouchableOpacity style={styles.buttonGradientBalance}>
               <View style= {styles.depositeBtnStyle}>
                  <Text style= {styles.dipositeMoney}> Deposit Money </Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGradientBalance}>
              <LinearGradient
                   colors={['#8ADE8E', '#56C3A4']}
                   start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                   style={{borderRadius: 10}}
                 >
               <View style= {styles.depositeBtnStyle}>
                  <Text style= {styles.withdraw}> Withdraw </Text>
               </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style= {styles.balanceHistory}>
            <View style= {styles.commonBtnStyle}>
              <Text style= {styles.yourPortBalanceBtnStyle}> Balance History </Text>
              <Text style= {styles.showBalanceHistoryStyle}> Show Period: Last 30 days </Text>
            </View>
            <View>
               <AreaChart
                    style={{ height: 200 }}
                    data={ data }
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                >
                <Grid/>
              </AreaChart>
            </View>
            <View style= {styles.balanceHisrtoryMonthStyle}>
              {
                this.props.month.map((data, index) => {
                  return(
                    <Text style={{color: '#90A1B7'}}> {data} </Text>
                  );
                })
              }
            </View>
          </View>

          <View style= {styles.portfolioDistribution}>
            <View style= {styles.commonBtnStyle}>
              <Text style= {styles.yourPortBalanceBtnStyle}> Portfolio Distribution </Text>
            </View>
            <View>
               <PieChart
                  style={ { height: 200 } }
                  data={ pieData }
                />
            </View>
            <View style={styles.portfolioDisatribution}>
              <View style={{flexDirection: 'row'}}>
                  <Ionicons name="ios-radio-button-off" size={20} style={{marginRight: 10, color: randomColor() }}/>
                  <Text>40.2 BCC, 38.17%</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Ionicons name="ios-radio-button-off" size={20} style={{marginRight: 10, color: randomColor()}}/>
                  <Text>16.9 LTC, 16.04%</Text>
              </View>
            </View>
            <View style={styles.portfolioDisatribution}>
              <View style={{flexDirection: 'row'}}>
                  <Ionicons name="ios-radio-button-off" size={20} style={{marginRight: 10, color: randomColor()}}/>
                  <Text>19.6 BTC, 18.61%</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Ionicons name="ios-radio-button-off" size={20} style={{marginRight: 10, color: randomColor()}}/>
                  <Text>15.4 ETH, 14.62%</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10, padding: 10}}>
                <Ionicons name="ios-radio-button-off" size={20} style={{marginRight: 10, color: randomColor()}}/>
                <Text>13.2 IOTA, 12.53%</Text>
            </View>
          </View>

          <View style= {{flexDirection: 'row'}}>
            <TouchableOpacity style= {styles.addWallet2nbtn}>
              <View style={{flexDirection: 'row',justifyContent: 'center', marginTop: 30}}>
                <Ionicons name="ios-add-circle-outline" size={20}/>
                <Text> Add Wallet </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bitcoinBTCbtn}>
              <View style={styles.bitcoinsBTC}>
                <Image style={styles.profileImage} source={require('./assets/bitcoin.png')}/>
                <View style={{flex: 1}}>
                   <Text style={styles.coinNameColor}> Bitcoins BTC </Text>
                   <Text style={{fontSize: 25}}> 19.6 </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style= {{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.bitcoinBTCbtn}>
              <View style={styles.bitcoinsBTC}>
                <Image style={styles.profileImage} source={require('./assets/litecoin.png')}/>
                <View style={{flex: 1}}>
                   <Text style={styles.coinNameColor}> Litecoin LTC </Text>
                   <Text style={{fontSize: 25}}> 16.9 </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bitcoinBTCbtn}>
              <View style={styles.bitcoinsBTC}>
                <Image style={styles.profileImage} source={require('./assets/IOTA.png')}/>
                <View style={{flex: 1}}>
                   <Text style={styles.coinNameColor}> IOTA </Text>
                   <Text style={{fontSize: 25}}> 13.2 </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style= {{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.bitcoinBTCbtn}>
              <View style={styles.bitcoinsBTC}>
                <Image style={styles.profileImage} source={require('./assets/ethereum.png')}/>
                <View style={{flex: 1}}>
                   <Text style={styles.coinNameColor}> Ethereum ETH </Text>
                   <Text style={{fontSize: 25}}> 15.4 </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bitcoinBTCbtn}>
              <View style={styles.bitcoinsBTC}>
                <Image style={styles.profileImage} source={require('./assets/bitconnect.png')}/>
                <View style={{flex: 1}}>
                   <Text style={styles.coinNameColor}> Bitconnect BCC </Text>
                   <Text style={{fontSize: 25}}> 40.2 </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row', marginVertical: 20, padding: 10, justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20,color: '#90A1B7'}}> Sent Money To  </Text>
          </View>

          <View style= {{flex: 1, flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              <View style={styles.sentMoneyToView}>
                  <Image style={styles.profileSentMoneyImage} source={require('./assets/user1.jpeg')}/>
                <Text> Genie Brawner </Text>
              </View>
              <View style={styles.sentMoneyToView}>
                  <Image style={styles.profileSentMoneyImage} source={require('./assets/user2.jpg')}/>
                <Text> Zina Triano </Text>
              </View>
              <View style={styles.sentMoneyToView}>
                  <Image style={styles.profileSentMoneyImage} source={require('./assets/user3.jpg')}/>
                <Text> Gayhart </Text>
              </View>
              <View style={styles.sentMoneyToView}>
                  <Image style={styles.profileSentMoneyImage} source={require('./assets/user1.jpeg')}/>
                <Text> John Doe </Text>
              </View>
            </ScrollView>
              <View style={styles.addSentMoneyPerson}>
                <Ionicons name="ios-add-circle-outline" size={50} style={{color:'#0FB9A5'}} />
                <Text style={{color:'#00E7CD'}}>Add More</Text>
              </View>
          </View>


          <View style={{flex: 1, flexDirection: 'row', marginVertical: 20, padding: 10, justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20,color: '#90A1B7'}}> Transactions </Text>
            <Text style={{fontSize: 15,marginTop: 5}}>Order By: Last 30 days </Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
            {
              this.props.transactionData.map((data, index) => {
                  return(
                    <TouchableOpacity style={styles.transactionsStyle}>
                      <Text style={{fontSize: 15}}>{data.date}</Text>
                      <View style={styles.transactionView}>
                        <Image style={styles.transactionPortImage} source={data.image}/>
                        <View style={{flex: 1}}>
                           <Text style={styles.transactionMainName}> {data.name} </Text>
                        </View>
                      </View>
                      <Text style={styles.transactionCatName}>{data.cat}</Text>
                      {data.name == 'Bitcoin' ? <Text style={{textAlign: 'right', fontSize: 18, color: '#44DA79'}}>{data.coin}</Text>
                                              : <Text style={{textAlign: 'right', fontSize: 18}}>{data.coin}</Text>}
                    </TouchableOpacity>
                  );
              })
            }
            </ScrollView>
          </View>
        </ScrollView>
        <TabNavigator>
            <TabNavigator
              renderIcon={() => <Ionicons name="ios-apps" size={28} style={{color:'#000'}} />}
            />

            <TabNavigator
              renderIcon={() => <Ionicons name="ios-paper" size={28} style={{color:'#000'}} />}
            >
            </TabNavigator>
            <TabNavigator
              renderIcon={() => <Ionicons name="ios-document" size={28} style={{color:'#000'}} />}
            >
            </TabNavigator>
            <TabNavigator
              renderIcon={() => <Ionicons name="ios-mail" size={28} style={{color:'#000'}} />}
            />

            <TabNavigator
              renderIcon={() => <Ionicons name="ios-people" size={28} style={{color:'#000'}} />}
            >
            </TabNavigator>
            <TabNavigator
              renderIcon={() => <Ionicons name="ios-share-alt" size={28} style={{color:'#000'}} />}
            >
            </TabNavigator>
        </TabNavigator>
        </View>


    );
  }
}
