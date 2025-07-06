import PetalAnimation from "@/components/PetalAnimation"
import StaticCard from "@/components/StaticCard";

export default function SaveTheDatePage() {
  return (
    <main
      className="
        relative
        h-screen w-full
        bg-cover bg-center
        flex items-center justify-center
        p-4
        overflow-visible            /* allow our image to hang off the bottom */
      "
      style={{ backgroundImage: "url('/wall2_small.png')" }}
    >
      <PetalAnimation />

      {/* ——— 1) your card wrapper ——— */}
      <div className="relative flex items-center justify-center w-full max-w-[480px] mx-auto">
        <StaticCard 
          dates="27th & 28th December, 2025"
          inviteUrl="/api/invite"
        />
      </div>

      {/* ——— 2) the decorative image, absolutely against <main> ——— */}
      <img
        src="/right_single_dark.png"
        alt="Decoration Right"
        className={`
            absolute 
            bottom-0
            right-[calc(47%-clamp(0px,50vw,240px))]
            hidden md:block
            h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh]
            w-auto
            z-10
            pointer-events-none
        `}
      />
    </main>
  )
}
