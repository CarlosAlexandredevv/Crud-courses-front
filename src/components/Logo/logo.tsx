import { View } from 'react-native';
import { BookOpen } from 'lucide-react-native';
export function Logo() {
  return (
    <View className="bg-purple-800 justify-center items-center size-12 rounded-xl">
      <BookOpen color="white" size={24} />
    </View>
  );
}
