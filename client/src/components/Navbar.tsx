
type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className="flex justify-between items-center px-10 py-10">
        <button>blatz.io</button>
        <div className="space-x-8">
        <button>work</button>
        <button>projects</button>
        <button>resume</button>
        </div>
    </div>
  )
}