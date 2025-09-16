import { Screen } from '../components/Screen/screen';
import { Header } from '../components/Header/header';
import { CardMetrics } from '../components/CardMetrics/card-metrics';
import { View } from 'react-native';
export default function Home() {
  return (
    <Screen className="bg-zinc-900 p-6">
      <View className="flex flex-col gap-6">
        <Header />
        <View className="flex-row gap-2">
          <CardMetrics value={4} title="Total" color="white" />
          <CardMetrics value={3} title="Ativos" color="green" />
          <CardMetrics value={4} title="Inativos" color="red" />
        </View>
      </View>
    </Screen>
  );
}
