import { ReactNode } from "react";
import '../App.scss'

interface PageProps {
    children: ReactNode
}
const Layout = ({ children }: PageProps) => {
    return (
        <div className="container">
            <div className="heading">
                GOLDEN GLOBE AWARD
            </div>

            {children}
        </div>
    )
}

export default Layout;