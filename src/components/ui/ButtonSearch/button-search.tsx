import { TouchableOpacity, Text } from 'react-native';

interface ButtonSearchProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
  variant?: 'default' | 'secondary';
}

export function ButtonSearch({
  children,
  className,
  onPress,
  variant = 'default',
}: ButtonSearchProps) {
  const variantClass = {
    default: 'bg-purple-800',
    secondary: 'bg-zinc-800',
  };

  return (
    <TouchableOpacity
      className={`rounded-md px-6 py-4 ${variantClass[variant]} ${className}`}
      onPress={onPress}
    >
      <Text className="text-white font-semibold">{children}</Text>
    </TouchableOpacity>
  );
}
