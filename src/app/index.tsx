import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header/header';

export default function Home() {
  return (
    <SafeAreaView className="bg-zinc-900 flex-1 p-6">
      <Header />
    </SafeAreaView>
  );
}
