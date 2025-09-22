import { View, Text } from 'react-native';
import { BookOpen, Search } from 'lucide-react-native';

interface CourseNotFoundProps {
  message?: string;
  showIcon?: boolean;
}

export function CourseNotFound({
  message = 'Nenhum curso encontrado',
  showIcon = true,
}: CourseNotFoundProps) {
  return (
    <View className="flex-1 items-center justify-center py-12 px-6">
      <View className="items-center">
        {showIcon && (
          <View className="mb-6 p-4 bg-zinc-800 rounded-full border-2 border-zinc-600">
            <BookOpen size={48} color="#71717a" />
          </View>
        )}

        <Text className="text-xl font-semibold text-zinc-100 mb-2 text-center">
          {message}
        </Text>

        <Text className="text-base text-zinc-400 text-center leading-6">
          Tente ajustar os filtros de busca ou verifique se o nome do curso está
          correto.
        </Text>

        <View className="mt-6 flex-row items-center gap-2">
          <Search size={16} color="#71717a" />
          <Text className="text-sm text-zinc-500">
            Use a barra de pesquisa para encontrar cursos
          </Text>
        </View>
      </View>
    </View>
  );
}
