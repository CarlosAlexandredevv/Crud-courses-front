import { Screen } from '../components/Screen/screen';
import { Header } from '../components/Header/header';
import { CardMetrics } from '../components/CardMetrics/card-metrics';
import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/axios';
import { GetCoursesResponse } from '../types/get-courses-response';
import { InputSearch } from '../components/ui/InputSearch/input-search';
import { useState } from 'react';
import { ButtonSearch } from '../components/ui/ButtonSearch/button-search';

export default function Home() {
  const [search, setSearch] = useState('');
  const { data } = useQuery<GetCoursesResponse>({
    queryKey: ['courses'],
    queryFn: async () => {
      const response = await api.get('/courses');
      return response.data;
    },
  });

  function clearSearch() {
    setSearch('');
  }

  return (
    <Screen className="bg-zinc-900 p-6">
      <View className="flex flex-col gap-6">
        <Header />
        <View className="flex-row gap-4">
          <CardMetrics
            value={data?.totalItems ?? 0}
            title="Total"
            color="white"
          />
          <CardMetrics value={data?.active ?? 0} title="Ativos" color="green" />
          <CardMetrics
            value={data?.inactive ?? 0}
            title="Inativos"
            color="red"
          />
        </View>
        <View className="gap-4">
          <InputSearch
            placeholder="Pesquisar curso"
            value={search}
            onChangeText={setSearch}
          />
          <View className="flex-row gap-2 ml-auto">
            <ButtonSearch variant="secondary" onPress={clearSearch}>
              <Text>Limpar</Text>
            </ButtonSearch>
            <ButtonSearch variant="default" onPress={clearSearch}>
              <Text>Filtrar</Text>
            </ButtonSearch>
          </View>
        </View>
      </View>
    </Screen>
  );
}
