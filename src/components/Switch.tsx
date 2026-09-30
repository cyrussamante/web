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
                <span className={`grid h-4 w-4 place-items-center rounded-full bg-white text-accent shadow-sm transition-transform duration-300 motion-reduce:transition-none ${toggleOn}`}>
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`absolute h-3 w-3 transition-all duration-300 motion-reduce:transition-none ${
                            checked
                                ? "rotate-90 scale-0 opacity-0"
                                : "rotate-0 scale-100 opacity-100"
                        }`}
                    >
                        <circle cx="10" cy="10" r="3" fill="currentColor" />
                        <path
                            d="M10 1.5v2M10 16.5v2M18.5 10h-2M3.5 10h-2m14.51-6.01-1.42 1.42M5.41 14.59l-1.42 1.42m12.02 0-1.42-1.42M5.41 5.41 3.99 3.99"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                        />
                    </svg>
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`absolute h-3 w-3 transition-all duration-300 motion-reduce:transition-none ${
                            checked
                                ? "rotate-0 scale-100 opacity-100"
                                : "-rotate-90 scale-0 opacity-0"
                        }`}
                    >
                        <path
                            d="M16.5 12.6A7 7 0 0 1 7.4 3.5 7 7 0 1 0 16.5 12.6Z"
                            fill="currentColor"
                        />
                    </svg>
                </span>
            </span>
        </label>
    );
}

export default Switch;