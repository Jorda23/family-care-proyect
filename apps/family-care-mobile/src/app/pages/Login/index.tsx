import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';
import { BiometricAuthScreen } from '../../components/BiometricAuthScreen';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://logodix.com/logo/1931272.png' }}
        style={styles.logo}
      />

      <View style={{ width: '100%' }}>
        <Text variant="labelLarge">Email</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          placeholder="Ingrese un correo electrónico"
          style={styles.input}
        />
      </View>

      <View style={{ width: '100%' }}>
        <Text variant="labelLarge">Password</Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mode="outlined"
          placeholder="Ingrese tu contraseña"
          style={styles.input}
        />
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: 20,
          width: '100%',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          <Text variant="labelLarge">Recuérdame</Text>
        </View>

        <Text
          style={{ textDecorationLine: 'underline' }}
          onPress={() => {
            // Implement your forgot password navigation or logic here
            console.log('Forgot Password link pressed');
          }}
        >
          ¿Olvidaste tu contraseña?
        </Text>
      </View>

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Iniciar Sesión
      </Button>

    <BiometricAuthScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    width: '100%',
    borderRadius: 8,
    padding: 2,
    backgroundColor: '#d12a04',
  },
});

export default Login;
