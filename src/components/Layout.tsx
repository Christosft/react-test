import  React from 'react'
import Header from "./Header.tsx";


interface LayoutProps {
    children: React.ReactNode;
}

const Layout  = ({ children }: LayoutProps) => {

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="border border-black rounded-2xl shadow-lg p-6 w-full max-w-3xl min-h-[600px] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/gal.jpg')" }}>
                    <Header />
                    {children}
                </div>
            </div>
        </>
    )
}


export default Layout;

