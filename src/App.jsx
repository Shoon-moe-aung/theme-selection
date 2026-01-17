import "./App.css";
import { useSettings } from "./contexts/SettingsContext";
import Header from "./components/Header";
import Preview from "./components/Preview";
import SettingsPanel from "./components/SettingsPanel";

function App() {
  const { theme } = useSettings();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Preview />
      <SettingsPanel />
    </div>
  );
}

export default App;