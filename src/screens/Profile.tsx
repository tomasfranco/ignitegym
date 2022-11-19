import { Center, ScrollView, VStack, Skeleton, Text, Heading } from "native-base"
import { TouchableOpacity } from "react-native";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";

import { useState } from "react";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
        { photoIsLoading ?
        <Skeleton 
          w={PHOTO_SIZE} 
          h={PHOTO_SIZE}
          rounded="full"
          startColor="gray.500"
          endColor="gray.400"
          />
          :
        <UserPhoto
          source={{ uri: 'https://github.com/tomasfranco.png'}}
          alt="Foto do Usuário"
          size={PHOTO_SIZE}
        />
      }     
        <TouchableOpacity>
          <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>Alterar foto</Text>
        </TouchableOpacity>  
        <Input 
          bg="gray.600"
          placeholder="Nome"
        />    
        <Input 
          bg="gray.600"
          placeholder="CPF"
          isDisabled
        />   
        <Input 
          bg="gray.600"
          value="E-mail"
          isDisabled
        />   
        </Center>

      <VStack px={10} mt={12} mb={9}>
        <Heading color="gray.200" fontSize="md" mb={6}>
          Alterar senha
        </Heading>

        <Input
        bg="gray.600"
        placeholder="Senha antiga"
        secureTextEntry
        />

      <Input
        bg="gray.600"
        placeholder="Nova senha"
        secureTextEntry
        />
      <Input
        bg="gray.600"
        placeholder="Confirme sua nova senha"
        secureTextEntry
        />        

      <Button
        title="Atualizar"
        mt={4}
      />
        
      </VStack>

      </ScrollView>
    </VStack>
  );
}