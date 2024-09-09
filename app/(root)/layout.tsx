import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ZOOM",
    description: "Video calling app",
    icons:{
      icon:'/icons/zoom-logo.png'
    }
  };

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout