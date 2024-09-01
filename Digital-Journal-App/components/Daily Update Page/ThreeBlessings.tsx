import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThreeBlessings = () => {
  const [FirstBlessing, setFirstBlessing] = useState("");
  const [SecondBlessing, setSecondBlessing] = useState("");
  const [ThirdBlessing, setThirdBlessing] = useState("");

  useEffect(() => {
    const loadBlessings = async () => {
      try {
        const first = await AsyncStorage.getItem('FirstBlessing');
        const second = await AsyncStorage.getItem('SecondBlessing');
        const third = await AsyncStorage.getItem('ThirdBlessing');

        if (first !== null) setFirstBlessing(first);
        if (second !== null) setSecondBlessing(second);
        if (third !== null) setThirdBlessing(third);
      } catch (error) {
        console.error('Failed to load blessings', error);
      }
    };

    loadBlessings();
  }, []);

  useEffect(() => {
    const storeBlessings = async () => {
      try {
        await AsyncStorage.setItem('FirstBlessing', FirstBlessing);
        await AsyncStorage.setItem('SecondBlessing', SecondBlessing);
        await AsyncStorage.setItem('ThirdBlessing', ThirdBlessing);
      } catch (error) {
        console.error('Failed to save blessings', error);
      }
    };

    storeBlessings();
  }, [FirstBlessing, SecondBlessing, ThirdBlessing]);

  return (
    <View className="flex flex-col pb-3">
      <Text className="text-gray-600 font-semibold text-lg ">
        THREE BLESSINGS:
      </Text>

      <View className="flex-row gap-0.5">
        <Text className="text-lg">-</Text>
        <TextInput
          className="text-lg"
          onChangeText={(FirstBlessing) => setFirstBlessing(FirstBlessing)}
          placeholder="First Blessing"
          value={FirstBlessing}
        ></TextInput>
      </View>

      <View className="flex-row gap-1">
        <Text className="text-lg">-</Text>
        <TextInput
          className="text-lg"
          onChangeText={(SecondBlessing) => setSecondBlessing(SecondBlessing)}
          placeholder="Second Blessing"
          value={SecondBlessing}
        ></TextInput>
      </View>

      <View className="flex-row gap-1">
        <Text className="text-lg">-</Text>
        <TextInput
          className="text-lg"
          onChangeText={(ThirdBlessing) => setThirdBlessing(ThirdBlessing)}
          placeholder="Third Blessing"
          value={ThirdBlessing}
        ></TextInput>
      </View>
    </View>
  );
};

export default ThreeBlessings;
