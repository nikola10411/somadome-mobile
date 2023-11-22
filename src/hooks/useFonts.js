import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    babes: require("../../assets/fonts/BebasNeue-Book.otf"),
    khula: require("../../assets/fonts/Khula-Regular.ttf"),
    ptsans: require("../../assets/fonts/PTSans-Regular.ttf"),
  });
