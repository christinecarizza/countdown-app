import "./BackgroundSettings.scss"

interface BackgroundProps {
    bgImage: string | null;
    bgColor: string;
    onBgImageChange: (bgImage: string) => void;
    onBgColorChange: (bgImage: string) => void;
}

export default function BackgroundSettings({
    bgImage, 
    bgColor,
    onBgImageChange,
    onBgColorChange,
}: BackgroundProps) {

    return (
        <div className="background-settings-container">
            <div className="background-image">
                <label>Background image</label>
                <input 
                    type="file"
                    accept="image/*"
                    name="bgImage"
                    id="bg-image"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const imageURL = URL.createObjectURL(file);
                        onBgImageChange(imageURL);
                    }}
                />
            </div>
            <div className="background-color">
                <label>Background color</label>
                <input 
                    value={bgColor}
                    type="color"
                    name="bgColor"
                    id="bg-color"
                    onChange={(e) => onBgColorChange(e.target.value)}
                />
            </div>
        </div>
    )
}