import './globals.css'
// untuk mengimport variabel class dr component poppins di folder utils
import { poppins } from "@/lib/utils";
// untuk mengimport variabel class dr component poppins di folder utils

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
