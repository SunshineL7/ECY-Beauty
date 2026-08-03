import { Tag } from "@/components/ui-kit/Tag";

export interface ProductCardData {
  id: string;
  name: string;
  brand: string;
  /** 缩略图地址，缺省时展示品牌首字母 */
  image?: string;
  score: number;
  tags?: string[];
}

/** 通用产品卡：缩略图 + 品牌 + 安全评分 */
export function ProductCard({
  product,
  onSelect,
}: {
  product: ProductCardData;
  onSelect?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full items-center gap-4 rounded-2xl border border-border/70 bg-card px-4 py-3.5 text-left transition-colors hover:border-primary/40"
    >
      <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-accent/50 text-xs text-muted-foreground">
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          product.brand.slice(0, 2)
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm text-foreground">{product.name}</span>
        <span className="mt-0.5 block truncate text-xs text-muted-foreground">
          {product.brand}
        </span>
        {product.tags?.length ? (
          <span className="mt-1.5 flex flex-wrap gap-1">
            {product.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </span>
        ) : null}
      </span>
      <span className="shrink-0 text-right">
        <span className="block text-base text-foreground">{product.score}</span>
        <span className="block text-[0.65rem] text-muted-foreground">安全分</span>
      </span>
    </button>
  );
}
