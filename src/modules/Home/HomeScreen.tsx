import { FC, useState } from 'react';
import { 
  ActivityIndicator,
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  Text, 
  StyleSheet
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from '../../common/hooks/useRouter';
 
export const HomeScreen: FC = () => {
  const { navigate } = useRouter();
  const [isUploading, setIsUpload] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);
 
  const onAddPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.cancelled === false) {
      setImageUri(result.uri);
    }
  };
 
  const onUpload = () => {
    setIsUpload(true);
    setTimeout(() => {
      setIsUpload(() => false);
      navigate('Success');
    }, 2500);
  };
 
  const onRemove = () => setImageUri(null);
 
  return (
    <SafeAreaView style={[styles.container, styles.center]}>
      <TouchableOpacity
        style={[styles.imageWrapper, styles.center]}
        onPress={onAddPhoto}
      >
        {imageUri === null
          ? (
            <MaterialIcons name="add-photo-alternate" size={24} color="black" />
          ) 
          : (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )
        }
      </TouchableOpacity>
      <TouchableOpacity 
        disabled={!!!imageUri || isUploading} 
        style={[
          styles.button, 
          imageUri === null || isUploading 
            ? styles.invalid 
            : undefined
        ]}
        onPress={onUpload}
      >
        <Text>Upload</Text>
      </TouchableOpacity>
      {isUploading && (
        <ActivityIndicator />
      )}
      {!isUploading && imageUri !== null && (
        <TouchableOpacity onPress={onRemove}>
          <Text style={styles.danger}>Remove</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageWrapper: {
    width: 86,
    height: 86,
    overflow: 'hidden',
    backgroundColor: 'wheat',
    borderRadius: 43,
    marginBottom: 28
  },
  image: {
    width: 86,
    height: 86
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 16
  },
  invalid: {
    opacity: 0.3
  },
  danger: {
    color: 'red'
  }
});
