import '@walletconnect/react-native-compat';
import {WagmiConfig} from 'wagmi';
import {mainnet, polygon, arbitrum} from 'viem/chains';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from '@web3modal/wagmi-react-native';
import HomeScreen from './screens/HomeScreen';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  '{"context":"client"}',
  '{"context":"core"}',
  'Possible unhandled promise rejection',
]);

const projectId = 'dee181540782f58a9f57ef39714f7ed0';
const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};
const chains = [mainnet, polygon, arbitrum];
const wagmiConfig = defaultWagmiConfig({chains, projectId, metadata});

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <HomeScreen />
      <Web3Modal />
    </WagmiConfig>
  );
}
