import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { selectTable } from '../store/actions/tables.action';
import { COLORS } from '../constants/colors';
const ScreenTables = ({ navigation }) => {
  const dispatch = useDispatch();
  const tables = useSelector(state => state.tables.tables);
  const selectedTable = useSelector(state => state.tables.selected);

  const handleSelectTable = item => {
    dispatch(selectTable(item.id));
    navigation.navigate('ScreenItemList');
    // {
    //   name: item.title,
    //   itemID: item.id,
    // };
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FlatList
        data={tables}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CustomButton title={item.title} onPress={() => handleSelectTable(item)} />}
      />
      <Text style={{ fontFamily: 'Poppins_400Regular' }}>{`Mesa nro ${selectedTable}`}</Text>
      <CustomButton title="Siguiente pantalla" onPress={() => navigation.navigate('ScreenItemList')} />
    </View>
  );
};

export default ScreenTables;
