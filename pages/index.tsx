import { IPage, IPageFields } from '@/@types/generated/contentful'
import { resolveComponent } from '@/components/resolve'
import { contentfulClient } from '@/lib/contentful'
import { GetStaticProps } from 'next'
import { Inter } from 'next/font/google'
import { Container } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

type HomeProps = {
  page: IPageFields
}

export default function Home({
  page
}: HomeProps) {
  return (
    <Container>
      <main className={`${inter.className}`}>

        {page.components?.map((component, index) => {
          const ResolvedComponent = resolveComponent(component.sys.contentType.sys.id);

          if (!ResolvedComponent) {
            return null;
          }

          return (
            <ResolvedComponent
              {...component.fields}
              key={`component-${index}`}
            />
          )
        })}

      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await contentfulClient.getEntries({
    content_type: 'page',
    'fields.slug[match]': 'home',
    include: 3,
    limit: 1
  });

  const [page] = response.items as IPage[];

  return {
    props: {
      page: page.fields
    }
  }
}