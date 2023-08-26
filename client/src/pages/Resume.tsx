import Layout from "../components/Layout"

type Props = {}

export default function Resume({}: Props) {
  return (
    <Layout>
      <div>
        <h1>/resume</h1>
        <p>Here is my resume as of August 2023.</p>
      </div>
      <iframe className="w-[800px] h-[1100px] hidden resume:block" src="/assets/resume.pdf" />
      <a className="text-green underline block resume:hidden" href="/assets/resume.pdf" target="_blank">Resume</a>
    </Layout>
  )
}