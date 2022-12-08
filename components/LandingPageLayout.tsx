//* Import React TS
import { ReactNode } from "react";

//* Import Components
import { Header, Footer } from './index';

//* Import React Features
import { useEffect } from 'react';

//* TS Declaring
type ChildrenProps = {
    children?: ReactNode
};

const LandingPageLayout = ({ children }:ChildrenProps) => {
    // useEffect(() => {
    //     console.log("Layout Mounter");
    // }, [])
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default LandingPageLayout;