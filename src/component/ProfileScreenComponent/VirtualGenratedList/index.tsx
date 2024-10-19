import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import StyleCard from '../../common/StyleCard';
// import StyleCard from '../common/StyleCard';

interface VirtualRunwayModalProps {
  data: any[];
}

const VirtualGeneratedList: React.FC<VirtualRunwayModalProps> = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Virtual Runway</Text>
      <Text style={styles.subtitle}>
        Explore your style transformations – where your wardrobe dreams come to
        life.
      </Text>
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({item, index}) => <StyleCard index={index} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 16,
  },
  subtitle: {
    fontSize: 12,
    color: 'black',
    marginLeft: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default VirtualGeneratedList;
