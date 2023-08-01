import React from 'react';

import { NavLink as NavLinkReactRouter} from "react-router-dom"

export const NavLink = ({ to, children , className }) => {
    return (
        <NavLinkReactRouter
            className={className}
            to={to}> {children}
        </NavLinkReactRouter>
    )
}