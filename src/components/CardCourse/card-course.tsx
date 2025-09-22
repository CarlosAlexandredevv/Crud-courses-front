import { Card } from '../ui/Card/card';
import { Text, View } from 'react-native';
import { Course } from '../../types/course';
import {
  CheckCircle,
  XCircle,
  Tag,
  Video,
  Pencil,
  Trash2,
} from 'lucide-react-native';

interface CardCourseProps {
  courses: Course;
}

export function CardCourse({ courses }: CardCourseProps) {
  return (
    <Card>
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-start gap-3 flex-1">
          <Video size={24} color="#ffffff" />
          <View className="flex-1">
            <Text className="text-white text-lg font-bold">{courses.name}</Text>
            <View className="flex-row flex-wrap items-center gap-1 mt-1">
              <Tag size={14} color="#a1a1aa" />
              <Text className=" text-zinc-400 text-sm">{courses.category}</Text>
            </View>
          </View>
        </View>
        <View className="items-center gap-y-3">
          <View className="flex-row items-center gap-2">
            {courses.active ? (
              <CheckCircle size={20} color="#10b981" />
            ) : (
              <XCircle size={20} color="#ef4444" />
            )}
            <Text
              className={`w-14 text-sm font-semibold ${
                courses.active ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {courses.active ? 'Ativo' : 'Inativo'}
            </Text>
          </View>
          <View className="flex-row items-center gap-x-4">
            <Pencil size={20} color="#a1a1aa" />
            <Trash2 size={20} color="#a1a1aa" />
          </View>
        </View>
      </View>
    </Card>
  );
}
