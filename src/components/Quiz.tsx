import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Quiz() {
  const { t } = useTranslation();
  
  const QUIZ_STEPS = (t('quiz.questions', { returnObjects: true }) as any[]);

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (option: string) => {
    setAnswers(prev => ({ ...prev, [step]: option }));
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const currentProgress = (step / 5) * 100;

  const renderStep = () => {
    if (isSubmitted) {
      return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
          <div className="w-20 h-20 bg-gradient-to-tr from-accent-1 to-accent-3 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_-10px_rgba(124,92,252,0.5)]">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">{t('quiz.thanks_title')}</h3>
          <p className="text-text-secondary text-lg">{t('quiz.thanks_desc')}</p>
        </motion.div>
      );
    }

    if (step === 5) {
      return (
        <motion.div key="step-5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-text-primary">{t('quiz.last_step')}</h3>
            <p className="text-text-secondary">{t('quiz.last_step_desc')}</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="space-y-4">
            <div>
              <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full input-equus rounded-md px-4 py-3 placeholder:text-text-tertiary" placeholder={t('quiz.form.name_placeholder')} />
            </div>
            <div>
              <input type="text" required value={formData.contact} onChange={e => setFormData({ ...formData, contact: e.target.value })} className="w-full input-equus rounded-md px-4 py-3 placeholder:text-text-tertiary" placeholder={t('quiz.form.contact_placeholder')} />
            </div>
            <div className="flex justify-between items-center pt-6 border-t border-border-color mt-8">
              <button type="button" onClick={prevStep} className="px-6 py-3 rounded-md text-text-secondary hover:text-white hover:bg-bg-card-hover transition-colors font-medium border border-border-color">← {t('quiz.back')}</button>
              <button type="submit" className="btn-equus px-8 py-3 rounded-md font-medium">{t('quiz.form.submit')}</button>
            </div>
          </form>
        </motion.div>
      );
    }

    const currentQuestion = QUIZ_STEPS[step - 1];
    return (
      <motion.div key={`step-${step}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex flex-col h-full">
        <h3 className="text-3xl font-bold text-text-primary mb-8 tracking-tight">{currentQuestion.q}</h3>
        <div className="space-y-3 flex-grow">
          {currentQuestion.opt.map((option: string, idx: number) => {
            const isSelected = answers[step] === option;
            return (
              <button key={idx} type="button" onClick={() => handleOptionSelect(option)} className={`w-full flex items-center p-5 rounded-md border text-left transition-all duration-300 ${isSelected ? 'border-accent-1 bg-accent-1/10 shadow-[0_0_20px_-5px_rgba(124,92,252,0.15)]' : 'border-border-color bg-bg-card hover:bg-bg-card-hover hover:border-border-active'}`}>
                <div className={`w-5 h-5 rounded-full border mr-4 flex-shrink-0 flex items-center justify-center transition-colors ${isSelected ? 'border-accent-1 bg-accent-1' : 'border-text-tertiary'}`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className={`font-medium ${isSelected ? 'text-white' : 'text-text-secondary'}`}>{option}</span>
              </button>
            )
          })}
        </div>
        <div className="flex justify-between items-center pt-8 mt-auto border-t border-border-color">
          <div className="text-sm font-medium text-text-tertiary">{t('quiz.step_of', { current: step, total: 5 })}</div>
          <div className="flex gap-4">
             {step > 1 && <button type="button" onClick={prevStep} className="w-12 h-12 flex items-center justify-center rounded-md text-text-secondary hover:text-white hover:bg-bg-card border border-border-color transition-colors">←</button>}
             <button onClick={nextStep} disabled={!answers[step]} className={`btn-equus px-8 py-3 rounded-md font-medium flex items-center gap-2 ${!answers[step] ? 'opacity-50 cursor-not-allowed hidden' : ''}`}>{t('quiz.next')} →</button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
       <div className="bg-bg-card border border-border-color rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col pt-12">
          {!isSubmitted && (
             <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
               <motion.div className="h-full bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3" initial={{ width: 0 }} animate={{ width: `${currentProgress}%` }} transition={{ duration: 0.5 }} />
             </div>
          )}
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
       </div>
    </div>
  );
}
