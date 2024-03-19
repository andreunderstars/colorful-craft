import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import { useState } from "react";
import ColorPicker, {
  Panel1,
  Preview,
  HueSlider,
} from "reanimated-color-picker";

export default function NewPalette() {
  const initialColors = [
    { id: 0, color: "#000000" },
    { id: 1, color: "#575757" },
    { id: 2, color: "#b3b3b3" },
    { id: 3, color: "#ededed" },
    { id: 4, color: "#abcdef" },
    { id: 5, color: "#abcdef" },
    { id: 6, color: "#abcdef" },
  ];
  const [colors, setColors] = useState(initialColors);
  const [index, setIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [color1, setColor1] = useState("#000000");

  function handleChangeColors(hex, index) {
    const NextColors = colors.map((c, i) => {
      if (c.id === index) {
        return { id: c.id, color: hex };
      } else {
        return c;
      }
    });
    setColors(NextColors);
  }

  const onSelectColor = ({ hex }) => {
    handleChangeColors(hex, index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <FlatList
          key={"_"}
          data={colors}
          numColumns={5}
          renderItem={(item) => (
            <Pressable
              key={item.item.id}
              style={[
                styles.button,
                { backgroundColor: item.item.color, margin: 5 },
              ]}
              onPress={() => {
                setShowModal(true);
                setIndex(item.item.id);
              }}
            />
          )}
          keyExtractor={({ id }) => String(id)}
        />
      </View>

      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <ColorPicker
            style={{ width: "70%" }}
            value={colors[index].color}
            onComplete={onSelectColor}
          >
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
