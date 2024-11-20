import { ClerkProvider,SignInButton,SignedIn,SignedOut,UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";



export const metadata: Metadata = {
  title: "AI Powered Content Generation",
  description: "This is your IdeaScriptAI : A platform to create, automate and generate your ideas.",
};

const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
