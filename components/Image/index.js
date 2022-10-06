import NextImage from 'next/image';
import { loader } from './loader';

export function RemoteImage(props) {
  return <NextImage {...props} loader={loader} />;
}
