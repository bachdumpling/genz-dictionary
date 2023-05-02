import { useRecoilValue } from "recoil";
import { chosenWordState } from "../../atoms/wordAtom";
import DictionaryHeader from "../components/DictionaryHeader";
import Navigation from "../components/Navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" md:max-w-2xl lg:max-w-5xl mx-auto">
      <div className="relative z-10">
        <DictionaryHeader>
          <div className="hidden md:inline-block w-full">
            <p className="font-bold text-2xl">Learn What&#8216;s Trending</p>
          </div>
        </DictionaryHeader>
      </div>
      {children}
    </div>
  );
}
