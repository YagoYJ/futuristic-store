import { Home, Settings, ShoppingCart } from "lucide-react"
import { GlassmorphismCard } from "./GlassmorphismCard"
import Link from "next/link"


export function Sidebar () {
    return (
        <aside className="w-16">
            <GlassmorphismCard className="rounded-full">
                <div className="flex flex-col items-center justify-center gap-2 px-1 py-4 rounded-[50%]">
                    <Link href="/" className="hover:bg-zinc-100/50 p-4 rounded-full transition-all">
                        <Home className="text-zinc-100" />
                    </Link>
                    
                    <Link href="/cart" className="hover:bg-zinc-100/50 p-4 rounded-full transition-all">
                        <ShoppingCart className="text-zinc-100" />
                    </Link>
                    
                    <Link href="/settings" className="hover:bg-zinc-100/50 p-4 rounded-full transition-all">
                        <Settings className="text-zinc-100" />
                    </Link>
                </div>
            </GlassmorphismCard>
        </aside>
    )
}