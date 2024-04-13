import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useTheme from  "../Hooks/useTheme";

const Switcher = () => {

    const [colorTheme, setTheme] = useTheme();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                className="ml-2 "
                moonColor="#EA580C"
                sunColor="#EA580C"
                size={40}
            />
        </>
    );
  
}

export default Switcher