import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import * as React from "react";

interface Props {
  source: ImageSourcePropType;
  width: number;
  height: number;
}

export const CircleImage = ({ source, width, height }: Props) => (
  <Image style={{ width, height, borderRadius: width / 2 }} source={source} />
);
