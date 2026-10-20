// import { prefixPath } from '@/lib/utils-path'
// export function CrestWatermark() {
//   return (
//     <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 flex items-center justify-center overflow-hidden">
//       <div className="absolute left-1/2 top-1/3 size-[60rem] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[140px]" />
//       <img
//         src = {prefixPath('/images/logo-oriago.png')}
//         alt=""
//         width={800}
//         height={800}
//         className="h-[85vh] max-w-[90vw] object-contain opacity-10 mix-blend-screen"
//       />
//     </div>
//   )
// }

import { prefixPath } from '@/lib/utils-path'

export function CrestWatermark() {
  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 -z-20 flex items-center justify-center overflow-hidden will-change-transform transform-gpu"
    >
      {/* 
        Sostituito il blur-[140px] pesante con un gradiente radiale puro:
        nessun calcolo di filtro per la GPU di Safari 
      */}
      <div className="absolute left-1/2 top-1/3 size-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(var(--primary-rgb,59,130,246),0.06)_0%,transparent_70%)]" />

      {/* Rimosso mix-blend-screen e aggiunta accelerazione hardware */}
      <img
        src={prefixPath('/images/logo-oriago.webp')}
        alt=""
        width={400}
        height={400}
        loading="lazy"
        decoding="async"
        className="h-[70vh] max-w-[85vw] object-contain opacity-[0.07] transform-gpu"
      />
    </div>
  )
}