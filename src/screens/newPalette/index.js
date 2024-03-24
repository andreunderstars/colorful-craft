import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Pressable,
  FlatList,
  Text,
  TextInput,
} from "react-native";
import { useState } from "react";
import ColorPicker, { Panel1, HueSlider } from "reanimated-color-picker";
import ExamplePicture from "./ExamplePicture";

export default function NewPalette() {
  const initialColors = [
    { id: 0, color: "#0d2b45" },
    { id: 1, color: "#203c56" },
    { id: 2, color: "#544e68" },
    { id: 3, color: "#8d697a" },
    { id: 4, color: "#d08159" },
    { id: 5, color: "#ffaa5e" },
    { id: 6, color: "#ffd4a3" },
    { id: 7, color: "#ffecd6" },
  ];
  const [colors, setColors] = useState(initialColors);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [index, setIndex] = useState(0);

  const [showColorModal, setShowColorModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pressed, setPressed] = useState(false);

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
      <ExamplePicture
        color1={colors[0].color}
        color2={colors[1].color}
        color3={colors[2].color}
        color4={colors[3].color}
        color5={colors[4].color}
        color6={colors[5].color}
        color7={colors[6].color}
        color8={colors[7].color}
      />
      <View style={styles.rectangle}>
        <FlatList
          key={"_"}
          data={colors}
          numColumns={4}
          renderItem={(item) => (
            <Pressable
              key={item.item.id}
              style={[styles.pressable, { backgroundColor: item.item.color }]}
              onPress={() => {
                setShowColorModal(true);
                setIndex(item.item.id);
              }}
            />
          )}
          keyExtractor={({ id }) => String(id)}
        />
      </View>

      <View style={styles.button}>
        <Pressable
          style={styles.buttonTop}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          onPress={() => setShowConfirmModal(true)}
        >
          <Text style={styles.text}>CREATE PALETTE</Text>
        </Pressable>
        {!pressed && <View style={styles.buttonSide} />}
      </View>

      <Modal visible={showColorModal} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <ColorPicker
            style={[styles.colorPicker, { width: "70%" }]}
            value={colors[index].color}
            onComplete={onSelectColor}
          >
            <Panel1 />
            <HueSlider />
          </ColorPicker>
          <Button
            color="#C6AACF"
            title="Ok"
            onPress={() => setShowColorModal(false)}
          />
        </View>
      </Modal>

      <Modal visible={showConfirmModal} transparent={true} animationType="fade">
        <View style={styles.confirmModal}>
          <View style={styles.confirmModalView}>
            <Text style={styles.inputText}>Name: </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setName(text);
              }}
            />
            <Text style={styles.inputText}>Author: </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setAuthor(text);
              }}
            />
            <View style={styles.modalButtons}>
              <Button
                color="#eb4d4d"
                title="Cancel"
                onPress={() => setShowConfirmModal(false)}
              />
              <Button
                color="#9E71AE"
                title="Confirm"
                onPress={() => setShowConfirmModal(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 44,
    gap: 64,
    backgroundColor: "#ffffff",
  },
  image: {
    backgroundColor: "#000000",
  },
  rectangle: {
    alignItems: "center",
    justifyContent: "center",
    height: 130,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#C6AACF",
  },
  centered: {
    height: 80,
  },
  pressable: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: "#67536e",
    borderRadius: 4,
    margin: 8,
  },
  modalView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  colorPicker: {
    gap: 10,
  },
  button: {
    height: 94,
    justifyContent: "flex-end",
    marginTop: 48,
  },
  buttonTop: {
    width: 300,
    height: 70,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
    backgroundColor: "#C6AACF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSide: {
    width: 300,
    height: 24,
    backgroundColor: "#9E71AE",
  },
  text: {
    fontSize: 32,
  },
  confirmModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  confirmModalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 330,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 120,
    marginTop: 16,
  },
  inputText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: 300,
    height: 40,
    padding: 10,
    margin: 4,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#e7d3ed",
    borderColor: "#67536e",
  },
});
