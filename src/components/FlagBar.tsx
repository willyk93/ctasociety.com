/** Fin liseré tricolore — rappel discret du drapeau du Tchad (bleu · jaune · rouge). */
export function FlagBar({ className = 'h-1' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex w-full ${className}`}>
      <span className="flex-1 bg-brand-blue" />
      <span className="flex-1 bg-brand-yellow" />
      <span className="flex-1 bg-brand-red" />
    </div>
  );
}
