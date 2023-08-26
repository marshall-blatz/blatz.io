import 'remixicon/fonts/remixicon.css'

import SocialLinks from "./SocialLinks"
import ThemeToggle from "./ThemeToggle"

type Props = {}

export default function Footer({}: Props) {

    function renderCurrentYear(){
        const year = new Date()
        return year.getFullYear()
    }

    return (
        <div className="flex flex-col px-5 md:px-20 mt-20 mb-10">
            <hr/>
            <div className="flex flex-col md:flex-row items-start md:justify-between">
                <div className="flex flex-row items-center space-x-2">
                    <p><i className="ri-copyright-line"></i> Marshall Blatz {renderCurrentYear()}</p>
                    <SocialLinks size="18px" color="text-black dark:text-white"/>
                </div>
                <ThemeToggle />
            </div>
        </div>
    )
}