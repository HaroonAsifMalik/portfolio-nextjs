import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export const metadata = {
    title: "Promtopia",
    description: "Promtopia is a platform for creating and sharing promposals"
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                
                <main >
                    <Navbar/>
                    {children}
                    <Footer/>
                </main>
            </body>
        </html>
    )
}

export default RootLayout;