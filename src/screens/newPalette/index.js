import React from "react";
import { Text, View, StyleSheet, Button, Modal, Pressable } from "react-native";
import { useState } from "react";
import ColorPicker, {
  Panel1,
  Preview,
  HueSlider,
} from "reanimated-color-picker";

export default function NewPalette() {
  const [showModal, setShowModal] = useState(false);
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#000000");
  const [color3, setColor3] = useState("#000000");
  const [color4, setColor4] = useState("#000000");

  const onSelectColor1 = ({ hex }) => {
    console.log(hex);
    setColor1(hex);
  };
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Pressable
          style={[styles.button, { backgroundColor: color1 }]}
          onPress={() => setShowModal(true)}
        />
        <Pressable
          style={[styles.button, { backgroundColor: color2 }]}
          onPress={() => setShowModal(true)}
        />
        <Pressable
          style={[styles.button, { backgroundColor: color3 }]}
          onPress={() => setShowModal(true)}
        />
        <Pressable
          style={[styles.button, { backgroundColor: color4 }]}
          onPress={() => setShowModal(true)}
        />
      </View>

      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <ColorPicker
            style={{ width: "70%" }}
            value={color1}
            onComplete={onSelectColor1}
          >
            <Preview />
            <Panel1 />
            <HueSlider />
          </ColorPicker>
          <Button title="Ok" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 276,
    height: 120,
    backgroundColor: "#C6AACF",
    gap: 20,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: "#000000",
  },
  modalView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 500,
  },
});
