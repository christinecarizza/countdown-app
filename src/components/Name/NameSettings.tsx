import "./Name.scss"

interface NameProps {
    name: string;
    onNameChange: (targetName: string) => void;
}

export default function NameSettings ({
    name,
    onNameChange
}: NameProps) {

    return (
        <div className="name-settings-container">
            <div className="name">
                <label>Name</label>
                <input 
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => onNameChange(e.target.value)}
                />
            </div>
        </div>
    )
}