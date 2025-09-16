import { View } from 'react-native';
import { CardMetrics } from '../CardMetrics/card-metrics';

interface MetricsGroupProps {
  total: number;
  active: number;
  inactive: number;
}

export function MetricsGroup({ total, active, inactive }: MetricsGroupProps) {
  return (
    <View className="flex-row gap-4">
      <CardMetrics value={total} title="Total" color="white" />
      <CardMetrics value={active} title="Ativos" color="green" />
      <CardMetrics value={inactive} title="Inativos" color="red" />
    </View>
  );
}
