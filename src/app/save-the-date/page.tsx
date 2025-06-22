import PetalAnimation from "@/components/PetalAnimation"
import StaticCard from "@/components/StaticCard";

export default function SaveTheDatePage() {
  return (
    <main
      className="h-screen w-full bg-cover bg-center flex items-center justify-center p-4 relative overflow-hidden"
      style={{ backgroundImage: "url('/wall2_small.png')" }}
    >
      <PetalAnimation />

      {/* Main Card Container */}
      <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto">
        <StaticCard />
      </div>

      {/* Right-side decorative image */}
      <img
        src="/right_single_dark.png"
        alt="Decoration Right"
        className="
          absolute 
          bottom-0 
          right-[15%] xs:right-[20%] sm:right-[25%] md:right-[28%] lg:right-[30%]
          w-auto 
          hidden md:block
          h-[40%] xs:h-[50%] sm:h-[60%] md:h-[65%] lg:h-[70%]
        "
      />
    </main>
  );
}