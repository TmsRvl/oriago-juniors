import { prefixPath } from '@/lib/utils-path'
export function CrestWatermark() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 flex items-center justify-center overflow-hidden">
      <div className="absolute left-1/2 top-1/3 size-[60rem] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[140px]" />
      <img
        src = {prefixPath('/images/logo-oriago.png')}
        alt=""
        width={800}
        height={800}
        className="h-[85vh] max-w-[90vw] object-contain opacity-10 mix-blend-screen"
      />
    </div>
  )
}
