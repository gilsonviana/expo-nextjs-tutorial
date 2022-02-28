import { FC } from 'react';
import { 
  SafeAreaView, 
  View, 
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useRouter } from '../../common/hooks/useRouter';
 
export const SuccessScreen: FC = () => {
  const { goBack } = useRouter();
 
  return (
    <View style={[styles.flex, styles.container]}>
      <SafeAreaView style={[styles.flex, styles.content]}>
        <View style={styles.top}>
          <Text style={styles.text}>Avatar saved</Text>
          <Entypo name="check" size={32} color="#22223b" />
        </View>
        <TouchableOpacity onPress={goBack} style={styles.button}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
 
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    backgroundColor: '#caffbf'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  top: {
    flexDirection: 'row',
    marginBottom: 24
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#22223b'
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 16
  }
});
