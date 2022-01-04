import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { selectTable } from '../store/actions/tables.action';
import { COLORS } from '../constants/colors';
import TableButton from '../components/TableButton';

function ScreenTables({ navigation }) {
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables.tables);
  const selectedTable = useSelector((state) => state.tables.selected);

  function handleSelectTable(item) {
    dispatch(selectTable(item.id));
    navigation.navigate('ScreenItemList', {
      tableId: item.id,
    });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
      }}
    >
      <FlatList
        numColumns={3}
        data={tables}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TableButton
            title={item.title}
            onPress={() => handleSelectTable(item)}
          />
        )}
      />
      <Text style={{ fontFamily: 'FiraSans_400Regular' }}>
        {`Mesa nro ${selectedTable}`}
      </Text>
      <CustomButton
        title="Siguiente pantalla"
        onPress={() =>
          navigation.navigate('ScreenItemList', {
            tableId: selectedTable,
          })
        }
      />
    </View>
  );
}

export default ScreenTables;
