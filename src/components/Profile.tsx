import Link from 'next/link'
import { IconContext } from 'react-icons'
import { BsTwitter, BsGithub } from 'react-icons/bs'

export const Profile = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg pb-5">
      <div className="h-12 bg-indigo-500 text-white flex items-center justify-center text-xl">Profile</div>
      <div className="flex justify-center py-5">
        <img src="/profile.jpg" alt="プロフィール画像" className="w-[100px] h-[100px] rounded-full object-contain" />
      </div>
      <div className="p-4 flex flex-col justify-center items-center">
        <div className="text-gray-700 text-xl leading-7 font-bold">Ken</div>
        <div className="text-gray-500 text-sm leading-8 font-normal">Webエンジニア</div>
      </div>
      <div className="text-gray-700 text-base leading-6 font-normal">
        <p className="mx-5">
          　こちらで技術的なアウトプットをして、読んでいただいている方のお役に立てればうれしいです。
        </p>
        <br />
        <p className="ml-5 font-bold">得意なこと</p>
        <p className="ml-5">◯ LINE APIを用いた開発</p>
        <p className="ml-5">◯ 決済API（Stripe・PayPay）</p>
        <p className="ml-5">◯ Google API（スプシ・カレンダー）</p>
        <p className="ml-5">　...など</p>

        <br />
        <p className="ml-5 font-bold">フロントエンド</p>
        <p className="ml-5">TypeScript</p>
        <p className="ml-5">◯ React / Next.js</p>
        <p className="ml-5">◯ Vue.js / Nuxt.js</p>

        <br />
        <p className="ml-5 font-bold">バックエンド</p>
        <p className="ml-5">◯ Ruby on Rails</p>
        <p className="ml-5">◯ Python / Django</p>
        <p className="ml-5">◯ Node.js / Express</p>

        <br />
        <p className="ml-5 font-bold">クラウドインフラ</p>
        <p className="ml-5">◯ AWS(EC2 / ECS / Lambda / etc)</p>
        <p className="ml-5">◯ Firebase</p>
      </div>

      <div className="text-center text-xl font-bold text-gray-700 mt-5">Contact Me</div>
      <div className="flex justify-center mt-4">
        <Link href="https://twitter.com/ponnzineer?t=g4MCAlmXulMMrqCOC5cQNA&s=03">
          <a className="text-3xl px-5">
            <IconContext.Provider value={{ color: '#555' }}>
              <BsTwitter />
            </IconContext.Provider>
          </a>
        </Link>

        <Link href="https://github.com/kotrin-co">
          <a className="text-3xl px-5">
            <IconContext.Provider value={{ color: '#555' }}>
              <BsGithub />
            </IconContext.Provider>
          </a>
        </Link>
      </div>
    </div>
  )
}
