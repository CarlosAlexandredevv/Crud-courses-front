import { View } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <View
      className={`bg-zinc-800 border-2 border-zinc-600 rounded-lg p-4 ${className ?? ''}`}
      style={{ minHeight: 80 }}
    >
      {children}
    </View>
  );
}
