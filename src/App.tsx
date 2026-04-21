import React from 'react';
import { Quiz } from './components/Quiz';
import faviconImg from '../assets/electrolab_favicon.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] nav-blur border-b border-border-color h-[70px]">
        <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-bold text-xl">
            <span className="w-10 h-10 border border-border-color rounded-md overflow-hidden bg-bg-card flex items-center justify-center relative p-1 pointer-events-none">
              <img src={faviconImg} alt="Electrolab Logo" className="w-full h-full object-contain pointer-events-auto" />
            </span>
            <span>ELECTROLAB</span>
          </a>
          <ul className="hidden md:flex gap-8 text-[0.9rem] font-medium text-text-secondary items-center">
            <li><a href="#about" className="hover:text-text-primary transition-colors">{t('nav.about')}</a></li>
            <li><a href="#services" className="hover:text-text-primary transition-colors">{t('nav.services')}</a></li>
            <li><a href="#partners" className="hover:text-text-primary transition-colors">{t('nav.partners')}</a></li>
            <li><a href="#contact" className="hover:text-text-primary transition-colors">{t('nav.contact')}</a></li>
            <li className="flex gap-2 ml-4">
              <button onClick={() => changeLanguage('ru')} className={`hover:text-text-primary transition-colors ${i18n.language.startsWith('ru') ? 'text-text-primary font-bold' : ''}`}>RU</button>
              <span>|</span>
              <button onClick={() => changeLanguage('ky')} className={`hover:text-text-primary transition-colors ${i18n.language.startsWith('ky') ? 'text-text-primary font-bold' : ''}`}>КЫ</button>
              <span>|</span>
              <button onClick={() => changeLanguage('en')} className={`hover:text-text-primary transition-colors ${i18n.language.startsWith('en') ? 'text-text-primary font-bold' : ''}`}>EN</button>
            </li>
          </ul>
        </div>
      </nav>

      <section id="hero" className="relative min-h-[100vh] flex items-center justify-center pt-[120px] pb-[80px] overflow-hidden bg-bg-primary">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-accent-1 rounded-full blur-[100px] opacity-40 -top-[20%] right-[-10%] animate-[orbFloat_20s_ease-in-out_infinite]"></div>
          <div className="absolute w-[400px] h-[400px] bg-accent-2 rounded-full blur-[100px] opacity-40 -bottom-[15%] left-[-5%] animate-[orbFloat_20s_ease-in-out_infinite_reverse_7s]"></div>
          <div className="absolute w-[300px] h-[300px] bg-accent-3 rounded-full blur-[100px] opacity-40 top-[40%] left-[50%] animate-[orbFloat_20s_ease-in-out_infinite_14s]"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)' }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-[800px] px-6 mx-auto">
          <div className="inline-block px-6 py-1.5 bg-bg-glass border border-bg-glass-border rounded-full text-sm font-medium text-text-secondary mb-8 backdrop-blur-md">
            {t('hero.badge')}
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight mb-8">
            <span className="text-white">{t('hero.title_main')}<br/></span>{' '}
            <span className="equus-gradient-text">{t('hero.title_accent')}</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.2rem)] text-text-secondary max-w-[600px] mx-auto mb-12 leading-relaxed">
            {t('hero.desc')}
          </p>
          <div className="flex justify-center gap-4">
            <a href="#quiz" className="btn-equus px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center">{t('hero.cta')}</a>
          </div>
        </div>
        
        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2">
          <div className="w-[2px] h-[40px] equus-gradient-bg rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-bg-primary h-full w-full animate-[scrollLine_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-y border-border-color bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4">{t('about.title')}</h2>
            <p className="text-text-secondary text-base leading-[1.6]">
              {t('about.desc')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:text-left">
            <div>
              <div className="equus-gradient-text text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none mb-2">25<span className="text-[clamp(1.5rem,3vw,2rem)]">+</span></div>
              <div className="text-text-secondary text-sm font-medium">{t('about.stats.years')}</div>
            </div>
            <div>
              <div className="equus-gradient-text text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none mb-2">2000<span className="text-[clamp(1.5rem,3vw,2rem)]">+</span></div>
              <div className="text-text-secondary text-sm font-medium">{t('about.stats.consultations')}</div>
            </div>
            <div>
              <div className="equus-gradient-text text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none mb-2">10<span className="text-[clamp(1.5rem,3vw,2rem)]">+</span></div>
              <div className="text-text-secondary text-sm font-medium">{t('about.stats.industries')}</div>
            </div>
            <div>
              <div className="equus-gradient-text text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none mb-2">500<span className="text-[clamp(1.5rem,3vw,2rem)]">+</span></div>
              <div className="text-text-secondary text-sm font-medium">{t('about.stats.plans')}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="quiz" className="py-24 max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4">{t('quiz.title')}</h2>
          <p className="text-[1.05rem] text-text-secondary max-w-[600px] mx-auto">
            {t('quiz.desc')}
          </p>
        </div>
        <Quiz />
      </section>

      <section id="services" className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center gap-6 p-6 mb-12 bg-bg-glass border border-border-color rounded-2xl backdrop-blur-md">
            <div className="text-[2rem]">⚙️</div>
            <div>
              <h3 className="text-xl font-bold mb-1">{t('services.badge_title')}</h3>
              <p className="text-sm text-text-secondary">{t('services.badge_desc')}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card flex flex-col cursor-pointer group">
              <div className="aspect-[4/5] bg-bg-tertiary w-full relative overflow-hidden flex-shrink-0 flex items-center justify-center">
                 <img src={img1} alt={t('services.items.diag')} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full equus-gradient-bg flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                       ↗
                    </div>
                 </div>
              </div>
              <div className="p-8 pb-10 flex-grow text-center">
                <h4 className="text-lg font-bold group-hover:text-accent-1 transition-colors">{t('services.items.diag')}</h4>
              </div>
            </div>
            
            <div className="glass-card flex flex-col cursor-pointer group">
              <div className="aspect-[4/5] bg-bg-tertiary w-full relative overflow-hidden flex-shrink-0 flex items-center justify-center">
                 <img src={img2} alt={t('services.items.strategy')} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full equus-gradient-bg flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                       ↗
                    </div>
                 </div>
              </div>
              <div className="p-8 pb-10 flex-grow text-center">
                <h4 className="text-lg font-bold group-hover:text-accent-1 transition-colors">{t('services.items.strategy')}</h4>
              </div>
            </div>
            
            <div className="glass-card flex flex-col cursor-pointer group">
              <div className="aspect-[4/5] bg-bg-tertiary w-full relative overflow-hidden flex-shrink-0 flex items-center justify-center">
                 <img src={img3} alt={t('services.items.auto')} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full equus-gradient-bg flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                       ↗
                    </div>
                 </div>
              </div>
              <div className="p-8 pb-10 flex-grow text-center">
                <h4 className="text-lg font-bold group-hover:text-accent-1 transition-colors">{t('services.items.auto')}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
             <div className="inline-block px-5 py-1.5 bg-bg-glass border border-bg-glass-border rounded-full text-xs font-semibold text-accent-1 uppercase tracking-widest mb-6">{t('work.badge')}</div>
             <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4">{t('work.title')}</h2>
             <p className="text-[1.05rem] text-text-secondary max-w-[600px] mx-auto">
               {t('work.desc')}
             </p>
          </div>
          <div className="max-w-[600px] mx-auto">
             {(t('work.steps', { returnObjects: true }) as string[]).map((step: string, idx: number) => (
                <div key={idx} className="flex items-center gap-6 mb-8 group cursor-default">
                   <div className="w-12 h-12 rounded-full bg-bg-card border-2 border-border-color group-hover:border-accent-1 text-text-secondary group-hover:text-white flex flex-shrink-0 items-center justify-center font-bold text-lg transition-all shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_20px_rgba(124,92,252,0.3)]">
                      {idx + 1}
                   </div>
                   <div className="text-lg font-medium text-text-secondary group-hover:text-white transition-colors">
                      {step}
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
         <div className="max-w-[1200px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4">{t('audience.title')}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {(t('audience.items', { returnObjects: true }) as {title: string, desc: string}[]).map((item, index) => (
                  <div key={index} className="adv-card-effect glass-card p-10">
                    <div className="w-14 h-14 bg-bg-card border border-border-color rounded-full flex items-center justify-center text-xl font-bold equus-gradient-text mb-6">{index + 1}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 relative">
         <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-border-color bg-bg-card shadow-2xl">
               <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-6 leading-snug">{t('digital.title')}</h3>
                  <p className="text-text-secondary mb-8 text-sm md:text-base leading-relaxed">
                    {t('digital.desc')}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                     {(t('digital.tags', { returnObjects: true }) as string[]).map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-border-color rounded-full text-xs font-semibold text-text-secondary">{tag}</span>
                     ))}
                  </div>
                  <div>
                    <a href="https://equus.electrolab.kg" target="_blank" rel="noopener noreferrer" className="btn-equus px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2">{t('digital.cta')} →</a>
                  </div>
               </div>
               <div className="bg-bg-tertiary flex items-center justify-center min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-border-color relative overflow-hidden">
                  <img src={img4} alt="Digital solutions" className="absolute inset-0 w-full h-full object-cover" />
               </div>
            </div>
         </div>
      </section>

      <section id="partners" className="py-24 bg-bg-secondary">
         <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-16 text-center">{t('partners.title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 border border-border-color rounded-2xl overflow-hidden bg-bg-card">
               {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="h-32 border-b md:border-r border-border-color flex flex-col justify-center items-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                     <span className="text-3xl mb-1">🏢</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <section id="contact" className="py-24 bg-bg-primary">
         <div className="max-w-[1200px] mx-auto px-8">
            <div className="text-center mb-16">
               <div className="inline-block px-5 py-1.5 bg-bg-glass border border-bg-glass-border rounded-full text-xs font-semibold text-accent-1 uppercase tracking-widest mb-6">{t('contact.badge')}</div>
               <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4">{t('contact.title')}</h2>
               <p className="text-[1.05rem] text-text-secondary max-w-[600px] mx-auto">
                 {t('contact.desc')}
               </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
               <div>
                  <h3 className="text-xl font-bold mb-8">{t('contact.info_title')}</h3>
                  <div className="flex flex-col gap-4">
                     <a href="tel:+996555666005" className="flex items-center gap-6 p-6 bg-bg-card border border-border-color rounded-xl hover:border-border-active hover:translate-x-1 transition-all">
                        <div className="text-2xl">📞</div>
                        <div>
                           <div className="text-xs font-medium text-text-tertiary mb-1">{t('contact.phone')}</div>
                           <div className="text-[0.95rem] font-semibold text-text-primary">+996 555 666 005</div>
                        </div>
                     </a>
                     <a href="mailto:info@electrolab.kg" className="flex items-center gap-6 p-6 bg-bg-card border border-border-color rounded-xl hover:border-border-active hover:translate-x-1 transition-all">
                        <div className="text-2xl">✉️</div>
                        <div>
                           <div className="text-xs font-medium text-text-tertiary mb-1">{t('contact.email')}</div>
                           <div className="text-[0.95rem] font-semibold text-text-primary">info@electrolab.kg</div>
                        </div>
                     </a>
                     <div className="flex items-center gap-6 p-6 bg-bg-card border border-border-color rounded-xl justify-around mt-2">
                        <a href="#" className="text-2xl opacity-60 hover:opacity-100 transition-opacity">📸</a>
                        <a href="#" className="text-2xl opacity-60 hover:opacity-100 transition-opacity">💬</a>
                        <a href="#" className="text-2xl opacity-60 hover:opacity-100 transition-opacity">✈️</a>
                     </div>
                  </div>
               </div>
               
               <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
                  <div className="flex flex-col gap-2">
                     <label className="text-[0.85rem] font-semibold text-text-secondary">{t('contact.form.email')}</label>
                     <input type="email" placeholder={t('contact.form.input_email')} required className="input-equus px-5 py-3.5 rounded-xl text-[0.95rem] w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[0.85rem] font-semibold text-text-secondary">{t('contact.form.name')}</label>
                     <input type="text" placeholder={t('contact.form.input_name')} required className="input-equus px-5 py-3.5 rounded-xl text-[0.95rem] w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[0.85rem] font-semibold text-text-secondary">{t('contact.form.phone')}</label>
                     <input type="text" placeholder={t('contact.form.input_phone')} className="input-equus px-5 py-3.5 rounded-xl text-[0.95rem] w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[0.85rem] font-semibold text-text-secondary">{t('contact.form.comment')}</label>
                     <textarea rows={4} placeholder={t('contact.form.input_comment')} className="input-equus px-5 py-3.5 rounded-xl text-[0.95rem] w-full resize-y min-h-[120px]"></textarea>
                  </div>
                  <button type="submit" className="btn-equus w-full py-4 rounded-xl font-bold mt-2">{t('contact.form.submit')}</button>
               </form>
            </div>
         </div>
      </section>

      <footer className="py-12 border-t border-border-color">
         <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[0.85rem] text-text-tertiary">
               {t('footer.copy')}
            </div>
            <ul className="flex gap-6 text-[0.85rem] font-medium text-text-secondary">
               <li><a href="#about" className="hover:text-text-primary transition-colors">{t('nav.about')}</a></li>
               <li><a href="#services" className="hover:text-text-primary transition-colors">{t('nav.services')}</a></li>
               <li><a href="#partners" className="hover:text-text-primary transition-colors">{t('nav.partners')}</a></li>
               <li><a href="#contact" className="hover:text-text-primary transition-colors">{t('nav.contact')}</a></li>
            </ul>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-[0.85rem] font-semibold text-text-secondary hover:text-white transition-colors flex items-center gap-1">
               {t('footer.up')} ↑
            </button>
         </div>
      </footer>
    </>
  );
}
