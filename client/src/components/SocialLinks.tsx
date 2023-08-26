import 'remixicon/fonts/remixicon.css'

type Props = {
    size: string;
    color?: string;
}

export default function SocialLinks({ size, color }: Props) {
  return (
    <div className= "space-x-2">
        <a href="https://www.linkedin.com/in/marshall-blatz/" target="_blank"><i className={`ri-linkedin-box-line ${color}`} style={{ fontSize: size }}></i></a>
        <a href="mailto:marshallpblatz@gmail.com?subject=Hey Marshall!"><i className={`ri-mail-line ${color}`} style={{ fontSize: size }}></i></a>
        <a href="https://github.com/marshall-blatz" target="_blank"><i className={`ri-github-line ${color}`} style={{ fontSize: size }}></i></a>
    </div>
  )
}