import { useSettings } from "../contexts/SettingsContext";

export default function SettingsPanel() {
  const { changeTheme, changeLanguage, resetSettings } = useSettings();

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h3>Settings Panel</h3>
      <button onClick={() => changeTheme("dark")}>Dark Theme</button>
      <button onClick={() => changeTheme("light")}>Light Theme</button>
      {" | "}
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("th")}>Thai</button>
      {" | "}
      <button onClick={resetSettings}>Reset</button>
    </div>
  );
}
