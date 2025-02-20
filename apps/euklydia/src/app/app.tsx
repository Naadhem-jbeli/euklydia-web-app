import { Route, Routes } from 'react-router-dom';
import HomeView from './ui/home/views/home.view';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
    </Routes>
  );
}

export default App;
