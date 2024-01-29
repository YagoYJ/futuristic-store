import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    shortDescription: string;
    imageUrl: string | StaticImport;
}