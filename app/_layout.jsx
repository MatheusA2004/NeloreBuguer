import { Stack } from 'expo-router';
// Não precisa de @react-navigation/stack, 
// o 'Stack' do expo-router é o componente correto aqui.

export default function RootLayout() {
  return (
    <Stack>
      {/* As telas são "index" e "login" (nomes dos arquivos) */}
      <Stack.Screen 
        name="index" // Isso aponta para o app/index.jsx
        options={{ title: 'Início' }} 
      />
      <Stack.Screen 
        name="login" // Isso aponta para o app/login.jsx
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="cadastro" // Isso aponta para o app/login.jsx
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="home" // Isso aponta para o app/login.jsx
        options={{ headerShown: false }}
      />
    </Stack>
  );
}