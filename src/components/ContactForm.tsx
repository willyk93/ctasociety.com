import { useRef, useState, type FormEvent } from 'react';
import { CircleAlert, CircleCheck, Info, Send } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import type { Translation } from '../translations';
import { Button } from './Button';

type Field = 'name' | 'email' | 'subject' | 'message';
type ErrorKey = keyof Translation['contact']['form']['errors'];
type Values = Record<Field, string>;

const EMPTY: Values = { name: '', email: '', subject: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** On stocke des CLÉS d'erreur (et non des phrases) pour que les messages suivent la langue choisie. */
function validate(v: Values): Partial<Record<Field, ErrorKey>> {
  const errors: Partial<Record<Field, ErrorKey>> = {};
  if (!v.name.trim()) errors.name = 'nameRequired';
  if (!v.email.trim()) errors.email = 'emailRequired';
  else if (!EMAIL_RE.test(v.email.trim())) errors.email = 'emailInvalid';
  if (!v.subject.trim()) errors.subject = 'subjectRequired';
  if (!v.message.trim()) errors.message = 'messageRequired';
  else if (v.message.trim().length < 10) errors.message = 'messageTooShort';
  return errors;
}

/**
 * Formulaire de contact STATIQUE : validation côté client uniquement.
 * Aucun message n'est envoyé. Pour le connecter plus tard (Formspree,
 * Netlify Forms, EmailJS, API maison…), remplacer le contenu de `handleSubmit`.
 */
export function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, ErrorKey>>>({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const update = (field: Field, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setSubmitted(false);
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setSubmitted(false);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    // TODO : connecter ici le système de courriel de l'association.
    setSubmitted(true);
    setValues(EMPTY);
    requestAnimationFrame(() => successRef.current?.focus());
  };

  const hasErrors = Object.keys(errors).length > 0;

  const inputClass = (field: Field) =>
    `mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted/60 transition-colors focus:outline-none focus:ring-4 ${
      errors[field]
        ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/15'
        : 'border-surface-line focus:border-brand-blue focus:ring-brand-blue/10'
    }`;

  const renderLabel = (field: Field, label: string) => (
    <label htmlFor={`contact-${field}`} className="text-sm font-semibold text-ink">
      {label} <span className="text-brand-red" aria-hidden="true">*</span>
      <span className="sr-only"> ({f.required})</span>
    </label>
  );

  const renderError = (field: Field) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-brand-red">
        <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        {f.errors[errors[field]!]}
      </p>
    ) : null;

  const aria = (field: Field) => ({
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `contact-${field}-error` : undefined,
    'aria-required': true,
  });

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="flex gap-3 rounded-xl border border-brand-yellow/60 bg-brand-yellow-50 p-4 text-sm text-ink">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
        <p>{f.notice}</p>
      </div>

      {hasErrors && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-xl border border-brand-red/30 bg-brand-red-50 p-4 text-sm font-semibold text-brand-red">
          {f.errors.summary}
        </div>
      )}

      {submitted && (
        <div ref={successRef} tabIndex={-1} role="status" className="flex gap-3 rounded-xl border border-green-700/25 bg-green-50 p-4 text-sm text-green-900">
          <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
          <p>{f.success}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {renderLabel('name', f.name)}
          <input id="contact-name" name="name" type="text" autoComplete="name" value={values.name} onChange={(e) => update('name', e.target.value)} className={inputClass('name')} {...aria('name')} />
          {renderError('name')}
        </div>
        <div>
          {renderLabel('email', f.email)}
          <input id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" value={values.email} onChange={(e) => update('email', e.target.value)} className={inputClass('email')} {...aria('email')} />
          {renderError('email')}
        </div>
      </div>
      <div>
        {renderLabel('subject', f.subject)}
        <input id="contact-subject" name="subject" type="text" value={values.subject} onChange={(e) => update('subject', e.target.value)} className={inputClass('subject')} {...aria('subject')} />
        {renderError('subject')}
      </div>
      <div>
        {renderLabel('message', f.message)}
        <textarea id="contact-message" name="message" rows={6} value={values.message} onChange={(e) => update('message', e.target.value)} className={`${inputClass('message')} resize-y`} {...aria('message')} />
        {renderError('message')}
      </div>
      <Button type="submit" variant="primary" size="lg" icon={<Send className="h-4 w-4" />} className="w-full sm:w-auto">
        {f.submit}
      </Button>
    </form>
  );
}
