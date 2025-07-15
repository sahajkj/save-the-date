import { Arapey, Allura } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// Re-import your fonts
const arapeyItalic = Arapey({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});
type StaticCardProps = {
  dates?: string;
  location?: string;
  inviteUrl?: string;
};

export default function StaticCard({
  dates = "28th December, 2025",
  location = "Bengaluru, India",
  inviteUrl = "/api/wedding-invite",
}: StaticCardProps) {
  return (
    <div
      className="
        relative
        w-full max-w-[480px]
        aspect-[502/703]
        bg-[url('/card_small.png')] bg-cover bg-center
        filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)] sm:drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]
        flex flex-col justify-center items-center
        text-center
        p-4 sm:p-6
      "
    >
      {/* Circular couple image */}
      <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#4E194B]">
        <Image
          src="/Anna_Sahaj_Cartoon.jpg"
          alt="Anna & Sahaj"
          fill
          className="object-cover"
        />
      </div>

      {/* “Anna”, “&”, “Sahaj” each on its own line */}
      <div className="mt-2 sm:mt-4 md:mt-6 flex flex-col items-center space-y-1">
        <p
          className={`
            w-full sm:w-auto text-center
            ${allura.className}
            text-[#4E194B]
            text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            m-0
          `}
        >
          Anna
        </p>
        <p
          className={`
            w-full sm:w-auto text-center
            ${allura.className}
            text-[#4E194B]
            text-2xl xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl
            m-0
          `}
        >
          &amp;
        </p>
        <p
          className={`
            w-full sm:w-auto text-center
            ${allura.className}
            text-[#4E194B]
            text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            m-0
          `}
        >
          Sahaj
        </p>
      </div>

      {/* “SAVE the DATE” in one line */}
      <h1 className="w-full sm:w-auto flex items-baseline justify-center space-x-2 mt-4 sm:mt-6">
        <span
          className={`
            ${arapeyItalic.className}
            text-[#4E194B]
            text-2xl xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl
            font-bold
          `}
        >
          SAVE
        </span>
        <span
          className={`
            ${allura.className}
            text-[#4E194B]
            text-2xl xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl
            -mb-1 sm:-mb-2 md:-mb-3
          `}
        >
          the
        </span>
        <span
          className={`
            ${arapeyItalic.className}
            text-[#4E194B]
            text-2xl xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl
            font-bold
          `}
        >
          DATE
        </span>
      </h1>

      {/* Date and Location */}
      <p
        className={`
          w-full sm:w-auto text-center
          ${arapeyItalic.className}
          text-[#4E194B]
          text-lg sm:text-xl md:text-2xl
          mt-4
          m-0
        `}
      >
        {dates}
      </p>
      <p
        className={`
          w-full sm:w-auto text-center
          ${allura.className}
          text-[#4E194B]
          text-md sm:text-lg md:text-xl
          mt-1
          m-0
        `}
      >
        {location}
      </p>

      {/* Add to Calendar Button */}
      <Link
        href={inviteUrl}
        className={`
          mt-4
          bg-[#4E194B] text-white
          py-2 px-4
          rounded-full
          hover:bg-[#693972]
          transition-colors duration-200
          text-sm sm:text-base md:text-lg
          ${arapeyItalic.className}
        `}
      >
        Add to Calendar
      </Link>

      {/* Invitation to follow */}
      <p
        className={`
          w-full sm:w-auto text-center
          ${arapeyItalic.className}
          text-[#4E194B]
          text-md sm:text-base md:text-lg
          mt-2
          m-0
        `}
      >
        Invitation to follow
      </p>
    </div>
  );
}
