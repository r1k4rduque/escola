export default function TechBadge({ src, alt }) {
  return (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ice-white p-1.5 shadow-sm">
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </span>
  )
}
