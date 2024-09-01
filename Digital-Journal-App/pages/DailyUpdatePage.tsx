import { View, Text, ScrollView } from "react-native";
import React from "react";
import RandomQuote from "../components/Daily Update Page/RandomQuote";
import ThreeBlessings from "../components/Daily Update Page/ThreeBlessings";
import Workout from "../components/Daily Update Page/Workout";
import Goals from "../components/Daily Update Page/Goals";
import Steps from "../components/Daily Update Page/Steps";
import Plans from "../components/Daily Update Page/Plans";

const DailyUpdatePage = () => {
  return (
    <ScrollView>
      <View className="p-5">
        <RandomQuote />
        <ThreeBlessings />
        <Workout />
        <Goals />
        <Steps />
        <Plans />
      </View>
    </ScrollView>
  );
};

export default DailyUpdatePage;
