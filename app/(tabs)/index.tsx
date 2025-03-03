import { View, Text } from '@gluestack-ui/themed';

export default function HomeScreen() {
  
  return (
    <View h="$full" w="$full" justifyContent='center' alignItems='center' bg="$borderLight950">
      <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }} color="$white">
        HomePage
      </Text>
    </View>
  );
}
