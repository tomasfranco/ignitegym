import { Center, ScrollView, VStack, Skeleton, Text, Heading, HStack, Icon, useToast } from "native-base"
import { Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";

import { useState } from "react";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState('https://github.com/tomasfranco.png')

  const toast = useToast();

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true)
    try {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true
      });
      console.log(photoSelected)

    if(!photoSelected.canceled) {
      const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
      
      if(photoInfo.size && (photoInfo.size / 1024 / 1024) > 1) {
       return toast.show({
        title: "Essa imagem é muito grande. Escolha uma de até 5MB",
        placement: "top",
        bgColor: "red.500",        
       })       
      }
      setUserPhoto(photoSelected.assets[0].uri)
    }    
    } catch (error) {
       console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }


  async function handleUserTakePhoto() {
    await ImagePicker.launchCameraAsync() 
  }

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
          source={{ uri: userPhoto }}
          alt="Foto do Usuário"
          size={PHOTO_SIZE}
        />        
      } <HStack alignItems="center">       
        <Icon 
        as={MaterialIcons}
        name="camera-alt"
        color="green.500"
        size={7}                
        mb={6}                
    />       
        <TouchableOpacity onPress={handleUserTakePhoto}>      
        <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8} ml={2} mr={20}>Tirar Foto</Text>
        </TouchableOpacity>  
        
        <TouchableOpacity onPress={handleUserPhotoSelect}>
          <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>Alterar foto</Text>
        </TouchableOpacity>  
        </HStack>
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
        <Heading color="gray.200" fontSize="md" mb={6} fontFamily="heading">
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