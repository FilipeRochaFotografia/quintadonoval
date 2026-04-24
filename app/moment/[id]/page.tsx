import { FloatingHeader } from '@/components/FloatingHeader';
import { dinnerSequence } from '@/lib/data/dinner-sequence';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Wine, UtensilsCrossed } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export function generateStaticParams() {
  return dinnerSequence.map((moment) => ({
    id: moment.id,
  }));
}

export default async function MomentDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const currentIndex = dinnerSequence.findIndex(m => m.id === params.id);
  
  if (currentIndex === -1) {
    notFound();
  }

  const moment = dinnerSequence[currentIndex];
  const prevMoment = currentIndex > 0 ? dinnerSequence[currentIndex - 1] : null;
  const nextMoment = currentIndex < dinnerSequence.length - 1 ? dinnerSequence[currentIndex + 1] : null;

  return (
    <main className="min-h-screen flex flex-col relative bg-background pb-24 selection:bg-primary selection:text-light">
      <FloatingHeader />
      
      {/* Removed premium ambient glow */}

      <div className="relative z-10 pt-28 px-6 max-w-lg mx-auto w-full">
        {/* Moment Header */}
        <FadeIn delay={0.1} className="text-center mb-8">
          <div className="relative w-40 h-20 mx-auto mb-6 drop-shadow-sm mix-blend-multiply">
            <Image
              src="/logo/logoquinta.png"
              alt="Quinta do Noval Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-serif text-[10px] text-accent/80 font-semibold uppercase tracking-[0.4em] mb-4">
            Momento {moment.momentOrder} de 8
          </p>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-light/10" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="h-px flex-1 bg-light/10" />
          </div>
        </FadeIn>

        {/* Pairing Visuals */}
        <StaggerContainer delay={0.2} className="flex flex-col gap-8 mb-16">
          {/* Wine */}
          <StaggerItem className="flex flex-col items-center">
            <div className="relative w-48 h-64 mb-6 drop-shadow-lg">
              <Image 
                src={moment.wine.image} 
                alt={moment.wine.name}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-serif text-2xl text-accent text-center mb-2 leading-tight whitespace-pre-line">{moment.wine.name}</h2>
            <p className="text-sm font-light text-light/50 text-center px-4 mb-4 leading-relaxed">{moment.wine.shortDescription}</p>
            
            <div className="flex items-center gap-2 font-serif text-xs text-primary/80 uppercase tracking-widest">
              <Wine size={14} />
              <span>{moment.wine.region} · {moment.wine.type}</span>
            </div>
          </StaggerItem>



          {/* Dish */}
          <StaggerItem className="flex flex-col items-center">
            <div className="relative w-64 h-48 mb-6 drop-shadow-xl rounded-2xl overflow-hidden bg-light/5 border border-light/10 flex items-center justify-center">
              <Image 
                src={moment.dish.image} 
                alt={moment.dish.name}
                fill
                className="object-cover opacity-80"
              />
            </div>
            <h3 className="font-serif text-xl text-accent text-center mb-2 leading-tight">{moment.dish.name}</h3>
            <p className="text-sm font-light text-light/50 text-center px-4 mb-4 leading-relaxed">{moment.dish.shortDescription}</p>
            
            <div className="flex items-center gap-2 font-serif text-xs text-accent/80 uppercase tracking-widest">
              <UtensilsCrossed size={14} />
              <span>{moment.dish.type}</span>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Editorial Text */}
        <FadeIn delay={0.6} className="bg-primary/10 backdrop-blur-md border border-primary/20 rounded-3xl p-8 mb-16 relative shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background/60 backdrop-blur-sm px-4 rounded-full border border-primary/20">
            <span className="font-serif text-[10px] uppercase tracking-[0.3em] text-accent">A Harmonização</span>
          </div>
          <p className="text-[17px] text-light/90 leading-relaxed text-justify italic">
            "{moment.editorialPairing}"
          </p>
        </FadeIn>

        {/* Profiles Details */}
        <StaggerContainer delay={0.7} className="space-y-12 mb-16 px-2">
          <StaggerItem>
            <section>
            <h4 className="font-serif text-xl border-b border-light/10 pb-4 mb-4 text-accent">O Vinho em Detalhe</h4>
            <div className="space-y-4 font-light text-sm text-light/70">
              <p className="leading-relaxed text-justify">{moment.wine.longDescription}</p>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-light/5">
                <div>
                  <span className="block font-serif text-[10px] uppercase tracking-[0.2em] text-accent/80 mb-3">Análise</span>
                  <ul className="space-y-1.5 text-xs">
                    <li><span className="text-light/40">Acidez:</span> <span className="text-light/80">{moment.wine.sensoryProfile.acidity}</span></li>
                    <li><span className="text-light/40">Corpo:</span> <span className="text-light/80">{moment.wine.sensoryProfile.body}</span></li>
                    <li><span className="text-light/40">Final:</span> <span className="text-light/80">{moment.wine.sensoryProfile.finish}</span></li>
                  </ul>
                </div>
                <div>
                  <span className="block font-serif text-[10px] uppercase tracking-[0.2em] text-accent/80 mb-3">Serviço</span>
                  <ul className="space-y-1.5 text-xs">
                    <li><span className="text-light/40">Álcool:</span> <span className="text-light/80">{moment.wine.alcohol} vol.</span></li>
                    <li><span className="text-light/40">Temp:</span> <span className="text-light/80">{moment.wine.serviceTemperature}</span></li>
                    <li><span className="text-light/40">Copo:</span> <span className="text-light/80">{moment.wine.recommendedGlass}</span></li>
                  </ul>
                </div>
              </div>
            </div>
            </section>
          </StaggerItem>

          <StaggerItem>
            <section>
              <h4 className="font-serif text-xl border-b border-light/10 pb-4 mb-4 text-accent">O Prato em Detalhe</h4>
            <div className="space-y-4 font-light text-sm text-light/60">
              <p className="leading-relaxed">{moment.dish.longDescription}</p>
            </div>
            </section>
          </StaggerItem>
        </StaggerContainer>

        {/* Navigation */}
        <FadeIn delay={0.9} className="flex items-center justify-between border-t border-light/10 pt-8 mt-12 pb-8">
          {prevMoment ? (
            <Link href={`/moment/${prevMoment.id}`} className="flex items-center gap-3 text-light/50 hover:text-light transition-colors group">
              <ChevronLeft size={20} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left w-24">
                <span className="block font-serif text-[10px] uppercase tracking-[0.3em] mb-1 text-light/30">Anterior</span>
                <span className="font-serif text-xs truncate block">{prevMoment.wine.name}</span>
              </div>
            </Link>
          ) : (
            <div className="w-32" />
          )}

          {nextMoment ? (
            <Link href={`/moment/${nextMoment.id}`} className="flex items-center gap-3 text-light/50 hover:text-light transition-colors group text-right justify-end">
              <div className="text-right w-24">
                <span className="block font-serif text-[10px] uppercase tracking-[0.3em] mb-1 text-light/30">Próximo</span>
                <span className="font-serif text-xs truncate block">{nextMoment.wine.name}</span>
              </div>
              <ChevronRight size={20} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div className="text-right">
              <Link href="/agradecimento" className="inline-block border border-primary/50 text-primary px-6 py-2 rounded-full text-xs tracking-widest uppercase hover:bg-primary/10 transition-colors">
                Finalizar
              </Link>
            </div>
          )}
        </FadeIn>
      </div>
    </main>
  );
}
