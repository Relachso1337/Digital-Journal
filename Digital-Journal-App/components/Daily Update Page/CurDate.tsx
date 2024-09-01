import { View, Text } from 'react-native';
import React from 'react';

const CurDate = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}.${currentDate.getFullYear()}`;

  return (
    <View>
      <Text className="text-[#007AFF] text-base font-normal">{formattedDate}</Text>
    </View>
  );
};

export default CurDate;
