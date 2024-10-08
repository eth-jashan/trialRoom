import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

interface StyleCardProps {
  index: number;
  // Add more props as needed
}

const StyleCard: React.FC<StyleCardProps> = ({index}) => {
  return (
    <View style={[styles.cardContainer, {height: index % 2 === 0 ? 350 : 350}]}>
      <View style={styles.innerContainer}>
        <Image
          src={
            'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25507498/2024/1/29/43d7a4fc-5009-4db3-b0a8-1e2474f2e5f61706513413837-Marks--Spencer-Women-Dresses-4501706513413560-1.jpg'
          }
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '50%',
    marginBottom: 6,
    borderRadius: 12,
    alignItems: 'center',
    overflow: 'hidden',
  },
  innerContainer: {
    height: '100%',
    width: '98%',
    // backgroundColor: 'red',
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StyleCard;
