import { VStack, Image } from 'native-base';

import BackgroundImg from '@assets/background.png';

export function SignIn() {
  return (
    <VStack flex={1}>
      <Image 
        source={BackgroundImg}
        alt="Pessoas treinando - Background"
        resizeMode="contain"
        position="absolute"
        />
    </VStack>
  );

}