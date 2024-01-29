import { GlassmorphismCard } from "@/components/GlassmorphismCard";
import { ProductCard } from "@/components/ProductCard";
import { Sidebar } from "@/components/Sidebar";
import { products } from "@/utils/mockedProducts";

export default function Home() {
  return (
    <div className='w-screen h-screen flex items-center justify-center gap-5'>
      <Sidebar />
      
      <main className="flex w-4/5 h-[90%]">
        <GlassmorphismCard className="rounded-3xl">
          <div className="w-full h-full p-5 pr-0">
            <h1 className="text-3xl text-zinc-100 font-bold mb-3">Products</h1>

            <div className="w-full h-[90%] pr-5 grid grid-cols-3 gap-4 custom-scroll">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </GlassmorphismCard>
      </main>
    </div>
  )
}
