import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    className?: string;
}

export function GlassmorphismCard ({children, className}: Props) {
    return (
        <div             
            className={`w-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 ${className}`}
        >
            {children}
        </div>
    )
}