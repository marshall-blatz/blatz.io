import Headline from "../components/Headline";
import LinkHeading from "../components/LinkHeading";

type Props = {};

export default function Work({}: Props) {
    return (
        <>
            <div>
                <Headline content="/work" />
                <p>
                    Here are some brief summaries of the professional roles that
                    I have held.
                </p>
            </div>

            <div>
                <LinkHeading
                    label="RSM US"
                    url="https://rsmus.com/"
                    color="text-green"
                />
                <p>
                    My first exposure to software consulting began in the summer
                    of 2022, when I worked as an application development intern
                    for RSM (in both Cedar Rapids and Des Moines, IA). I was
                    tasked early on with learning a proprietary language called
                    AL, used to create Microsoft Dynamics 365 extensions.
                    <br />
                    <br />
                    Once I became familiar with this technology, I was quickly
                    integrated into my team’s daily work. I participated in both
                    stand-ups and code reviews; assisted with my team members’
                    client work; and collaborated with other interns on several
                    internal initiatives. By the end of my internship, I
                    successfully headed up two of my own client projects. I will
                    always be grateful to RSM for providing me with this
                    multifaceted software industry experience.
                </p>
            </div>

            <div>
                <LinkHeading
                    label="IRRC"
                    url="https://irrc.education.uiowa.edu/"
                    color="text-green"
                />
                <p>
                    In November 2022, I began working as a part-time software
                    developer for the Iowa Reading Research Center (shifting to
                    full-time after I graduated in May 2023). My primary
                    responsibility in this role is to build and maintain custom
                    applications for researchers, who collect and organize test
                    data from over 12,000 students and faculty across the state
                    of Iowa. I also work on internal reporting applications,
                    third-party software support, and various administrative
                    tasks as needed.
                    <br />
                    <br />
                    What I love most about this job is that it consistently
                    provides me with such great exposure to many key web
                    development technologies. All of our legacy applications
                    were built with vanilla JavaScript, PHP, MySQL, and Apache,
                    allowing me to work closely with these essential,
                    time-tested web technologies. In the past year, we have
                    begun using more modern tools, including TypeScript, React,
                    Express, Prisma, Nginx, and GCP. Implementing these tools
                    has resulted in a great increase in productivity,
                    efficiency, and the flexibility to create bespoke solutions.
                </p>
            </div>
        </>
    );
}
