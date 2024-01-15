import {View, Image, Text} from 'react-native';

const NFTCard = ({data}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 20,
        margin: 16,
        elevation: 2,
      }}>
      <View
        style={{
          width: '100%',
          height: 250,
        }}>
        <Image
          source={{uri: data.normalized_metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")}}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            zIndex: 10,
          }}
          alt="No Image"
        />
      </View>
      <View style={{width: '100%', padding: 20}}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: '800',
            }}>
            {data.normalized_metadata.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
            }}>
            by {data.normalized_metadata.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
