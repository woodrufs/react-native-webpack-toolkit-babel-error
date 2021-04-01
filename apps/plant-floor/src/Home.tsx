import * as React from "react";
import { SafeAreaView, StatusBar, Button } from "react-native";
import { Haptic } from "@strmbrkr/framework/lib/Native";

const { impactHeavy, impactLight, impactMedium, notificationError, notificationSuccess } = Haptic;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Home = ({ navigation }: { navigation: any }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Button
          title="Impact Heavy"
          onPress={() => {
            impactHeavy();
          }}
        />
        <Button
          title="Impact Medium"
          onPress={() => {
            impactMedium();
          }}
        />
        <Button
          title="Impact Heavy"
          onPress={() => {
            impactLight();
          }}
        />
        <Button
          title="Notification Error"
          onPress={() => {
            notificationError();
          }}
        />
        <Button
          title="Notification Success"
          onPress={() => {
            notificationSuccess();
          }}
        />
        <Button
          title="Notification Warning"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </SafeAreaView>
    </>
  );
};
