import Layout from "../components/Layout"

type Props = {}

export default function Resume({}: Props) {
  return (
    <Layout>
      <div>
          {/* title for desktop */}
          <h1 className="mb-4 hidden md:block">/resume</h1>
          {/* title for mobile */}
          <h2 className="mb-4 block md:hidden">/resume</h2>
        <p>Here is my resume as of August 2023.</p>
      </div>
      <iframe className="w-[800px] h-[1100px] hidden resume:block" src="/assets/resume.pdf" />
      <a className="text-green underline block resume:hidden" href="/assets/resume.pdf" target="_blank">Resume</a>
    </Layout>
  )
}