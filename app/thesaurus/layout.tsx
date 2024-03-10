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
    <div className=" max-w-xl md:max-w-3xl lg:max-w-5xl md:mx-auto mx-auto">
      {/* <DictionaryHeader word={wordThatIsClickedOn} /> */}
      <div className="relative z-10">
        <DictionaryHeader>
          <div className="hidden md:inline-block w-full">
            <p className="font-bold text-2xl">Thesaurus</p>
          </div>
        </DictionaryHeader>
      </div>
      <div className="flex-1 overflow-auto bg-[#F6F6F6]">{children}</div>
    </div>
  );
}
