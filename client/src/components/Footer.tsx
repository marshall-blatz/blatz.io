import SocialLinks from "./SocialLinks"

type Props = {}

export default function Footer({}: Props) {

    function renderCurrentYear(){
        const year = new Date()
        return year.getFullYear()
    }

    return (
        <div className="flex flex-col px-20 my-10">
            <hr/>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <p>© Marshall Blatz {renderCurrentYear()}</p>
                    <p>(ง •̀_•́)ง push me for dark mode</p>
                </div>
                <SocialLinks size="16px" color="text-black"/>
            </div>
        </div>
    )
}