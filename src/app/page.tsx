import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url(/webbackground-everant.png)] bg-no-repeat bg-cover">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <Image
          className="dark:invert"
          src="/Logo-Color-Banner.svg"
          alt="Atmospace logo"
          width={600}
          height={300}
          priority
        />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://discord.com/invite/HYkKUHXQ8p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/Discord-Symbol-White.svg"
              alt="Discord Logo White"
              width={20}
              height={20}
            />
            Discord Server
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://cdn.modrinth.com/data/nwxfxyLv/versions/AaxjuDvU/Auramine.mrpack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert"
              src="/auramine.svg"
              alt="Auramine Logo White"
              width={20}
              height={20}
            />
            Download Auramine
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://discord.com/servers/atmospace-343961922103672834"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert"
              src="/Logo-Color.svg"
              alt="Atmospace Logo White"
              width={20}
              height={20}
            />
            Support the Community
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center pt-30 ">
        <p className="text-white text-xs">Image by community member: Everant</p>
      </footer>
    </div>
  );
}
