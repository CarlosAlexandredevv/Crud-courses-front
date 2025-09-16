import { TextInput } from 'react-native';
import { useState } from 'react';

interface InputSearchProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export function InputSearch({
  placeholder,
  value,
  onChangeText,
}: InputSearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  const focusClass = isFocused ? 'border-purple-800' : 'border-zinc-700';

  return (
    <TextInput
      className={`text-zinc-100 border ${
        focusClass
      } bg-zinc-800 rounded-md p-4`}
      cursorColor="#6b21a8"
      selectionColor="#6b21a8"
      placeholder={placeholder}
      placeholderTextColor="#a1a1aa"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value={value}
      onChangeText={onChangeText}
    />
  );
}
