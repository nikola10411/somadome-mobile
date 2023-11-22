import { PixelRatio } from "react-native";

export function GetFontSize() {
  var FONT_HEADING = 25;
  if (PixelRatio.get() <= 2) {
    FONT_HEADING = 20;
  }
  return FONT_HEADING;
}
