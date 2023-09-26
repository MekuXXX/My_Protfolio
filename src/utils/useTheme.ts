import { useEffect, useState } from "react";

export type Mode = "dark" | "light";

const useTheme = () => {
    const [mode, setMode] = useState<Mode>(window.localStorage.getItem("my-theme") === "light" ? "light" : "dark");
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    
    useEffect(() => {
        const localTheme = window.localStorage.getItem("my-theme");
        const matchMedia = window.matchMedia(preferDarkQuery);
        
        const handleChange = () => {
            let check: Mode =  'light';

            if (localTheme === 'dark' || matchMedia.matches) {
                check = "dark";
            }
            
            if (check === "dark") document.documentElement.classList.add("dark");
            else document.documentElement.classList.remove("dark");
            setMode(check);
        }
        matchMedia.addEventListener("change", handleChange);

        return () => matchMedia.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
    window.localStorage.setItem("my-theme", mode);
    mode === "dark" ?  document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, [mode]);
    
    return {mode, setMode};
}


export default useTheme;