import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Google Search Console Verification Meta Tag */}
                <meta name="google-site-verification" content="your_verification_code_here" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* You can add other meta tags or links here as needed */}
            </Head>
            <body style={{margin:0,padding: 0}}>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
