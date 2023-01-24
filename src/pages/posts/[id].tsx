import type { GetStaticPaths } from 'next'
import Head from 'next/head'
import { Profile } from '@/components/Profile'
import { Category } from '@/components/Category'
import { Header } from '@/components/Header'
import { client } from '@/libs/client'
import type { Post } from '@/types'
import { formatDateToHumanReadable } from '@/utils/day.util'

type PageProps = {
  post: Post
}

const postDetailPage = ({ post }: PageProps) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Header />
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className="col-span-2 px-4">
            <article className="prose max-w-none">
              {'categories' in post && (
                <div className="flex">
                  {post.categories.map((category, index) => (
                    <div
                      className="ml-2 mt-5 bg-yellow-400 px-4 py-1 rounded-3xl text-white text-base leading-6 font-bold"
                      key={index}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}

              <h1 className="text-4xl mt-5 leading-10 font-extrabold text-gray-800">{post.title}</h1>

              <div className="text-right text-xl">{formatDateToHumanReadable(post.publishedAt)}</div>

              <div className="py-8" dangerouslySetInnerHTML={{ __html: post.body }}></div>
            </article>
          </div>
        </div>
        <div className="col-span-1">
          <Profile />
        </div>
      </div>
    </div>
  )
}

type UrlParams = {
  id: string
}

export const getStaticPaths: GetStaticPaths<UrlParams> = async () => {
  const data = await client.get({ endpoint: 'blogs' })
  const paths = data.contents.map((post: Post) => {
    return {
      params: {
        id: post.id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blogs', contentId: id })
  console.log('data', data.contents)
  return {
    props: {
      post: data,
    },
  }
}

export default postDetailPage
