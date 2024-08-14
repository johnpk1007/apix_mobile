import { View, Text } from "react-native";
export const BilboardWeek = ({ billboardWeek }) => {
  return (
    <View className="flex flex-col absolute bottom-0 right-0 justify-center items-end mr-3">
      <Text className="text-white font-poppinBlack text-sm text-right">
        Billboard Hot 100
      </Text>
      <Text className="text-white font-poppinSemiBold text-sm text-right">
        {billboardWeek}
      </Text>
    </View>
  );
};
