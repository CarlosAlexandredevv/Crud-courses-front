import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header/header';
import { CardMetrics } from '../components/CardMetrics/card-metrics';
import { View } from 'react-native';
export default function Home() {
  return (
    <SafeAreaView className="bg-zinc-900 flex-1 p-6 flex-col gap-6">
      <Header />
      <View className="flex-row gap-2">
        <CardMetrics value={4} title="Total" color="white" />
        <CardMetrics value={3} title="Ativos" color="green" />
        <CardMetrics value={4} title="Categorias" color="red" />
      </View>
    </SafeAreaView>
  );
}
