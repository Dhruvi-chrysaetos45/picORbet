import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const TRENDS = [
  { id: 't1', name: 'Cyberpunk', color: '#00F0FF' },
  { id: 't2', name: 'Minecraft', color: '#00FF00' },
  { id: 't3', name: 'Anime', color: '#FF007A' },
  // ... add up to 7
];

export default function TrendsHub() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 10 }}>
      <FlatList
        data={TRENDS}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => router.push({ pathname: './trend-details', params: { name: item.name } })}
            style={{ backgroundColor: '#111', margin: 5, flex: 1, height: 150, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 5, borderLeftColor: item.color }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}