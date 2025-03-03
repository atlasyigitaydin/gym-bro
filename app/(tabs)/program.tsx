import { View, Text } from '@gluestack-ui/themed';

export default function HomeScreen() {
  return (
    <View h="$full" w="$full" justifyContent='center' alignItems='center' bgColor='$borderLight950'>
      <Text style={{ fontFamily: 'SpaceMono', fontSize: 20 }} color="$white">
        Expore
      </Text>
    </View>
  );
}
