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
    <div>
      {/* <DictionaryHeader word={wordThatIsClickedOn} /> */}
      <DictionaryHeader />
      {children}
    </div>
  );
}
