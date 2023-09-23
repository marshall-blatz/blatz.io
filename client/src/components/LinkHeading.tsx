import "remixicon/fonts/remixicon.css";

type Props = {
    label: string;
    url: string;
    color: string;
};

export default function LinkHeading({ label, url, color }: Props) {
    return (
        <a
            className={`flex flex-row items-center ${color}`}
            href={url}
            target="_blank"
        >
            <h2 className="underline ">{label}</h2>{" "}
        </a>
    );
}
