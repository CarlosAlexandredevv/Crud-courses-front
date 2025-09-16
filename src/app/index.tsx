import { Screen } from '../components/Screen/screen';
import { Header } from '../components/Header/header';
import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/axios';
import { GetCoursesResponse } from '../types/get-courses-response';
import { useState } from 'react';
import { SearchBar } from '../components/SearchBar/search-bar';
import { MetricsGroup } from '../components/MetricsGroup/metrics-group';

export default function Home() {
  const [search, setSearch] = useState('');
  const { data, refetch } = useQuery<GetCoursesResponse>({
    queryKey: ['courses'],
    queryFn: async () => {
      const response = await api.get('/courses', { params: { search } });
      return response.data;
    },
  });

  function onSearch() {
    refetch();
  }

  function clearSearch() {
    setSearch('');
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
          value={search}
          onChange={setSearch}
          onSearch={onSearch}
          onClear={clearSearch}
        />
      </View>
    </Screen>
  );
}
