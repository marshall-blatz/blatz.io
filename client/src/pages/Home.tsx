import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";
import Headline from "../components/Headline";

type Props = {};

export default function Home({}: Props) {
    return (
        <Layout>
            <div>
                <div className="max-w-[550px]">
                    <Headline content="Hi, I'm Marshall" />
                    <p>
                        I'm a software developer passionate about using
                        technology to solve complex problems while creating
                        friendly user interfaces.
                        <br />
                        <br />
                        I've recently graduated from the University of Iowa
                        where I studied computer science and engineering.
                        <br />
                        <br />
                        I'm currently working for{" "}
                        <a
                            target="blank_"
                            className="text-green underline"
                            href="https://www.x.com/iareading"
                        >
                            @iareading
                        </a>{" "}
                        and working on these{" "}
                        <Link to="/projects" className="text-green underline">
                            projects
                        </Link>{" "}
                        in my free time.
                        <br />
                        <br />
                        Welcome to my corner of the internet! Here are the other
                        corners you can connect with me at:
                    </p>
                    <SocialLinks size={"24px"} color={"text-green"} />
                </div>
            </div>
        </Layout>
    );
}
