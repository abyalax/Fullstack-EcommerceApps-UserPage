'use client'

import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./icon-button"
import { Expand } from "lucide-react"
import Currency from "./currency"
import { useRouter } from "next/navigation"
import usePreviewModal from "@/hooks/use-preview-modal"

interface ProductCardProps {
    data: Product
}

const ProductCard = ({ data }: ProductCardProps) => {

    const router = useRouter()
    const previewModal = usePreviewModal()

    const handleClick = () => {
        router.push(`/product/${data.id}`)
    }

    const onPreview = (event: React.MouseEvent) => {
        event.stopPropagation(),
            previewModal.onOpen(data)
    }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Image and Action */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    alt="Image"
                    src={data.images?.[0]?.url}
                    className="aspect-square rounded-md object-cover"
                    fill
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton onClick={onPreview} icon={<Expand size={20} />} className="text-gray-600" />
                    </div>
                </div>
            </div>
            {/* Product Description */}
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>
            {/* Harga */}
            <div className="flex justify-between items-center">
                <Currency value={data?.price} />
            </div>
        </div>
    )
}

export default ProductCard
