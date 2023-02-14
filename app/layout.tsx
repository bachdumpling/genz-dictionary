"use client";
import "../styles/globals.css";
import Navigation from "./components/Navigation";
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
          <div className="flex h-screen">
            <Navigation />
            <div className="flex-1 overflow-auto bg-[#F6F6F6]">{children}</div>
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}
