import React , {Component} from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, Image, TouchableOpacity, Button, ScrollView,Dimensions} from 'react-native';
import { Ionicons, SimpleLineIcons, MaterialIcons, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { Constants, LinearGradient} from 'expo';
import { AreaChart, Grid } from 'react-native-svg-charts';
import { PieChart } from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
deviceWidth = Dimensions.get('window').width;
import * as shape from 'd3-shape'

import { AddButton } from './addButton';
import styles from "./styles";


export default class App extends React.Component {
  static  defaultProps = {
          transactionData : [
            {
              date: "23 May, 2018",
              name: "Starbucks",
              image: require("./../assets/IOTA.png"),
              cat: "Coffee",
              coin: "4 IOTA"
            },
            {
              date: "8 june, 2018",
              name: "Bitcoin",
              image: require("./../assets/ethereum.png"),
              cat: "Investment",
              coin: "12 BTC"
            },
            {
              date: "13 Aug, 2018",
              name: "Burger",
              image: require("./../assets/ethereum.png"),
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
        <View style={styles.statusBar}></View>

        <View style={{backgroundColor: '#FFFFFF',height: 60,shadowColor: '#30C1DD',shadowRadius: 10,shadowOpacity: 0.9,elevation: 8,shadowOffset: {width: 0,height: 2}}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image style={styles.headerImage} source={require('./../assets/bitcoin.png')}/>
            <Text style={{marginTop: 19, letterSpacing: 0.5 }}>Bitcoin Portfolio BTC Balance : $ 15,509 </Text>
            <TouchableOpacity>
              <Ionicons name="ios-list" size={55} style={styles.notificationIcon}/>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>

          <View style= {styles.searchBarRow}>
              <View style={styles.searchInputText}>
                <View style={{flex: 1, justifyContent: 'center', paddingLeft: 25}}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Start typing to search ..."
                    placeholderTextColor="#5B7293"
                  />
                </View>
                <View style={{justifyContent: 'center'}}>
                    <Image style={styles.searchBarIcon} source={require('./../assets/search.png')}/>
                </View>
              </View>
              <Image style={styles.profileImage} source={require('./../assets/sara.jpg')}/>
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
                      <Ionicons name="ios-trending-down" size={30} style={styles.ioniconsDown}/>
                   </View>
                   <View style= {styles.commonIcon}>
                      <Ionicons name="ios-remove" size={15} style= {styles.removeIconColor}/>
                      <Text style={styles.percentage}> 5% </Text>
                   </View>
                </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style= {styles.addWalletbtn}>
            <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
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

          <View style= {{flexDirection: 'row', marginTop: 50}}>
            <TouchableOpacity style= {styles.addWallet2nbtn}>
              <View style={{flexDirection: 'row',justifyContent: 'center', marginTop: 30}}>
                <Ionicons name="ios-add-circle-outline" size={20}/>
                <Text> Add Wallet </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bitcoinBTCbtn}>
              <View style={styles.bitcoinsBTC}>
                <Image style={styles.profileImage} source={require('./../assets/bitcoin.png')}/>
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
                <Image style={styles.profileImage} source={require('./../assets/litecoin.png')}/>
                <View style={{flex: 1}}>
                   <Text style={styles.coinNameColor}> Litecoin LTC </Text>
                   <Text style={{fontSize: 25}}> 16.9 </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bitcoinBTCbtn}>
              <View style={styles.bitcoinsBTC}>
                <Image style={styles.profileImage} source={require('./../assets/IOTA.png')}/>
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
                <Image style={styles.profileImage} source={require('./../assets/ethereum.png')}/>
                <View style={{flex: 1}}>
                   <Text style={styles.coinNameColor}> Ethereum ETH </Text>
                   <Text style={{fontSize: 25}}> 15.4 </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bitcoinBTCbtn}>
              <View style={styles.bitcoinsBTC}>
                <Image style={styles.profileImage} source={require('./../assets/bitconnect.png')}/>
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
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.sentMoneyToView}>
                  <Image style={styles.profileSentMoneyImage} source={require('./../assets/user1.jpeg')}/>
                <Text> Genie Brawner </Text>
              </View>
              <View style={styles.sentMoneyToView}>
                  <Image style={styles.profileSentMoneyImage} source={require('./../assets/user2.jpg')}/>
                <Text> Zina Triano </Text>
              </View>
              <View style={styles.sentMoneyToView}>
                  <Image style={styles.profileSentMoneyImage} source={require('./../assets/user3.jpg')}/>
                <Text> Gayhart </Text>
              </View>
              <View style={styles.sentMoneyToView}>
                  <Image style={styles.profileSentMoneyImage} source={require('./../assets/user3.jpg')}/>
                <Text> Gayhart </Text>
              </View>
              <View style={styles.sentMoneyToView}>
                  <Image style={styles.profileSentMoneyImage} source={require('./../assets/user3.jpg')}/>
                <Text> Gayhart </Text>
              </View>
            </ScrollView>
            <TouchableOpacity style={{position:'absolute', right: 0}}>
              <View style={styles.addSentMoneyPerson}>
                  <Ionicons name="ios-add-circle-outline" size={50} style={{color:'#0FB9A5'}} />
                  <Text style={{color:'#00E7CD'}}>Add More</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={{flex: 1, flexDirection: 'row', marginVertical: 20, padding: 10, justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20,color: '#90A1B7'}}> Transactions </Text>
            <Text style={{fontSize: 15,marginTop: 5}}>Order By: Last 30 days </Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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

          <View style= {{flex: 1, flexDirection: 'row',height: 60}}>
          </View>

        </ScrollView>
        <View style={{flex:1,position:'absolute',bottom:50,left:deviceWidth/2, justifyContent:"center", alignItems: 'center'}}>
          <AddButton />
        </View>
        <View style={styles.tabBarStyle}>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <TouchableOpacity>
              <SimpleLineIcons name="layers" size={30} color="#F7B094" style={{paddingHorizontal: 20}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="layout" size={30} color="#2A99BA" style={{paddingHorizontal: 20}}/>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row',paddingTop: 15}}>
            <TouchableOpacity>
              <Feather name="mail" size={30} color="#8A8AF4" style={{paddingHorizontal: 20}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="users" size={30} color="#90E18B" style={{paddingHorizontal: 20}}/>
            </TouchableOpacity>
          </View>
        </View>

      </View>


    );
  }
}
