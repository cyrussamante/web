interface SwitchProps {
    checked: boolean;
    onChange: () => void;
}

function Switch({ checked, onChange }: SwitchProps) {
    const toggleOn = checked ? "translate-x-6" : "translate-x-1";
    const trackColor = checked ? "bg-blue-500" : "bg-gray-300";

    return (
        <label className="cursor-pointer">
            <input className="sr-only" type="checkbox" checked={checked} onChange={onChange} />
            <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${trackColor}`}>
                <span className={`inline-block h-4 w-4 rounded-full bg-white transition-transform duration-200 ${toggleOn}`}></span>
            </div>
        </label>
    );
}

export default Switch;