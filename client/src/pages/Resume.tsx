import Layout from "../components/Layout"

type Props = {}

export default function Resume({}: Props) {
  return (
    <Layout>
      <div>
        <h1>/resume</h1>
        <p>Here is my resume as of August 2023.</p>
      </div>
      <iframe src="../assets/resume.pdf" style={{ width:"800px", height:"1100px"}}/>
    </Layout>
  )
}