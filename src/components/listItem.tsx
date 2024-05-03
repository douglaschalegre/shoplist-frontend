
'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Trash } from "lucide-react"
// import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

export default function ListItem() {
    const [itemCount, setItemCount] = useState(0);
    const [price, setPrice] = useState(0);

    function handleIncrement() {
        setItemCount(itemCount + 1);
    }
    
    function handleDecrement() {
        if (itemCount === 0) {
            return;
        }
        setItemCount(itemCount - 1);
    }
    function handleChangePrice(e: any) {
        setPrice(e.target.value);
    }

    return (
        <div className="flex">
            <Card className="p-2 flex flex-col">
                <div className="flex">
                    <CardTitle>
                        Camisinha PP 
                    </CardTitle>
                </div>
                <div className="flex gap-x-2 mt-1 justify-center items-center">
                    <label className="mr-0.5"htmlFor="">Price</label>
                    <Input className="" placeholder="Value" type="number" onChange={handleChangePrice}/>
                </div>
                <div className="flex gap-x-2 items-center mt-2">
                    <Button className="text-xs p-3 h-4" onClick={handleDecrement}>
                        {itemCount === 0 ? <Trash className="h-3 w-3"/> : <p className="h-3 w-3 flex items-center justify-center">-</p>}
                    </Button>
                    <p>
                        {itemCount}
                    </p>
                    <Button className="text-xs p-3 h-4" onClick={handleIncrement}>
                       <p className="h-3 w-3 flex items-center justify-center">+</p> 
                    </Button>
                    <div className="flex gap-x-2 mt-1 items-center justify-center">
                        <label>
                            On cart
                        </label>
                        <Checkbox />
                    </div>
                </div>
            </Card>
        </div>
    )
}