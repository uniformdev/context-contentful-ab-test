import { SiteNavbar } from '@/components/Navbar';
import { createUniformContext } from '@/lib/uniform';
import { UniformAppProps } from '@uniformdev/context-next';
import { UniformContext } from '@uniformdev/context-react';
import { SERVER_STATE_ID } from '@uniformdev/context';
import 'bootstrap/dist/css/bootstrap.min.css';

const clientContext = createUniformContext();

export default function App({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps) {
  const resolvedContext = serverUniformContext ?? clientContext;

  type ServerToClientTransitionState = ReturnType<typeof resolvedContext.getServerToClientTransitionState>

  const blankState: ServerToClientTransitionState = {
    quirks: {},
    ssv: {},
    tests: {},
  };

  return (
    <UniformContext
      context={resolvedContext}
    >
      <SiteNavbar />

      <Component {...pageProps} />

      <script
        id={SERVER_STATE_ID}
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blankState)
        }}
      />
    </UniformContext>
  )
}
