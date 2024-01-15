import {Alert, FlatList, SafeAreaView, View} from 'react-native';
import {W3mButton} from '@web3modal/wagmi-react-native';
import HomeHeader from '../components/HomeHeader';
import NFTCard from '../components/NFTCard';
import {useAccount} from 'wagmi';
import {useEffect, useState} from 'react';

const HomeScreen = () => {
  const [nfts, setNfts] = useState([]);
  const {address, isConnected} = useAccount();

  const handleFetchNFTs = async () => {
    try {
      if (isConnected && address) {
        const res = await fetch('http://192.168.1.6:3000/getAddressNFTs', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({address}),
        });
        const data = await res.json();
        setNfts(data.result);
      } else {
        setNfts([]);
      }
    } catch (error) {
      console.log(error);
      Alert('Something went wrong.');
    }
  };

  useEffect(() => {
    handleFetchNFTs();
  }, [address]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}>
        <View style={{width: '100%', height: '30%', backgroundColor: '#000'}} />
        <View style={{width: '100%', height: '70%', backgroundColor: '#fff'}} />
      </View>
      <HomeHeader />
      <View style={{marginVertical: 5}}>
        <View style={{width: 300}}>
          <W3mButton
            connectStyle={{borderRadius: 10, backgroundColor: '#003eff'}}
            balance="show"
            accountStyle={{backgroundColor: '#00071b', borderRadius: 10}}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={nfts}
          renderItem={({item}) => <NFTCard data={item} />}
          keyExtractor={item => item.token_id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
