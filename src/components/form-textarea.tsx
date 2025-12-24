import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

export default function FormTextarea({
    label,
    error,
    id,
    className,
    ...props
}: FormTextareaProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-foreground/70 mb-2"
            >
                {label}
            </label>
            <textarea
                id={id}
                className={cn(
                    "w-full px-4 py-3 rounded-lg bg-background border border-foreground/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none",
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
