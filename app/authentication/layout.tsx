import DictionaryHeader from "../components/DictionaryHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl md:max-w-5xl mx-auto">
      <DictionaryHeader />

      <div className="flex-1 overflow-auto bg-[#F6F6F6]">{children}</div>
    </div>
  );
}
