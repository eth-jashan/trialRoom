import * as React from 'react';
import {
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('screen');
// import {AntDesign} from '@expo/vector-icons';
import {faker} from '@faker-js/faker';

import Icon from 'react-native-vector-icons/AntDesign';
import {BlurView} from '@react-native-community/blur';

// import {StatusBar} from 'expo-status-bar';

const IMAGE_WIDTH = width * 0.65;
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.7;
const images = [
  'https://images.pexels.com/photos/1799912/pexels-photo-1799912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1769524/pexels-photo-1769524.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1758101/pexels-photo-1758101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1738434/pexels-photo-1738434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1698394/pexels-photo-1698394.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1684429/pexels-photo-1684429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1690351/pexels-photo-1690351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1668211/pexels-photo-1668211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1647372/pexels-photo-1647372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1616164/pexels-photo-1616164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1799901/pexels-photo-1799901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1774301/pexels-photo-1774301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1734364/pexels-photo-1734364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

faker.seed(100);

const DATA = [...Array(images.length).keys()].map((_, i) => {
  return {
    key: faker.string.uuid(),
    image: images[i],
    title: faker.commerce.productName(),
    subtitle: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});
const SPACING = 20;

const Content = ({item}) => {
  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 16,
          textTransform: 'uppercase',
        }}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {item.title}
      </Text>
      <Text style={{fontSize: 12, opacity: 0.4}}>{item.subtitle}</Text>
    </>
  );
};

const OOTDCarousel = ({image}: {image: string}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const progress = Animated.modulo(Animated.divide(scrollX, width), width);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const flatListRef = React.useRef();
  return (
    <ImageBackground
      style={{
        width: '100%',
        alignSelf: 'center',
        marginBottom: 30,
        alignItems: 'center',
        flexDirection: 'row',
      }}
      src={image}>
      <BlurView
        blurAmount={50}
        blurType="regular"
        style={StyleSheet.absoluteFillObject}
      />
      <View>
        <View style={{height: IMAGE_HEIGHT * 2.1}}>
          <Animated.FlatList
            data={DATA}
            keyExtractor={item => item.key}
            horizontal
            pagingEnabled
            ref={flatListRef}
            bounces={false}
            onMomentumScrollEnd={e => {
              setCurrentIndex(
                Math.floor(e.nativeEvent.contentOffset.x / width),
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            style={{flexGrow: 0, zIndex: 999999}}
            contentContainerStyle={{
              height: IMAGE_HEIGHT + SPACING * 2,
              paddingHorizontal: SPACING * 2,
              alignItems: 'center',
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
              });
              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [50, 0, 20],
              });
              return (
                <Animated.View
                  style={{
                    width,
                    opacity,
                    transform: [{translateY}],
                    paddingVertical: SPACING,
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      width: IMAGE_WIDTH,
                      height: IMAGE_HEIGHT,
                      resizeMode: 'cover',
                    }}
                  />
                </Animated.View>
              );
            }}
          />
          <View
            style={{
              width: IMAGE_WIDTH,
              alignItems: 'center',
              paddingHorizontal: SPACING * 2,
              marginLeft: SPACING * 2,
              zIndex: 9999999,
            }}>
            {DATA.map((item, index) => {
              const inputRange = [
                (index - 0.2) * width,
                index * width,
                (index + 0.2) * width,
              ];
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
              });
              const rotateY = scrollX.interpolate({
                inputRange,
                outputRange: ['45deg', '0deg', '45deg'],
              });
              return (
                <Animated.View
                  key={index}
                  style={{
                    opacity,
                    transform: [
                      {perspective: IMAGE_WIDTH * 4},
                      {
                        rotateY,
                      },
                    ],
                    position: 'absolute',
                  }}>
                  <Content item={item} />
                </Animated.View>
              );
            })}
          </View>
          <Animated.View
            style={{
              width: IMAGE_WIDTH + SPACING * 2,
              position: 'absolute',
              backgroundColor: 'white',
              backfaceVisibility: true,
              zIndex: -1,
              top: SPACING * 2,
              left: SPACING,
              bottom: 0,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 24,
              transform: [
                {perspective: IMAGE_WIDTH * 4},
                {
                  rotateY: progress.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['0deg', '90deg', '180deg'],
                  }),
                },
              ],
              shadowOffset: {
                width: 0,
                height: 0,
              },
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: IMAGE_WIDTH + SPACING * 4,
            paddingHorizontal: SPACING,
            paddingVertical: SPACING,
          }}>
          <TouchableOpacity
            onPress={() => {
              flatListRef?.current?.scrollToOffset({
                offset: (currentIndex - 1) * width,
                animated: true,
              });
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="swapleft" size={42} color="white" />
              <Text style={{fontSize: 12, color: 'white', fontWeight: '800'}}>
                PREV
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              flatListRef?.current?.scrollToOffset({
                offset: (currentIndex + 1) * width,
                animated: true,
              });
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12, color: 'white', fontWeight: '800'}}>
                NEXT
              </Text>
              <Icon name="swapright" size={42} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default OOTDCarousel;
