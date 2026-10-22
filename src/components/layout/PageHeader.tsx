interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="mb-6">
      {eyebrow ? (
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 text-2xl font-medium tracking-tight text-foreground">{title}</h1>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </header>
  );
}
