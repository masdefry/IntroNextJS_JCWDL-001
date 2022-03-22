import Script from 'next/script'
import '../styles/globals.css'

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-EB4Y7GPYZ7"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-EB4Y7GPYZ7');
// </script>

function MyApp({ Component, pageProps }) {
  return(
    <>
        <Script 
        strategy='lazyOnLoad'
        src={'https://www.googletagmanager.com/gtag/js?id=G-EB4Y7GPYZ7'}
      />

        <Script strategy='lazyOnLoad'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
      
            gtag('config', 'G-EB4Y7GPYZ7');
          `
        }
      </Script>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
