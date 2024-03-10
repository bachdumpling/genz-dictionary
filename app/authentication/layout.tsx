import DictionaryHeader from "../components/DictionaryHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
      <div className="relative z-10">
        <DictionaryHeader>
          <div className="hidden md:inline-block w-full">
            <p className="font-bold text-2xl">Sign In</p>
          </div>
        </DictionaryHeader>
      </div>

      <div className="flex-1 overflow-auto bg-[#F6F6F6]">{children}</div>
    </div>
  );
}
