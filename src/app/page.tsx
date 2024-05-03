import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>
            Easy way to make shopping lists for your groceries and make them colaborative.
        </p>
        <Separator className="my-4" />
        <div className="flex my-2">
            <Image 
                className="mr-2"
                src="/icon.svg"
                alt="Shopping app"
                width={25}
                height={25}
            />
            <h2 className="font-bold text-xl">
                Shoplist
            </h2>
        </div>

        <div className="flex flex-col my-2 gap-y-4">
            <p className="">
                Get to your list and start colaborating!
            </p>
            <form className="flex flex-col gap-y-4">
                <Input placeholder="List code" />
                <Button className="">Go to list</Button>
            </form>
        </div>
      </div>
    </main>
  );
}
