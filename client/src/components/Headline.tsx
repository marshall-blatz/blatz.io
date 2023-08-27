
type Props = {
    content: string;
}

export default function Headline({ content }: Props) {
  return (
    <>
        {/* title for desktop */}
        <h1 className="mb-4 hidden md:block">{content}</h1>
        {/* title for mobile */}
        <h2 className="mb-4 block md:hidden">{content}</h2>
    </>
  )
}