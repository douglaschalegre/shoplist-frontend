'use client'
import ListItem from "@/components/listItem";
import { Separator } from "@/components/ui/separator";
import { ListProvider } from "@/context/list";

export default function List({params}: Readonly<{params: {listcode: string}}>) {
    const queryCode = params.listcode;

    function validateListCode(code: string | string[] | undefined): string{
        let definitiveCode = code || ''; // Assign an empty string as the default value if code is undefined
        if (Array.isArray(definitiveCode)) definitiveCode = definitiveCode[0];

        return definitiveCode;
    }
    const listCode = validateListCode(queryCode);
    
    if (listCode == '') return (<div>Invalid list code</div>);
    return (
        <ListProvider listCode={listCode}>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <div>
                <h2 className="font-bold text-xl">
                    Shoplist
                </h2>
                <h3>
                    Placeholder list name
                </h3>
                <Separator className="my-4" />
                </div>

                <div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg">
                            List 📝
                        </h3>
                        <div className="flex flex-col my-2 gap-y-4">
                            <ListItem/>
                            <ListItem/>
                            <div className="flex items-center">
                                <h3 className="font-bold text-lg">
                                    Total
                                </h3>
                                <Separator orientation="vertical" className="h-4 mx-1"/>
                                <p>R$ 00,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </ListProvider>
    );
}
