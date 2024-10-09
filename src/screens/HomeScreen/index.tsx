import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '../../component/common/Header';
import StyleCard from '../../component/common/StyleCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileSetupBanner from '../../component/HomeScreenComponent/ProfileSetupBanner';
import OOTDCarousel from '../../component/HomeScreenComponent/OOTDCarousel';

// Assuming you have a RootStackParamList defined in your navigation setup
type RootStackParamList = {
  MyScreen: {someParam: string};
  // Add other screens here
};

type MyScreenProps = NativeStackScreenProps<RootStackParamList, 'MyScreen'>;

const MyScreen: React.FC<MyScreenProps> = ({navigation, route}) => {
  const [data, setData] = useState<string>('');
  const datas = ['1', '1', '1', '1', '1', '1'];

  return (
    <SafeAreaView style={styles.container}>
      {/* <ProfileSetupBanner /> */}
      {/* <OOTDCarousel /> */}
      <FlatList
        data={datas}
        numColumns={2}
        contentContainerStyle={{
          width: '100%',
          alignItems: 'center',
        }}
        ListHeaderComponent={() => (
          <View>
            <ProfileSetupBanner />
            <OOTDCarousel />
          </View>
        )}
        renderItem={({_, index}) => <StyleCard index={index} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingBottom: 30,
  },
});

export default MyScreen;
