import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export default function FormField({
    label,
    error,
    id,
    className,
    ...props
}: FormFieldProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-foreground/70 mb-2"
            >
                {label}
            </label>
            <input
                id={id}
                className={cn(
                    "w-full px-4 py-3 rounded-lg bg-background border border-foreground/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all",
                    error && "border-red-500 focus:border-red-500",
                    className
                )}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
