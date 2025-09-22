import { View, Text } from 'react-native';
import { InputSearch } from '../ui/InputSearch/input-search';
import { Button } from '../ui/ButtonSearch/button';
interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

export function SearchBar({
  value,
  onChange,
  onSearch,
  onClear,
}: SearchBarProps) {
  return (
    <View className="gap-4">
      <InputSearch
        placeholder="Pesquisar curso"
        value={value}
        onChangeText={onChange}
        returnKeyType="search"
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={onSearch}
      />
      <View className="flex-row gap-2 ml-auto">
        <Button variant="secondary" onPress={onClear}>
          <Text>Limpar</Text>
        </Button>
        <Button variant="default" onPress={onSearch}>
          <Text>Filtrar</Text>
        </Button>
      </View>
    </View>
  );
}
