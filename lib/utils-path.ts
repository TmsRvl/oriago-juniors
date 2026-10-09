const basePath = process.env.NODE_ENV === 'production' ? '/oriago-juniors' : ''

export function prefixPath(path: string) {
  if (path.startsWith('http')) return path
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}