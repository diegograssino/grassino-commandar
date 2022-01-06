import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../components/CustomButton';
import ItemButton from '../components/ItemButton';
import { selectItem } from '../store/actions/items.action';
import { COLORS } from '../constants/colors';

function ScreenItemList({ route, navigation }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const selectedItem = useSelector((state) => state.items.selected);
  const selectedTable = useSelector((state) => state.tables.selected);
  const handleSelectItem = (item) => {
    dispatch(selectItem(item.id));
    navigation.navigate('ScreenItemDetail', {
      tableId: route.params.tableId,
      itemId: item.id,
    });
  };
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.success,
          paddingTop: 10,
          paddingBottom: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontFamily: 'FiraSans_700Bold',
            fontSize: 17,
            paddingBottom: 5,
          }}
        >
          {selectedTable ? `Mesa ${selectedTable}` : 'Seleccione una mesa:'}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FlatList
          style={{
            width: '90%',
            marginTop: 20,
          }}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemButton
              title={item.title}
              onPress={() => handleSelectItem(item)}
            />
          )}
        />
        <CustomButton
          title="Siguiente pantalla"
          onPress={() =>
            navigation.navigate('ScreenItemDetail', {
              tableId: selectedTable,
              itemId: selectedItem,
            })
          }
        />
      </View>
    </>
  );
}

export default ScreenItemList;
