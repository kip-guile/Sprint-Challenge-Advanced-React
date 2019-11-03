import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode)
    }, [darkMode])

    const toggleDarkMode = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return [darkMode, toggleDarkMode];
}

export default useDarkMode;   