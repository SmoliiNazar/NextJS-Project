import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "../node_modules/next/document";

class myDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    
    render(): JSX.Element {
        return (
            <Html lang='en'>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default myDocument;