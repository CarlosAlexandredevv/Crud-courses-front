import { View, Text } from 'react-native';
import { InputSearch } from '../ui/InputSearch/input-search';
import { ButtonSearch } from '../ui/ButtonSearch/button-search';

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
        <ButtonSearch variant="secondary" onPress={onClear}>
          <Text>Limpar</Text>
        </ButtonSearch>
        <ButtonSearch variant="default" onPress={onSearch}>
          <Text>Filtrar</Text>
        </ButtonSearch>
      </View>
    </View>
  );
}
