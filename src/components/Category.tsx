import { MdPlayArrow } from 'react-icons/md'

export const Category = () => {
  const CATEGORIES = [
    'LINE API',
    'React',
    'Next.js',
    'Vue.js',
    'Nuxt.js',
    'Python/Django',
    'Ruby on Rails',
    'Node.js',
    'Firebase',
    'AWS',
    'GAS',
  ]

  return (
    <div className="rounded overflow-hidden shadow-lg mt-5">
      <div className="h-12 bg-indigo-500 text-white flex items-center justify-center text-xl">Category</div>

      <ul>
        {CATEGORIES.map((category, index) => (
          <li key={index} className="flex items-center py-3 hover:bg-indigo-50 hover:cursor-pointer">
            <MdPlayArrow className="ml-3" />
            <div className="ml-[10px] text-lg leading-6 font-semibold ">{category}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
