import React from 'react'
import { Button } from './ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const category = [
    "Frontend Developre",
    "Backend Developer",
    "Data Science",
    "Graphic Designe",
    "FullStack Developer"

]

const CategoryCarousel = () => {
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent >
                   

                        {
                           category.map((cat, index)=>(
                            <CarouselItem className="md:basis-1/2 lg-basic-1/3">
                            <Button variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                           ))
                            
                        }

                   
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext/>
            </Carousel>
        </div>
    )
}

export default CategoryCarousel