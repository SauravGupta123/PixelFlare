import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes';

//global layout across all routes

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight:['400','500','600',"700"],
  variable:'--font-ibm-plex'
 });

export const metadata: Metadata = {
  title: "Imagnify",
  description: "AI powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
   
      variables: { colorPrimary: 'red' },
      signIn: { 
        
        variables: { colorPrimary: 'blue' }
      }
    }}
  >
      <html lang="en">
        <head>
          {/* You can import your IBM Plex Sans font here */}
        </head>
        <body className={cn("font-IBMPlex antialiased")}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}