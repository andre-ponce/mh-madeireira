import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.1/dist/cookieconsent.js" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" />
        <script async src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous" />
        <script async src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous" />
      </body>
    </Html>
  );
}

export default MyDocument;
