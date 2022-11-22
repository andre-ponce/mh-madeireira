export function loader({ src, width, height }) {
  const url = new URL(src);
  if (width) url.searchParams.append('w', width);
  if (height) url.searchParams.append('h', height);
  return url.href;
}
