import Layout from "../components/Layout"
import LinkHeading from "../components/LinkHeading"

type Props = {}

export default function Work({}: Props) {
  return (
    <Layout>
      <div>
        <h1>/work</h1>
        <p>Here are some brief summaries of the professional roles that I have held.</p>
      </div>

      <div>
        <LinkHeading label="RSM US" url="https://rsmus.com/" color="text-green"/>
        <p>
          Over the summer of 2022, I was an application development intern at RSM, working 
          out of both the Cedar Rapids and Des Moines offices. Here, I am going to talk 
          about what I was exposed to in this role. Here, I will talk about my 
          responsibilities in the role. Here, I will talk about what I accomplished.
        </p>
      </div>

      <div>
        <LinkHeading label="Iowa Reading Research Center" url="https://irrc.education.uiowa.edu/" color="text-green"/>
        <p>
          Over the summer of 2022, I was an application development intern at RSM, working 
          out of both the Cedar Rapids and Des Moines offices. Here, I am going to talk 
          about what I was exposed to in this role. Here, I will talk about my 
          responsibilities in the role. Here, I will talk about what I accomplished.
        </p>
      </div>
    </Layout>
  )
}