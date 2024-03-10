"use client";
import "../styles/globals.css";
import Navigation from "./components/Navigation";
import Provider from "./components/Provider";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
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
        <body className="">
          <Provider>
            <div className="flex relative">
              <Navigation />
              <div className="flex-1 overflow-hidden bg-[#F6F6F6]">
                <div className="mb-12 md:mb-20">

                {children}
                </div>
              <Footer />
              </div>
            </div>
            <Analytics />
          </Provider>
        </body>
      </html>
    </RecoilRoot>
  );
}
