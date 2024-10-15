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
            'https://images.squarespace-cdn.com/content/v1/50aa7079e4b040d142112688/1521037439197-MNF07W0FOSJ2ENGHO53O/JakeHicksPhotography+%283+of+5%29.jpg'
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
