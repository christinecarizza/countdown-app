import { useState, useRef } from "react";
import { DateTime } from "luxon";
import Header from "../components/Header/Header";
import Name from "../components/Name/Name";
import NameSettings from "../components/Name/NameSettings";
import DateTimeSettings from "../components/DateTimeSettings/DateTimeSettings";
import CountdownDisplay from "../components/CountdownDisplay/CountdownDisplay";
import BackgroundSettings from "../components/BackgroundSettings/BackgroundSettings";
import FontSettings from "../components/FontSettings/FontSettings";
import Footer from "../components/Footer/Footer";
import "./index.scss";

interface CountdownProps {
    name: string;
    targetDate: string;
    targetTime: string;
    timezone: string;
    showHideUnits: boolean;
    bgImage: string | null;
    bgColor: string;
    fontColor: string;
    fontFamily: string;
}

export default function HomePage() {
    const countdownRef = useRef<HTMLDivElement>(null);

    const handleFullscreen = () => {
        if (countdownRef.current) {
            countdownRef.current.requestFullscreen();
        }
    }

    const handleExitFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }

    // Get current date plus 1 year
    const defaultDate = new Date(
        new Date().setMonth(new Date().getMonth() + 3)
    ).toISOString().split("T")[0];

    // Get current time
    const defaultTime = new Date().toTimeString().slice(0, 5)

    // Set countdown settings
    const [settings, setSettings] = useState<CountdownProps>({
        name: "Countdown to",
        targetDate: defaultDate,
        targetTime: defaultTime,
        timezone: "Asia/Manila",
        showHideUnits: true,
        bgImage: null,
        bgColor: "transaparent",
        fontColor: "#000000",
        fontFamily: "Arial"
    });

    // Get target date and time
    const targetDateTime = DateTime.fromISO(
        `${settings.targetDate}T${settings.targetTime}`,
        { zone: settings.timezone }
    ).toUTC().toISO()!;

    return (
        <>
            <Header />
            <main id="main-content">
                <div id="container">
                    <section id="countdown-settings">
                        <h2>Settings</h2>
                        <DateTimeSettings
                            targetDate={settings.targetDate}
                            onDateChange={(date) => setSettings((prev) => ({
                                ...prev,
                                targetDate: date,
                            }))}
                            targetTime={settings.targetTime}
                            onTimeChange={(time) => setSettings((prev) => ({
                                ...prev,
                                targetTime: time,
                            }))}
                            timezone={settings.timezone}
                            onTimezoneChange={(timezone) => setSettings((prev) => ({
                                ...prev,
                                timezone: timezone,
                            }))}
                            showHideUnits={settings.showHideUnits}
                            onUnitsChange={(showHideUnits) => setSettings((prev) => ({
                                ...prev,
                                showHideUnits: showHideUnits,
                            }))}
                        />
                        <NameSettings
                            name={settings.name}
                            onNameChange={(name) => setSettings((prev) => ({
                                ...prev,
                                name: name,
                            }))}
                        />
                        <BackgroundSettings
                            bgImage={settings.bgImage}
                            onBgImageChange={(bgImage) => setSettings((prev) => ({
                                ...prev,
                                bgImage: bgImage,
                            }))}
                            bgColor={settings.bgColor}
                            onBgColorChange={(bgColor) => setSettings((prev) => ({
                                ...prev,
                                bgColor: bgColor,
                            }))}
                        />
                        <FontSettings
                            fontColor={settings.fontColor}
                            onFontColorChange={(fontColor) => setSettings((prev) => ({
                                ...prev,
                                fontColor: fontColor,
                            }))}
                            fontFamily={settings.fontFamily}
                            onFontFamilyChange={(fontFamily) => setSettings((prev) => ({
                                ...prev,
                                fontFamily: fontFamily,
                            }))}
                        />
                    </section>
                    <section ref={countdownRef} id="countdown" onClick={handleExitFullscreen}>
                        <div
                            className="countdown-display"
                            style={{
                                backgroundImage: settings.bgImage ? 
                                    `url(${settings.bgImage})`
                                    : "none",
                                backgroundColor: settings.bgColor,
                                color: settings.fontColor,
                                fontFamily: settings.fontFamily,
                            }}
                        >
                            <Name name={settings.name} />
                            <CountdownDisplay 
                                targetDate={targetDateTime}
                                showHideUnits={settings.showHideUnits}
                            />
                            <div className="fullscreen-btn-container">
                                <button id="fullscreen-btn" onClick={handleFullscreen}>
                                    Click to Full Screen
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}