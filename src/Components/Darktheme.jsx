import { useState,useEffect } from "react";

export default function DarkTheme() {
    const [darkTheme, setDarkTheme] = useState(false);

    const handleThemeChange = () => {
        setDarkTheme(!darkTheme);
    }
    useEffect(() => {
        document.body.classList.toggle('dark-theme', darkTheme);
    }, [darkTheme])

    return (
        <div className="theme-change">
            <span className="change-thm" onClick={handleThemeChange}>
                {darkTheme ?
                (<img src="/images/dark.svg" alt="dark"/> )
                :
                (<img src="/images/light.svg" alt="light"/>)}
            </span>
        </div>
    )
}