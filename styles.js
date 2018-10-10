const React = require("react-native");
const { Dimensions } = React;
import { Constants} from 'expo';

deviceWidth = Dimensions.get('window').width;
deviceHeight = Dimensions.get('window').height;

export default {
    container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBar: {
   margin: 10,
   backgroundColor: "#ffffff",
   height: Constants.statusBarHeight,
 },
  button: {
    flex: 1,
    width: deviceWidth / 2.09,
    height: deviceHeight / 9,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 5,
    marginTop: 3
  },
  balanceHistory: {
    flex: 1,
    padding: 15,
    width: deviceWidth / 1.04,
    height: deviceHeight / 2.5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ffffff',
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 10,
    marginTop: 50
  },
  portfolioDistribution: {
    flex: 1,
    padding: 15,
    width: deviceWidth / 1.04,
    height: deviceHeight / 1.8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ffffff',
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 10,
    marginTop: 50
  },
  portBalanceStyle: {
    flex: 1,
    padding: 10,
    width: deviceWidth / 1.06,
    height: deviceHeight / 6,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ffffff',
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 10,
    marginTop: 50
  },
  buttonGradient: {
    flex: 1,
    width: deviceWidth / 2.09,
    height: deviceHeight /9.1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 5,
    marginTop: 8
  },
  buttonGradientBalance: {
    flex: 1,
    width: deviceWidth / 2.09,
    height: deviceHeight / 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 5,
    justifyContent: 'center'
  },
  addWalletbtn: {
    flex: 1,
    width: deviceWidth / 2.09,
    height: deviceHeight / 9.1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#00E0C1',
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 5,
    marginTop: 8,
    justifyContent: 'center',
  },
  addWallet2nbtn: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 5,
    marginTop: 8
  },
  searchInputText: {
    padding: 10,
    width: deviceWidth / 1.5,
    backgroundColor: '#eeeeee',
    borderRadius: 30,
    marginLeft: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  profileSentMoneyImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  sentMoneyToView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  addSentMoneyPerson: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    paddingRight: 10
  },
  transactionPortImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  sentMoneyImages: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 50
  },
  commonBtnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 10
  },
  depositeBtnStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center',
  },
  coinDownName: {
    color: '#000',
  },
  dipositeMoney: {
    fontSize: 17,
    color: '#44DA79'
  },
  withdraw: {
    fontSize: 17,
    color: '#ffffff',
    padding: 13
  },
  yourPortBalanceBtnStyle: {
    color: '#90A1B7'
  },
  showBalanceHistoryStyle: {
    color: '#000'
  },
  commonTextColor: {
    color: '#ffffff',
  },
  commonPortTextColor: {
    color: '#ffffff',
    marginTop: 4
  },
  ioniconsDown: {
    marginRight: 10,
    color: '#FA5D31',
    marginTop: 2
  },
  ioniconsUp: {
    marginRight: 10,
    color: '#44DA79',
    marginTop: 2
  },
  portStyle: {
    marginRight: 10,
    color: '#ffffff'
  },
  percentage: {
    fontSize: 20,
    color: '#FA5D31'
  },
  portBalance: {
    fontSize: 35,
    color: '#000'
  },
  bitCoinPercentage: {
    fontSize: 20,
    color: '#44DA79'
  },
  commonBitcoin: {
    color: '#44DA79',
    marginTop: 2
  },
  balancePercentage: {
    fontSize: 20,
    color: '#44DA79',
    marginTop: 10
  },
  portBalanceUpArrow: {
    color: '#44DA79',
    marginTop: 10
  },
  portPercentage: {
    fontSize: 22,
    color: '#ffffff'
  },
  commonIcon: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 10
  },
  portBlancePercentageIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
  },
  balanceHisrtoryMonthStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
  },
  removeIconColor: {
    color: '#FA5D31',
    marginTop: 6,
  },
  dollarIconColor: {
    color: '#000',
    marginTop: 20,
  },
  searchBarRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center',
  },
  notificationIcon: {
    marginRight: 10
  },
  addWalletIcon: {
    marginRight: 10,
    marginTop: 3,
    color:'#00E0C1'
  },
  addWalletTextColor: {
    color: '#00E0C1',
  },
  portfolioDisatribution: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10
  },
  bitcoinsBTC: {
    flexDirection: 'row'
  },
  transactionView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bitcoinBTCbtn: {
    flex: 1,
    width: deviceWidth / 2.09,
    height: deviceHeight / 8.3,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 5,
    marginTop: 8
  },
  transactionsStyle: {
    width: deviceWidth / 2.09,
    height: deviceHeight / 4.5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 5,
    marginTop: 8
  },
  transactionMainName: {
    marginTop: 12,
    fontSize: 17
  },
  transactionCatName: {
    color: '#ACAFB7',
    marginTop: 10,
    fontSize: 15
  },
  coinNameColor: {
    color: '#90A1B7'
  }
};
