import React, {useRef, useState} from 'react';
import {
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {colors} from '../../theme/colors'
const {width, height} = Dimensions.get('screen');

import color from '../../../assets/constants/color';
import data from '../../../assets/constants/data';

const bgs = [colors.bg1, colors.bg2, colors.bg3, colors.bg4];

const Backdrop = ({scrollX}) => {
  //[0,width,width*2,...]
  const bg = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map(bg => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, {backgroundColor: bg,opacity:1}]}
    />
  );
};

const Indicator = ({scrollX}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: height * 0.15,
        flexDirection: 'row',
      }}>
      {data.map((_, i) => {
        //interpolation for each dot
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 8,
              width: 8,
              borderRadius: 5,
              backgroundColor: colors.white,
              opacity,
              margin: 10,
              transform: [{scale}],
            }}
          />
        );
      })}
    </View>
  );
};

const Square = ({scrollX}) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['50deg', '0deg', '40deg'],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <Animated.View
      style={{
        width: height * 0.9,
        height: width,
        top: -height * 0.25,
        left: -height * 0.21,
        backgroundColor: colors.white,
        borderRadius: 86,
        position: 'absolute',
        transform: [{rotate}, {translateX}],
      }}
    />
  );
};

export default function WelcomeScreen({navigation}) {
  const NextButton = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Auth')}
        style={{
          position: 'absolute',
          bottom: height * 0.08,
          backgroundColor:colors.white,
          padding: 5,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
        }}>
        <Text
          style={{
            fontSize: 14,
            alignSelf: 'center',
            justifyContent: 'center',
            color: colors.black,
            letterSpacing: 1,
          }}>
          Get Started!
        </Text>
      </TouchableOpacity>
    );
  };

  const [endReached, setEndReached] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        onEndReached={() => setEndReached(true)}
        horizontal
        contentContainerStyle={{paddingBottom: 100}}
        showsHorizontalScrollIndicator={false}
        data={data}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        keyExtractor={item => item.key}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View
              style={{
                width,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
              }}>
              <View style={{flex: 0.7, justifyContent: 'center'}}>
                <Image
                  style={{
                    width: width / 3,
                    height: width / 3,
                    marginBottom: 10,
                    marginLeft: 2,
                  }}
                  source={item.image}
                />
              </View>
              <View style={{flex: 0.3}}>
                <Text
                  style={{
                    color: colors.offblack,
                    fontWeight: '600',
                    fontSize: 30,
                    marginBottom: 10,
                    letterSpacing: 1,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: colors.offblack,
                    fontWeight: '400',
                    fontSize: 15,
                    letterSpacing: 1,
                  }}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
      {endReached ? <NextButton /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
