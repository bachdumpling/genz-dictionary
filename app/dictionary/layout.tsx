import DictionaryHeader from "../components/DictionaryHeader";
import Navigation from "../components/Navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DictionaryHeader />
      {children}
    </div>
  );
}
