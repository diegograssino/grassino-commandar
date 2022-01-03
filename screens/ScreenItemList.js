import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { selectItem } from '../store/actions/items.action';

function ScreenItemList({ route, navigation }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const selectedItem = useSelector((state) => state.items.selected);
  // const selectedTable = useSelector((state) => state.tables.selected)
  const handleSelectItem = (item) => {
    dispatch(selectItem(item.id));
    navigation.navigate('ScreenItemDetail', {
      navigation,
    });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomButton
            title={item.title}
            onPress={() => handleSelectItem(item)}
          />
        )}
      />
      <Text>{`Mesa nro ${route.params.tableId}`}</Text>
      <Text>{`Item nro ${selectedItem}`}</Text>

      <CustomButton
        title="Siguiente pantalla"
        onPress={() => navigation.navigate('ScreenItemDetail')}
      />
    </View>
  );
}

export default ScreenItemList;
