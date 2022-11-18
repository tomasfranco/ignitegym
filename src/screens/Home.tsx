import { useState } from 'react';
import { VStack, FlatList, HStack, Heading, Text } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Triceps', 'Ombro', 'Braço', 'Perna'])
  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terra'])
  const [groupSelected, setGroupSelected] = useState('ombro');

  return(
    <VStack flex={1}>
      <HomeHeader />
      <FlatList 
        data={groups} 
        keyExtractor={ item => item}
        renderItem={({item}) => (
          <Group 
          name={item}
          isActive={groupSelected === item} 
          onPress={() => setGroupSelected(item)}          
          />
         )}
         horizontal
         showsHorizontalScrollIndicator={false}
         _contentContainerStyle={{px: 8}}
         my={10}
         maxH={10}
        /> 

          <VStack flex={1}  px={8}>
            <HStack justifyContent="space-between" mb={5}>
              <Heading color="gray.200" fontSize="md">
                Exercício
              </Heading>

              <Text color="gray.200" fontSize="sm">
                  {exercises}
              </Text>
            </HStack>

         
       
            <FlatList
              data={exercises}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <ExerciseCard />
              )}
              showsVerticalScrollIndicator={false}
              _contentContainerStyle={{ paddingBottom: 20}}
            />

          </VStack>
    </VStack>
  );
}