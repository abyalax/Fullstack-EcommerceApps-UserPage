'use client'
import { Image as ImageType } from "@/types"
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import GalleryTab from "./gallery-tab"
import Image from "next/image"

interface GalleryProps {
  images: ImageType[]
}

const Gallery = ({ images }: GalleryProps) => {
  console.log(images);

  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full h-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                src={image.url} 
                alt="image"
                className="object-center object-cover"
                fill
                />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

export default Gallery
