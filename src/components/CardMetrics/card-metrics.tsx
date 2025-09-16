import { View, Text } from 'react-native';

interface CardMetricsProps {
  value: number;
  title: string;
  color: 'white' | 'green' | 'red';
}

export function CardMetrics({ value, title, color }: CardMetricsProps) {
  const getTextColor = () => {
    switch (color) {
      case 'white':
        return 'text-white';
      case 'green':
        return 'text-green-500';
      case 'red':
        return 'text-red-500';
      default:
        return 'text-white';
    }
  };

  return (
    <View className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 flex-1">
      <View className="items-center justify-center gap-2">
        <Text className={`text-3xl font-bold ${getTextColor()}`}>{value}</Text>
        <Text className="text-zinc-400 text-sm">{title}</Text>
      </View>
    </View>
  );
}
