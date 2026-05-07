import React from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

export default function HistoryScreen({ history }) {

  return (
    <View style={styles.container}>

      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text>Kode MK: {item.kodeMK}</Text>

            <Text>
              Pertemuan: {item.pertemuanKe}
            </Text>

            <Text>Status: {item.status}</Text>

            <Text>Ruangan: {item.ruangan}</Text>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10
  },

  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  }

});