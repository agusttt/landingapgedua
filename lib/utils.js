// untuk mengimport fonts Poppins dari librarti next
import { Poppins } from 'next/font/google';
// untuk mengimport fonts Poppins dari librarti next

// untuk mengexport fonts Poppins menjadi file global variabel
export const poppins = Poppins({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});
// untuk mengexport fonts Poppins menjadi file global variabel