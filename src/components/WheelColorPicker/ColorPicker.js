import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

const ColorPickers = () => {
  const [currentColor, setCurrentColor] = useState();
  return (
    <>
      <View style={styles.colorPickerContainer}>
        <ColorPicker
          ref={r => {
            this.picker = r;
          }}
          color={currentColor}
          onColorChange={e => setCurrentColor(e)}
          thumbSize={30}
          swatches={false}
          sliderSize={0}
          noSnap={true}
          row={false}
        />
      </View>
      <View style={styles.pieChartFirstView}>
        <Text style={styles.pieChartFirstLineLabel}>healing &</Text>
        <Text style={styles.pieChartSecondLineLabel}>Immunity</Text>
      </View>
      <View style={styles.pieChartSecondView}>
        <Text style={styles.pieChartFirstLineLabel}>energy &</Text>
        <Text style={styles.pieChartSecondLineLabel}>positivity</Text>
      </View>
      <View style={styles.pieChartThirdView}>
        <Text style={styles.pieChartFirstLineLabel}>creativity</Text>
        <Text style={styles.pieChartSecondLineLabel}>& vision</Text>
      </View>
      <View style={styles.pieChartdFourthView}>
        <Text style={styles.pieChartFirstLineLabel}>relaxation</Text>
        <Text style={styles.pieChartSecondLineLabel}>& stillness</Text>
      </View>
    </>
  );
};

export default ColorPickers;

const styles = StyleSheet.create({
  colorPickerContainer: {
    height: '90%',
    width: '90%',
  },
  pieChartFirstLineLabel: {
    fontFamily: 'khula-regular',
    top: 7,
    color: '#818587',
  },
  pieChartSecondLineLabel: {
    fontFamily: 'khula-regular',
    color: '#818587',
  },
  pieChartFirstView: {
    position: 'absolute',
    top: 60,
    left: 15,
  },
  pieChartSecondView: {
    position: 'absolute',
    top: 60,
    right: 15,
  },
  pieChartThirdView: {
    position: 'absolute',
    bottom: 70,
    right: 15,
  },
  pieChartdFourthView: {
    position: 'absolute',
    bottom: 70,
    left: 15,
  },
});
