import { useState } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { editPalette, deletePalette } from "../../services/palettes";

export default function Palette({ route, navigation }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { id, initialName, initialAuthor, colors } = route.params;
  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);

  async function edit() {
    const response = await editPalette(id, name, author, colors);

    if (response == "success") {
      Alert.alert("Palette edited with success!");
      setShowEditModal(false);
    } else {
      Alert.alert("Error");
    }
  }

  async function erase() {
    const response = await deletePalette(id);

    if (response == "success") {
      Alert.alert("Palette deleted with success!");
      setShowDeleteModal(false);
      navigation.goBack();
    } else {
      Alert.alert("Error");
    }
  }

  const luminosity = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  var ncol, size;

  if (colors.length <= 4) {
    ncol = 2;
    size = 165;
  } else if (colors.length <= 9) {
    ncol = 3;
    size = 110;
  } else {
    ncol = 4;
    size = 82.5;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{initialName.toUpperCase()}</Text>
      <Text style={styles.author}>by {initialAuthor}</Text>
      <View style={styles.centralized}>
        <FlatList
          style={styles.border}
          data={colors}
          numColumns={ncol}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <View
              style={[
                styles.centralized,
                {
                  backgroundColor: item.item.color,
                  width: size,
                  height: size,
                },
              ]}
            >
              <Text
                style={
                  luminosity(item.item.color) > 186
                    ? styles.hexBlack
                    : styles.hexWhite
                }
              >
                {item.item.color}
              </Text>
            </View>
          )}
          keyExtractor={(item) => colors.indexOf(item)}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#9E71AE" }]}
          onPress={() => setShowEditModal(true)}
        >
          <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#eb4d4d" }]}
          onPress={() => setShowDeleteModal(true)}
        >
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
      {/* edit modal */}
      <Modal visible={showEditModal} transparent={true}>
        <View style={styles.deleteModal}>
          <View style={[styles.deleteModalView, { gap: 0 }]}>
            <Text style={styles.inputText}>Name: </Text>
            <TextInput
              value={name}
              style={styles.input}
              onChangeText={(text) => {
                setName(text);
              }}
            />
            <Text style={styles.inputText}>Author: </Text>
            <TextInput
              value={author}
              style={styles.input}
              onChangeText={(text) => {
                setAuthor(text);
              }}
            />
            <View style={[styles.buttons, { gap: 120, marginTop: 16 }]}>
              <Button
                color="#eb4d4d"
                title="Cancel"
                onPress={() => {
                  setShowEditModal(false);
                  setName(initialName);
                  setAuthor(initialAuthor);
                }}
              />
              <Button color="#9E71AE" title="Confirm" onPress={edit} />
            </View>
          </View>
        </View>
      </Modal>
      {/* delete modal */}
      <Modal visible={showDeleteModal} transparent={true}>
        <View style={styles.deleteModal}>
          <View style={styles.deleteModalView}>
            <Text style={{ fontSize: 16 }}>
              Are you sure you want to delete {name}?
            </Text>
            <View style={[styles.buttons, { gap: 120 }]}>
              <Button
                color="#eb4d4d"
                title="Cancel"
                onPress={() => setShowDeleteModal(false)}
              />
              <Button color="#9E71AE" title="Confirm" onPress={erase} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    gap: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
  },
  author: {
    fontSize: 20,
  },
  centralized: {
    justifyContent: "center",
    alignItems: "center",
  },
  hexWhite: {
    color: "#ffffff",
  },
  hexBlack: {
    color: "#000000",
  },
  border: {
    borderWidth: 3,
    backgroundColor: "#000000",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 160,
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  deleteModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  deleteModalView: {
    margin: 20,
    gap: 32,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
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
