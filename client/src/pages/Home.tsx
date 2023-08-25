import { Link } from "react-router-dom"
import SocialLinks from "../components/SocialLinks"

type Props = {}

export default function Home({}: Props) {
  return (
    <div className="w-full flex justify-center">
        <div className="w-[90%]">
            <h1 className="mb-4">Hi, I'm Marshall</h1>
            <p>
                I'm a software developer passionate about<br/>
                using technology to solve complex problems<br/>
                while creating friendly user interfaces.<br/>
                <br/>
                I've recently graduate from the University of Iowa<br/>
                where I studied computer science and engineering.<br/>
                <br/>
                I'm currently working for <a target="blank_" className="text-green underline" href="https://www.x.com/iareading">@iareading</a> and working on<br/>
                these <Link to="/projects" className="text-green underline">projects</Link> in my free time.<br/>
                <br/>
                Welcome to my corner of the internet!<br/>
                Here are the other corners you can connect with me at:<br/>
            </p>
            <SocialLinks size={'24px'} color={'text-green'}/>
        </div>
    </div>
  )
}