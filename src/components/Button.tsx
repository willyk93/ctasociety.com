import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outline' | 'accent' | 'outline-light';
type Size = 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
}

type ButtonProps =
  | (BaseProps & { to: string; href?: never; type?: never; onClick?: never })
  | (BaseProps & { href: string; to?: never; type?: never; onClick?: never })
  | (BaseProps & { to?: never; href?: never; type?: 'button' | 'submit'; onClick?: () => void });

const variants: Record<Variant, string> = {
  // Rouge : appel à l'action principal
  primary: 'bg-brand-red text-white hover:bg-brand-red-700 shadow-sm',
  // Bleu : action secondaire
  secondary: 'bg-brand-blue text-white hover:bg-brand-blue-700 shadow-sm',
  // Contour bleu sur fond clair
  outline: 'border-2 border-brand-blue/20 text-brand-blue hover:border-brand-blue hover:bg-brand-blue-50',
  // Jaune : sur fond bleu
  accent: 'bg-brand-yellow text-brand-blue hover:bg-[#FFD633] shadow-sm',
  // Contour blanc sur fond bleu
  'outline-light': 'border-2 border-white/40 text-white hover:border-white hover:bg-white/10',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

export function Button({ children, variant = 'primary', size = 'md', className = '', icon, ...rest }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 text-center ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && <span aria-hidden="true" className="shrink-0">{icon}</span>}
    </>
  );

  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={classes}>
        {content}
      </Link>
    );
  }
  if ('href' in rest && rest.href) {
    return (
      <a href={rest.href} className={classes}>
        {content}
      </a>
    );
  }
  const { type = 'button', onClick } = rest as { type?: 'button' | 'submit'; onClick?: () => void };
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
