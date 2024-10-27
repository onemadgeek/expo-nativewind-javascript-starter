import { Content }from './components/Content';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Content />
    </>
  );
}
