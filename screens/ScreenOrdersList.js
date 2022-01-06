import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import GreenBar from '../components/GreenBar';
import ItemButton from '../components/ItemButton';
import { COLORS } from '../constants/colors';

function ScreenOrdersList() {
  const order = useSelector((state) => state.order.order);

  const selectedTable = useSelector((state) => state.tables.selected);
  return (
    <>
      <GreenBar table={selectedTable} />

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FlatList
          style={{
            width: '90%',
            paddingTop: 10,
          }}
          data={order}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemButton title={item.name} />}
        />
      </View>

      {order ? (
        <View
          style={{
            backgroundColor: COLORS.info,
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 0,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <CustomButton
            backgroundColor={COLORS.success}
            title="Enviar"
            icon={<Entypo name="circle-with-plus" size={15} color="white" />}
            width={120}
          />
          <CustomButton
            backgroundColor={COLORS.danger}
            title="Borrar"
            icon={<Entypo name="circle-with-cross" size={15} color="white" />}
            width={120}
          />
        </View>
      ) : null}
    </>
  );
}

export default ScreenOrdersList;
