import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { Product } from "@/utils/types/product"
import { ShoppingCart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/Tooltip";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/Tooltip";

interface Props {
    product: Product;
}

export function ProductCard ({product}: Props) {
    const priceDisplay = formatCurrency(product.price)

    return (
        <div className="flex flex-col items-start">
            <h2 className="font-semibold text-zinc-100 mb-2">{product.name}</h2>
            <Image 
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={400}
                className="w-full rounded-lg"
            />

            <div className="flex items-center justify-between gap-2 w-full">
                <div>
                    <p className="text-zinc-100 mt-3">{product.shortDescription}</p>
                    <span className="text-zinc-100 font-bold text-xl">{priceDisplay}</span>
                </div>

                <TooltipProvider delayDuration={500}>
                    <Tooltip>
                        <TooltipTrigger>
                            <ShoppingCart className="text-zinc-100 p-2 rounded-full w-10 h-10 hover:bg-zinc-100/5 transition-all" />
                        </TooltipTrigger>
                        
                        <TooltipContent className="bg-zinc-500">
                            <p className="text-zinc-100 text-sm">Add to cart</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}