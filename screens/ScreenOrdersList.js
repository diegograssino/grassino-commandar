import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-web';
import { useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import GreenBar from '../components/GreenBar';
// import ItemButton from '../components/ItemButton';

function ScreenOrdersList() {
  const items = useSelector((state) => state.order.items);

  const selectedTable = useSelector((state) => state.tables.selected);
  return (
    <>
      <GreenBar table={selectedTable} />

      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <FlatList
          style={{
            width: '90%',
            paddingTop: 10,
          }}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        /> */}
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          paddingBottom: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CustomButton title="Enviar" />
        <CustomButton title="Borrar" />
      </View>
    </>
  );
}

export default ScreenOrdersList;
