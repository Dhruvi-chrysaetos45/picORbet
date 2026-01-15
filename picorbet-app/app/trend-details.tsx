import { View, Text, FlatList, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function TrendDetails() {
  const { name } = useLocalSearchParams(); // Gets the trend name from URL

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Text style={{ color: '#fff', fontSize: 24, padding: 20 }}>{name} Trend</Text>
      {/* Photo grid and Staking buttons go here */}
    </View>
  );
}