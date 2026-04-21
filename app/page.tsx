import Link from 'next/link';
import Image from 'next/image';
import { FloatingHeader } from '@/components/FloatingHeader';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background overflow-hidden selection:bg-primary selection:text-light">
      <FloatingHeader />

      <div className="absolute inset-0 z-0 opacity-[0.07] translate-y-[5%]">
        <Image
          src="/background/imagem1.png"
          alt="Background"
          fill
          className="object-cover object-[center_top]"
          priority
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-8">
        <StaggerContainer delay={0.1} className="w-full flex flex-col items-center space-y-8">
          <StaggerItem className="flex flex-col items-center space-y-4">
            <div className="relative w-64 h-28 md:w-80 md:h-36 drop-shadow-sm mix-blend-multiply">
              <Image
                src="/logo/logoquinta.png"
                alt="Quinta do Noval Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-serif text-xs text-accent/80 font-bold uppercase tracking-[0.4em]">Menu Exclusivo</h2>
          </StaggerItem>

          <StaggerItem className="h-px w-16 bg-light/10" />

          <StaggerItem>
            <p className="text-light text-[16px] font-light leading-relaxed px-4 text-justify opacity-90 mx-auto max-w-[320px]">
              Esperamos que cada momento deste jantar seja uma descoberta, onde tradição e excelência do Armazém do Peixe e da Quinta do Noval se encontram à mesa. Uma celebração que une autenticidade, elegância e criação, conduzindo-o por uma viagem onde cada prato encontra o seu vinho perfeito.
            </p>
          </StaggerItem>

          <StaggerItem className="w-full max-w-[280px] pt-4">
            <Link
              href="/menu"
              className="group relative w-full overflow-hidden rounded-full bg-white backdrop-blur-md border border-light/10 py-[18px] flex items-center justify-center transition-all hover:bg-light/5 hover:-translate-y-1 active:scale-[0.98] shadow-xl"
            >
              <span className="font-serif text-lg tracking-[0.1em] uppercase text-accent group-hover:text-accent/90 transition-colors">Iniciar Jornada</span>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </main>
  );
}
