import Navigation from '@/components/navigation/navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/navigation/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
