import { View } from 'react-native';
import { CardMetrics } from '../CardMetrics/card-metrics';

interface MetricsGroupProps {
  total: number;
  active: number;
  inactive: number;
}

export function MetricsGroup({ total, active, inactive }: MetricsGroupProps) {
  return (
    <View className="flex-row gap-3">
      <View className="flex-1">
        <CardMetrics value={total} title="Total" color="white" />
      </View>
      <View className="flex-1">
        <CardMetrics value={active} title="Ativos" color="green" />
      </View>
      <View className="flex-1">
        <CardMetrics value={inactive} title="Inativos" color="red" />
      </View>
    </View>
  );
}
