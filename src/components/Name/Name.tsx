import "./Name.scss";

interface NameProps {
    name: string;
}

export default function Name({name}: NameProps) {
    return (
        <div className="name-container">
            <h2>{name}</h2>
        </div>
    )
}