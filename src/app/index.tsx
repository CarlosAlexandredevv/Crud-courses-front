import { Screen } from '../components/Screen/screen';
import { Header } from '../components/Header/header';
import { View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/axios';
import { GetCoursesResponse } from '../types/get-courses-response';
import { useState } from 'react';
import { SearchBar } from '../components/SearchBar/search-bar';
import { MetricsGroup } from '../components/MetricsGroup/metrics-group';
import { CardCourse } from '../components/CardCourse/card-course';
import { CourseNotFound } from '../components/ui/CourseNotFound/course-not-found';

export default function Home() {
  const [name, setName] = useState('');
  const { data, refetch } = useQuery<GetCoursesResponse>({
    queryKey: ['courses'],
    queryFn: async () => {
      const response = await api.get(`/courses?name=${name}`);
      return response.data;
    },
  });

  function onSearch() {
    refetch();
  }

  function clearSearch() {
    setName('');
    refetch();
  }

  return (
    <Screen className="bg-zinc-900 p-6">
      <View className="flex flex-col gap-6">
        <Header />

        <MetricsGroup
          total={data?.totalItems ?? 0}
          active={data?.active ?? 0}
          inactive={data?.inactive ?? 0}
        />

        <SearchBar
          value={name}
          onChange={setName}
          onSearch={onSearch}
          onClear={clearSearch}
        />

        {data?.courses.map((course) => (
          <CardCourse key={course.id} courses={course} />
        ))}

        {data?.courses.length === 0 && (
          <View className="flex-1 items-center justify-center mt-8">
            <CourseNotFound />
          </View>
        )}
      </View>
    </Screen>
  );
}
