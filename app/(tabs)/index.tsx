import { View, Text } from '@gluestack-ui/themed';

export default function HomeScreen() {
  return (
    <View h="$full" w="$full" justifyContent='center' alignItems='center' bg="$warmGray900">
      <Text style={{ fontFamily: 'SpaceMono', fontSize: 20 }} color="$white">
        GymBro App
      </Text>
    </View>
  );
}
