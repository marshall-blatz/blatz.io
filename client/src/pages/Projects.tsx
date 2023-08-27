import Layout from "../components/Layout"
import LinkHeading from "../components/LinkHeading"

type Props = {}

export default function Projects({}: Props) {
  return (
    <Layout>
      <div>
          {/* title for desktop */}
          <h1 className="mb-4 hidden md:block">/projects</h1>
          {/* title for mobile */}
          <h2 className="mb-4 block md:hidden">/projects</h2>
        <p>
          Welcome to my projects page. Here you can find some of my past and current software projects. 
          At some point in time, my non-software projects might end up here too.
        </p>
      </div>

      <div>
        <LinkHeading label="Amplo" url="https://amplo.vercel.app/" color="text-green"/>
        <p>
          This project was a technical case study in basic state management, user authorization, and form validation. 
          It also served as a fun user interface and data visualization exercise. Here’s a link to the&nbsp; 
          <a href="https://github.com/marshall-blatz/Amplo" target="_blank" className="text-green underline">repo</a>.
        </p>
      </div>

      <div>
        <LinkHeading label="Curate" url="https://curate-app.vercel.app/" color="text-green"/>
        <p>
          This is an ongoing passion project of mine as a music-appreciater. Curate is meant to be a place for curators 
          to show off their playlists as well as an easy-to-use tool for playlist sharing between friends who use 
          different music streaming platforms. Take a peek at the repo&nbsp; 
          <a href="https://github.com/marshall-blatz/Curate" target="_blank" className="text-green underline">here</a>.
        </p>
      </div>
    </Layout>
  )
}