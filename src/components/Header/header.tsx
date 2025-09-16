import { View, Text } from 'react-native';
import { Logo } from '../Logo/logo';
export function Header() {
  return (
    <View className="flex-row gap-3 ">
      <Logo />
      <View className="flex-1">
        <Text className="text-zinc-100 text-2xl font-bold">Cursos</Text>
        <Text className="text-zinc-400 text-sm">Gerencie seus cursos.</Text>
      </View>
    </View>
  );
}
