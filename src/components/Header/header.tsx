import { Text } from '@react-navigation/elements';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export function Header() {
  return (
    <SafeAreaView>
      <View>
        <Text>Header</Text>
      </View>
    </SafeAreaView>
  );
}
