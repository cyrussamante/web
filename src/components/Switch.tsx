interface SwitchProps {
    checked: boolean;
    onChange: () => void;
}

function Switch({ checked, onChange }: SwitchProps) {
    const toggleOn = checked ? "translate-x-6" : "translate-x-1";
    const trackColor = checked ? "bg-accent" : "bg-border";

    return (
        <label className="cursor-pointer rounded-full">
            <input
                aria-label="Toggle dark mode"
                className="sr-only"
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 motion-reduce:transition-none ${trackColor}`}>
                <span className={`inline-block h-4 w-4 rounded-full bg-white transition-transform duration-300 motion-reduce:transition-none ${toggleOn}`}></span>
            </span>
        </label>
    );
}

export default Switch;