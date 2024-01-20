import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export function GlassmorphismCard ({children}: Props) {
    return (
        <div             
            className="w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
        >
            {children}
        </div>
    )
}