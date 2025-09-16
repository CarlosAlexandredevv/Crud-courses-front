import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonSearchProps extends TouchableOpacityProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary';
}

export function ButtonSearch({
  children,
  className,
  variant = 'default',
  ...rest
}: ButtonSearchProps) {
  const variantClass = {
    default: 'bg-purple-800',
    secondary: 'bg-zinc-800',
  };

  return (
    <TouchableOpacity
      className={`rounded-md px-6 py-4 ${variantClass[variant]} ${className ?? ''}`}
      {...rest}
    >
      <Text className="text-white font-semibold">{children}</Text>
    </TouchableOpacity>
  );
}
