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
  portBalanceStyle: {
    flex: 1,
    width: deviceWidth / 1.04,
    height: deviceHeight / 9,
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
    height: deviceHeight / 9,
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
  addWalletbtn: {
    flex: 1,
    width: deviceWidth / 2.09,
    height: deviceHeight / 9,
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
    marginTop: 5
  },
  withdrawBtn: {
    flex: 1,
    width: deviceWidth / 2.09,
    height: deviceHeight / 12,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#00E0C1',
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {width: 0,height: 10},
    marginHorizontal: 5,
    marginTop: 5
  },
  searchInputText: {
    padding: 10,
    width: deviceWidth / 1.5,
    backgroundColor: '#eeeeee',
    borderRadius: 30,
    marginLeft: 8
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10
  },
  commonBtnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7
  },
  coinDownName: {
    color: '#000',
  },
  commonBitcoin: {
    color: '#44DA79'
  },
  commonTextColor: {
    color: '#ffffff'
  },
  ioniconsDown: {
    marginRight: 10,
    color: '#FA5D31'
  },
  ioniconsUp: {
    marginRight: 10,
    color: '#44DA79'
  },
  portStyle: {
    marginRight: 10,
    color: '#ffffff'
  },
  percentage: {
    fontSize: 20,
    color: '#FA5D31'
  },
  bitCoinPercentage: {
    fontSize: 20,
    color: '#44DA79'
  },
  portPercentage: {
    fontSize: 20,
    color: '#ffffff'
  },
  commonIcon: {
    flexDirection: 'row',
    padding: 7
  },
  removeIconColor: {
    color: '#FA5D31'
  },
  searchBarRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center'
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
    color: '#00E0C1'
  }
};
