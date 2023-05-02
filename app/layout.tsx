"use client";
import "../styles/globals.css";
import Navigation from "./components/Navigation";
import Provider from "./components/Provider";
import { Analytics } from "@vercel/analytics/react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html>
        <head />
        <body>
          <Provider>
            <div className="flex h-screen relative">
              <Navigation />
              <div className="flex-1 overflow-auto bg-[#F6F6F6]">
                {children}
              </div>
            </div>
            <Analytics />
          </Provider>
        </body>
      </html>
    </RecoilRoot>
  );
}
