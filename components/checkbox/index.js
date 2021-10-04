import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  title: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  green: {
    color: 'green',
  },
});

const Checkbox = ({title}) => {
  const [checked, setChecked] = useState(false);
  const onPress = () => {
    setChecked(!checked);
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>checkbox title: {title}</Text>
        {
          <Text style={[styles.title, checked && styles.checked]}>
            {checked ? 'Checked' : 'Not Checked'}
          </Text>
        }
      </View>
    </TouchableOpacity>
  );
};

Checkbox.displayName = 'Checkbox';
export default Checkbox;
