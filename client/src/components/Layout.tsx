
type Props = {
    children: string | JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-full flex justify-center">
        <div className="w-fit px-10">
            {children}
        </div>
    </div>
  )
}