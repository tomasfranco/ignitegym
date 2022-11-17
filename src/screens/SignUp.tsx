import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base';

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignUp() {
  const navigation = useNavigation();

function handleGoBack(){
  navigation.goBack();
}
  return (
    <ScrollView contentContainerStyle={{ flexGrow:1}} showsVerticalScrollIndicator={false}>
    <VStack flex={1} bg="gray.700" px={5} pb={16}>
      <Image 
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando - Background"
        resizeMode="contain"
        position="absolute"
        />

      <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
      </Center>

      <Center>
      <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
        Crie sua Conta
      </Heading>
  

      <Input
       placeholder="Nome"
      />
   
      <Input
       placeholder="E-mail"
       keyboardType="email-address"
       autoCapitalize="none"
       />

      <Input
       placeholder="Senha"
       secureTextEntry
       />

       <Button title="Criar e acessar"/>
       </Center>

  
       <Button mt={24}
        title="Voltar para login"
        variant="outline"
        onPress={handleGoBack}
        />
       

    </VStack>
    </ScrollView>
  );
}