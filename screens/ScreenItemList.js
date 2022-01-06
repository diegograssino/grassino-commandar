import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ItemButton from '../components/ItemButton';
import { selectItem } from '../store/actions/items.action';
import GreenBar from '../components/GreenBar';

function ScreenItemList({ route, navigation }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  // const selectedItem = useSelector((state) => state.items.selected);
  const selectedTable = useSelector((state) => state.tables.selected);
  const handleSelectItem = (item) => {
    dispatch(selectItem(item.id));
    navigation.navigate('ScreenItemDetail', {
      tableId: route.params.tableId,
      tableName: route.params.tableName,
      itemId: item.id,
    });
  };
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
        <FlatList
          style={{
            width: '90%',
            paddingTop: 10,
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
        {/* <CustomButton
          title="Siguiente pantalla"
          onPress={() =>
            navigation.navigate('ScreenItemDetail', {
              tableId: selectedTable,
              itemId: selectedItem,
            })
          }
        /> */}
      </View>
    </>
  );
}

export default ScreenItemList;
