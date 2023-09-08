import Image from "next/image"
import { Button } from "../ui/button"
import { AiOutlineMenu } from 'react-icons/ai'

type Props = {}

const Header = (props: Props) => {

  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center py-3">
        <div className="relative w-32 h-6">
          <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/themes/gridlove/assets/img/gridlove_logo.png' fill={true} alt="logo"/>
        </div>
        <ul className="md:flex gap-x-4 items-center hidden">
          <li>
            <Button variant={'ghost'}>categories</Button>
          </li>
          <li>
            <Button variant={'ghost'}>posts</Button>
          </li>
        </ul>
        <span className="md:hidden block">
          <AiOutlineMenu/>
        </span>
      </div>
    </header>
  )
}

export default Header