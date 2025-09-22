import { View, Text } from 'react-native';
import { Logo } from '../Logo/logo';
import { Button } from '../ui/ButtonSearch/button';
import { Plus } from 'lucide-react-native';

export function Header() {
  return (
    <View className="flex-row gap-3 ">
      <Logo />
      <View className="flex-1">
        <Text className="text-zinc-100 text-2xl font-bold">Cursos</Text>
        <Text className="text-zinc-400 text-sm">Gerencie seus cursos.</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <Button variant="default">
          <Plus size={18} color="white" />
        </Button>
      </View>
    </View>
  );
}
