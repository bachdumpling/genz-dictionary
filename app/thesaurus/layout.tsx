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
    <div className="max-w-5xl mx-auto">
      {/* <DictionaryHeader word={wordThatIsClickedOn} /> */}
      <DictionaryHeader>
        <p className="font-bold text-2xl">Thesaurus</p>
      </DictionaryHeader>
      {children}
    </div>
  );
}
