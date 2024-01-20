import React from "react";

export interface SeachContextProps {
    searchText: string;
    setSearchText: (text: string) => void;
}

const SearchContext = React.createContext<SeachContextProps>({
    searchText: "",
    setSearchText: () => {}
})

export default SearchContext;