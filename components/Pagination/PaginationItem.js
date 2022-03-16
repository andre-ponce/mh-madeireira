import React from 'react';
import Link from 'next/link';

export function PaginationItem({ text, href }) {
  return (
    href
      ? (
        <Link passHref href={href}>
          <a style={{ color: 'blue', display: 'inline-block', margin: '25px 0 ' }}>{text}</a>
        </Link>
      )
      : <span style={{ color: '#999', display: 'inline-block', margin: '25px 0 ' }}>{text}</span>
  );
}
