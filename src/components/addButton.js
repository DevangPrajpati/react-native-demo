
import React, {Component} from 'react';
import {Animated, TouchableHighlight, View} from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import { Constants, LinearGradient} from 'expo';

const SIZE = 80;

class AddButton extends Component {
    mode = new Animated.Value(0);

    toggleView = () => {
        Animated.timing(this.mode, {
            toValue: this.mode._value === 0 ? 1 : 0,
            duration: 300
        }).start();
    };

    render() {
        const firstX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -45]
        });
        const firstY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50]
        });
        const secondX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0]
        });
        const secondY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -95]
        });
        const thirdX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 80]
        });
        const thirdY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50]
        });

        const opacity = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        });

        return (
            <View style={{position: 'absolute',alignItems: 'center'}}>
                <Animated.View style={{position: 'absolute',left: firstX,top: firstY,opacity}}>
                    <TouchableHighlight
                        onPress={() => {}}
                        style={{alignItems: 'center',justifyContent: 'center',width: SIZE / 2,height: SIZE / 2,borderRadius: SIZE / 4,}}
                    >
                      <LinearGradient
                       colors={['#F7B094', '#F5A489', '#F49C83', '#F2957D']}
                       start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                       style={{borderRadius: 50, padding: 8}}
                      >
                        <Icon name="edit" size={20} color="#F8F8F8"/>
                      </LinearGradient>
                    </TouchableHighlight>
                </Animated.View>
                <Animated.View style={{position: 'absolute',left: secondX,top: secondY,opacity}}>
                    <TouchableHighlight
                        onPress={() => {}}
                        style={{alignItems: 'center',justifyContent: 'center',width: SIZE ,height: SIZE ,borderRadius: SIZE / 2}}
                    >
                    <LinearGradient
                       colors={['#2A99BA', '#1F8DB6', '#127EB1', '#026DAC']}
                       start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                       style={{borderRadius: 100, padding: 12}}
                      >
                        <Icon name="th" size={28} color="#F8F8F8"/>
                    </LinearGradient>
                    </TouchableHighlight>
                </Animated.View>
                <Animated.View style={{position: 'absolute',left: thirdX,top: thirdY,opacity}}>
                    <TouchableHighlight
                        onPress={() => {}}
                        style={{alignItems: 'center',justifyContent: 'center',width: SIZE / 2,height: SIZE / 2,borderRadius: SIZE / 4}}
                    >
                    <LinearGradient
                     colors={['#8A8AF4', '#7188ED', '#5686E5', '#3D84DE']}
                     start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                     style={{borderRadius: 50, padding: 8}}
                    >
                        <Icon name="table" size={20} color="#F8F8F8"/>
                    </LinearGradient>
                    </TouchableHighlight>
                </Animated.View>

                <TouchableHighlight
                    onPress={this.toggleView}
                    underlayColor={'transparent'}
                    style={{alignItems: 'center',justifyContent: 'center',width: SIZE,height: SIZE,borderRadius: SIZE / 2,zIndex: 1}}
                >
                  <View style={{flex: 1}}>
                    <LinearGradient
                     colors={['#8ADE8E', '#56C3A4']}
                     start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                     style={{borderRadius: 80, padding: 20}}
                   >
                      <Icon name="columns" size={28} color="#FFFFFF"/>
                  </LinearGradient>
                  </View>
                </TouchableHighlight>
            </View>
        );
    }
}

export {AddButton};
