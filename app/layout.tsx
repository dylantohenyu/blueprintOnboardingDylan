import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry'; // add this line

// font definitions
const poppins = Poppins({
  variable: '--font-poppins',
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// site metadata - what shows up on embeds
export const metadata: Metadata = {
  title: 'Project Name',
  description: 'Description of project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Wrap the children of body with the registry */}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
