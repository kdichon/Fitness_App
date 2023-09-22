import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';

const Calendar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}
        style={{
          backgroundColor: 'black',
          borderRadius: 10,
          margin: 40,
          padding: 10,
          alignItems: 'center',
          width: 200,
        }}>
        <Text style={{color: 'white', fontSize: 22}}>Calendar</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="fade">
        <Calendar />
      </Modal>
    </View>
  );
};

export default Calendar;
