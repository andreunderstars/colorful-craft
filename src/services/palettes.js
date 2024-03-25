import React from "react";
import api from "./api";

export async function createPalette(name, author, colors) {
  try {
    await api.post("/palettes", {
      name: name,
      author: author,
      colors: colors,
    });
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
}

export async function editPalette(id, name, author, colors) {
  try {
    await api.put(`/palettes/${id}`, {
      id: id,
      name: name,
      author: author,
      colors: colors,
    });
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
}

export async function deletePalette(id) {
  try {
    await api.delete(`/palettes/${id}`);
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
}
