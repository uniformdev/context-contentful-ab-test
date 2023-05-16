import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { enableNextSsr } from '@uniformdev/context-next';
import { createUniformContext } from '../lib/uniform';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const serverTracker = createUniformContext(ctx);
    enableNextSsr(ctx, serverTracker);
    return await Document.getInitialProps(ctx);
  }
}

export default MyDocument;