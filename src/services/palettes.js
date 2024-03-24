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
