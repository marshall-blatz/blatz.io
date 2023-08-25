
type Props = {}

export default function Home({}: Props) {
  return (
    <div className="w-full flex justify-center">
        <div className="w-[80%] space-y-8">
            <h1>Hi, I'm Marshall</h1>
            <h3>
                I'm a software developer passionate about<br/>
                using technology to solve complex problems<br/>
                and create friendly user interfaces<br/>
                <br/>
                I've recently graduate from the University of Iowa<br/>
                where I studied computer science and engineering.<br/>
                <br/>
                I'm currently working for <a target="blank_" className="text-green underline" href="https://www.x.com/iareading">@iareading</a> and working on<br/>
                these <a className="text-green underline">projects</a> in my free time.<br/>
                <br/>
                Welcome to my corner of the internet!<br/>
                Here are the other corners you can connect with me at:<br/>
            </h3>
        </div>
    </div>
  )
}