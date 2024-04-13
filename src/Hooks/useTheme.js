import { useState, useEffect } from 'react';

const useTheme = () => {
    const detectSystemTheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else {
            return 'light';
        }
    };
    const initialTheme = detectSystemTheme() || localStorage.theme
    const [theme, setTheme] = useState(initialTheme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('dark', 'light');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return [colorTheme, setTheme];
};

export default useTheme;
