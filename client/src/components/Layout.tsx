import Footer from "./Footer";

type Props = {
    children: string | JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-full flex flex-col justify-center text-black dark:text-white">
        <div className="w-fit px-20 space-y-8">
            {children}
        </div>
        <Footer/>
    </div>
  )
}