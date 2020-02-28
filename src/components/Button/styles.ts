import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  baseStyle: {
    width: '100%',
    height: 42,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#c9c9c9',
    borderWidth: 4,
  },
  baseTextStyle: {
    textAlign: 'center',
  },
  primaryStyle: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  primaryTextStyle: {
    color: 'white',
  },
  primaryDisabledStyle: {
    backgroundColor: 'grey',
    borderColor: 'grey',
  },
  primaryTextDisabledStyle: {
    color: 'white',
  },
  secondaryStyle: {
    backgroundColor: 'white',
    borderColor: 'blue',
  },
  secondaryTextStyle: {
    color: 'blue',
  },
  secondaryDisabledStyle: {
    backgroundColor: 'grey',
    borderColor: 'grey',
  },
  secondaryTextDisabledStyle: {
    color: 'white',
  },
  iconStyle: {
    //marginRight: 8
    backgroundColor: 'transparent',
  },
});
