"use client";
import "../styles/globals.css";
import Navigation from "./components/Navigation";
import Provider from "./components/Provider";
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
            <div className="flex h-screen">
              <Navigation />
              <div className="flex-1 overflow-auto bg-[#F6F6F6]">
                {children}
              </div>
            </div>
          </Provider>
        </body>
      </html>
    </RecoilRoot>
  );
}
