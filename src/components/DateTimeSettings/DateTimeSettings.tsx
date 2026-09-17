import "./DateTimeSettings.scss"

interface DateTimeSettingsProps {
    targetDate: string;
    targetTime: string;
    timezone: string;
    showHideUnits: boolean;
    onDateChange: (targetDate: string) => void;
    onTimeChange: (targetTime: string) => void;
    onTimezoneChange: (timezone: string) => void;
    onUnitsChange: (showHideUnits: boolean) => void;
}

export default function DateTimeSettings({
    targetDate,
    targetTime,
    timezone,
    showHideUnits,
    onDateChange,
    onTimeChange,
    onTimezoneChange,
    onUnitsChange,
}: DateTimeSettingsProps) {
    const timezones = Intl.supportedValuesOf("timeZone");

    return (
        <div className="date-time-settings-container">
            <div className="target-date">
                <label>Date</label>
                <input 
                    value={targetDate}
                    type="date"
                    name="targetDate"
                    id="target-date"
                    onChange={(e) => onDateChange(e.target.value)}
                />
            </div>
            <div className="target-time">
                <label>Time</label>
                <input
                    value={targetTime}
                    type="time"
                    name="targetTime"
                    id="target-time"
                    onChange={(e) => onTimeChange(e.target.value)}
                />
            </div>
            <div className="target-timezone">
                <label>Timezone</label>
                <select
                    value={timezone}
                    name="targetTimezone"
                    id="target-timezone"
                    onChange={(e) => onTimezoneChange(e.target.value)}
                >
                    {timezones.map((timezone) => (
                        <option key={timezone} value={timezone}>
                            {timezone}
                        </option>
                    ))}
                </select>
            </div>
            <div className="show-hide-units">
                <label>Show / Hide units</label>
                <label className="toggle-switch">
                    <input 
                        checked={showHideUnits}
                        type="checkbox"
                        name="showHideUnits"
                        id="show-hide-units"
                        onChange={(e) => onUnitsChange(e.target.checked)}
                    />
                    <span className="toggle"></span>
                </label>
            </div>
        </div>
    );
}