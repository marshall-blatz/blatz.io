import { useState, useEffect } from "react"

type Props = {}

export default function ThemeToggle({}: Props) {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          setIsDark(false)
          document.documentElement.classList.remove('dark')
        }
    }, [isDark])

    function toggleDarkMode(){
        setIsDark(prev => !prev)
        localStorage.theme = !isDark ? 'dark' : ''
    }

    return (
        <button onClick={toggleDarkMode}>
            {
                isDark?
                <p className="justify-self-end">ʕ •ᴥ•ʔ &lt;(push me for light mode)</p>
                :
                <p className="justify-self-end">(ง •̀_•́)ง &lt;(push me for dark mode)</p>
            }
        </button>
    )
}