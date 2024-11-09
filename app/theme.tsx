"use client";

import { ThemeProvider } from "@material-tailwind/react";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const ThemeClient = ({ children }: Props) => {
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default ThemeClient;