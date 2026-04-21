import Link from 'next/link';
import Image from 'next/image';
import { FloatingHeader } from '@/components/FloatingHeader';
import { dinnerSequence } from '@/lib/data/dinner-sequence';
import { ChevronRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function MenuOverview() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background pb-24 selection:bg-primary selection:text-light">
      <FloatingHeader />

      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <Image
          src="/background/imagempag2.png"
          alt="Background"
          fill
          className="object-cover object-[center_top]"
          priority
        />
      </div>

      <div className="relative z-10 pt-28 px-6 max-w-md mx-auto w-full">
        <FadeIn delay={0.1} className="text-center mb-16 flex flex-col items-center">
          <div className="relative w-48 h-20 mb-6 drop-shadow-sm mix-blend-multiply">
            <Image
              src="/logo/logoquinta.png"
              alt="Quinta do Noval"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="font-serif text-3xl text-accent tracking-[0.1em] uppercase mb-4">A Jornada</h1>
          <div className="h-px w-12 bg-primary/50 mx-auto" />
        </FadeIn>

        <StaggerContainer delay={0.3} className="space-y-8 relative before:absolute before:inset-y-2 before:left-[27px] before:w-px before:bg-light/10">
          {dinnerSequence.map((moment) => (
            <StaggerItem key={moment.id}>
              <Link
                href={`/moment/${moment.id}`}
                className="relative flex items-center gap-6 group block"
              >
                {/* Timeline dot */}
                <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-light/20 flex items-center justify-center text-light/60 font-serif z-10 group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 shadow-sm">
                  <span className="text-2xl leading-none">{moment.momentOrder}</span>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/80 backdrop-blur-md border border-white rounded-2xl p-5 flex items-center shadow-lg transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="flex-1 pb-1">
                    <h3 className="font-serif text-[17px] text-black mb-1.5 leading-tight whitespace-pre-line">{moment.wine.name}</h3>
                    <p className="text-[13px] text-primary font-light italic leading-snug">C/ {moment.dish.name}</p>
                  </div>
                  <ChevronRight size={18} className="text-light/40 group-hover:text-primary transition-colors ml-4 shrink-0" strokeWidth={1.5} />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}
