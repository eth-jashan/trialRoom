import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Modalize} from 'react-native-modalize';
import ProfileInfoCard from '../../component/ProfileScreenComponent/ProfileInfoCard';
import VirtualGeneratedList from '../../component/ProfileScreenComponent/VirtualGenratedList';

// Types
type RootStackParamList = {
  MyScreen: {someParam: string};
  [key: string]: object | undefined;
};

type MyScreenProps = NativeStackScreenProps<RootStackParamList, 'MyScreen'>;

const {height, width} = Dimensions.get('window');

const MyScreen: React.FC<MyScreenProps> = ({navigation}) => {
  // Constants
  const MODAL_HEIGHT_GENERATE = height * 0.5;
  const MODAL_HEIGHT_LIST = height * 0.7;
  const SAMPLE_DATA = Array(6).fill('1'); // Better way to initialize array

  // Refs
  const generateModalizeRef = useRef<Modalize>(null);
  const generatedListModalizeRef = useRef<Modalize>(null);

  // State
  const [generatedImage] = useState(
    'https://cdn.midjourney.com/1aad8ebe-7e70-4893-8868-c7a9850263e9/0_0.jpeg',
  );

  // Handlers
  const handleGenerateOpen = () => generateModalizeRef.current?.open();
  const handleMyListOpen = () => generatedListModalizeRef.current?.open();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: generatedImage}}
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        <View style={styles.contentContainer}>
          <ProfileInfoCard
            onListModalOpen={handleMyListOpen}
            image={generatedImage}
          />

          <TouchableOpacity
            style={styles.tryOnButton}
            onPress={handleGenerateOpen}
            activeOpacity={0.8}>
            <Text style={styles.tryOnButtonText}>
              Try Virtual-Try-On 👔🧥👚
            </Text>
          </TouchableOpacity>
        </View>

        <Modalize
          modalHeight={MODAL_HEIGHT_GENERATE}
          ref={generateModalizeRef}
          handlePosition="inside"
          modalStyle={styles.modalContainer}>
          <View style={styles.generateModalContent} />
        </Modalize>

        <Modalize
          modalHeight={MODAL_HEIGHT_LIST}
          ref={generatedListModalizeRef}
          handlePosition="inside"
          modalStyle={styles.modalContainer}>
          <VirtualGeneratedList data={SAMPLE_DATA} />
        </Modalize>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: height,
  },
  contentContainer: {
    marginTop: height * 0.5,
  },
  tryOnButton: {
    width: '90%',
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 12,
    borderRadius: 50,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  tryOnButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  generateModalContent: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MyScreen;
