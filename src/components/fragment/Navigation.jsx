import React, {useContext, useState} from "react";
import '../assets/scss/Navigation.scss';
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import {ThemeContext} from "../../api/Theme";

function Navigation() {

    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.component}>
            <Brand/>
            <div className={"navigation"}>
            </div>
            <SearchBar/>
        </nav>
    );
}

export default Navigation;