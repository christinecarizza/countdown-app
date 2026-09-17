import "./FontSettings.scss"

interface FontProps {
    fontColor: string;
    fontFamily: string;
    onFontColorChange: (fontColor: string) => void;
    onFontFamilyChange: (fontFamily: string) => void;
}

const fonts = [
    "Arial",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Courier New, monospace",
    "Brush Script MT",
];

export default function FontSettings({
    fontColor,
    fontFamily,
    onFontColorChange,
    onFontFamilyChange,
}: FontProps) {

    return (
        <div className="font-settings-container">
            <div className="font-family">
                <label>Font family</label>
                <select 
                    value={fontFamily}
                    name="fontFamily"
                    id="font-family"
                    onChange={(e) => onFontFamilyChange(e.target.value)}
                >
                    {fonts.map((font) => (
                        <option key={font} value={font}>{font}</option>
                    ))}
                </select>
            </div>
            <div className="font-color">
                <label>Font color</label>
                <input 
                    value={fontColor}
                    type="color"
                    name="fontColor"
                    id="font-color"
                    onChange={(e) => onFontColorChange(e.target.value)}
                />
            </div>
        </div>
    )
}