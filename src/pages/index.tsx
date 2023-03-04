import { useState } from 'react'
import { client } from '@/libs/client'
import type { Post } from '@/types'
import { Profile } from '@/components/Profile'
import { Category } from '@/components/Category'
import { Header } from '@/components/Header'
import { formatDateToHumanReadable } from '@/utils/day.util'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  posts: Array<Post>
}

export default function IndexPage({ posts }: Props) {
  const [category, setCategory] = useState('')

  const filterByCategory = (category: string) => {
    setCategory(category)
  }

  return (
    <>
      <Head>
        <title>Kenの技術ブログ</title>
        <meta
          name="description"
          content="Web開発の技術情報をアウトプットしていきます。本ブログを通して、課題を抱える方のお役に立てれば幸いです。"
        />
      </Head>
      <Header />
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 h-96">
          {posts.map(
            (post) =>
              (post.categories.includes(category) || !category) && (
                <Link href={`/posts/${post.id}`} key={post.id}>
                  <a>
                    <div className="rounded overflow-hidden shadow-lg">
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
                      <img src={post.eye_catch.url} alt={post.id} className="h-48 object-contain w-full mx-auto" />
                      <div className="px-6 py-4 text-2xl font-bold">{post.title}</div>
                      <div className="flex justify-end items-end h-28 mr-4">
                        {formatDateToHumanReadable(post.publishedAt)}
                      </div>
                    </div>
                  </a>
                </Link>
              )
          )}
        </div>
        <div className="col-span-1">
          <Profile />
          <Category filter={filterByCategory} />
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blogs' })
  return {
    props: {
      posts: data.contents,
    },
  }
}
