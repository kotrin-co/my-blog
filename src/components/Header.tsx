import Link from 'next/link'

export const Header = () => {
  return (
    <div className="container mx-auto">
      <Link href="/">
        <a className="h-20 bg-indigo-500 text-white flex items-center text-3xl">
          <span className="pl-8">Kenの技術ブログ</span>
        </a>
      </Link>
    </div>
  )
}
