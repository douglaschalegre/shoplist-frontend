import { createContext } from 'react';

export type IList = {
    id: string;
    name: string;
    items: IProduct[];
}

export type IProduct = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    onCart: boolean;
}

export const ListContext = createContext<IList | undefined>(undefined);

export const ListProvider = ({ children, listCode }: { children: React.ReactNode, listCode: string }) => {
    //TODO: Fetch list from API
    const mockList: IList = {
        id: listCode,
        name: "Mock list!",
        items: []
    }

    return (
        <ListContext.Provider value={mockList}>
            {children}
        </ListContext.Provider>
    )
}