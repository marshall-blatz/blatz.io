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
          out of both the Cedar Rapids and Des Moines offices. This role offered me great exposure 
          to the world of software consultancy. At the beginning of the summer, I was tasked with 
          learning a proprietary language used for creating Microsoft Dynamics 365 Plugins called AL. 
          This was a unique challenge and something I would never be exposed to, if not for this position. 
          <br/><br/>
          After getting comfortable with the technology, they integrated me into the team's daily work.
          I participated in stand-ups and code reviews, helped with other staff members client work, 
          and collaborated with interns on internal projects. By the end of my internship, I had successfully  
          handled two of my own client projects. I will always be grateful to RSM for the initial exposure they 
          gave me to the software industry.
        </p>
      </div>

      <div>
        <LinkHeading label="Iowa Reading Research Center" url="https://irrc.education.uiowa.edu/" color="text-green"/>
        <p>
          From November 2021 to the present day, I have worked part-time and now full-time as a software developer 
          for the Iowa Reading Research Center. My main responsibility here is building and maintaining custom applications 
          for our researchers. They use these applicaitons to collect and organize test data from over 12,000 students and 
          faculty across the state of Iowa. I also work on internal reporting apps, third-party software support, and 
          various administrative tasks like interviewing other software developers. 
          <br/><br/>
          What I love most about this job is that it gave me great exposure to many key web development technologies. 
          All of our legacy applications were built with vanilla JavaScript, PHP, MySQL, and Apache which gave 
          me good experience with core, time-tested web technologies. In the last year, we have moved on to using more modern 
          tools including TypeScript, React, Express, Prisma, Nginx, and GCP. Implementing these tools has resulted in a 
          great increase in productivity, efficiency, and has allowed us to create bespoke solutions that wouldn't be an option 
          in with our old stack.
        </p>
      </div>
    </Layout>
  )
}