import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-dense gap-8 container">
        {/* VARIANT ONE */}
        <article className="flex h-80 flex-col justify-between bg-cover bg-no-repeat bg-center shadow-md py-6 px-7 bg-black/50 bg-blend-overlay" style={{ backgroundImage: `url(${'https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg'})`}}>
          <div className="overflow-y-hidden">
            <Link className={cn(buttonVariants({ variant: 'tag' }), 'mb-3')} href='/technology'>
                technology
            </Link>
            <h2 className="text-white font-bold text-2xl mb-4">Are rock concerts really coming back into fashion?</h2>
            <p className="cutoff-text text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio qui alias placeat ipsam numquam, nemo facilis exercitationem neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio qui alias placeat ipsam numquam, nemo facilis exercitationem neque sapiente.</p>
          </div>
          <div className="flex gap-x-2 items-center mt-4">
            <div className="relative w-6 h-6">
              <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg' className="rounded-full" alt="author-image" fill/>
            </div>
            <span className="text-sm text-neutral-200">Paul Mbatia</span>
          </div>
        </article>
        {/* VARIANT TWO */}
        <article className="flex flex-col h-80 justify-between shadow-md py-6 px-7 bg-white">
          <div className="overflow-y-hidden">
            <Link className={cn(buttonVariants({ variant: 'tag' }), 'mb-3')} href='/technology'>
                technology
            </Link>
            <h2 className="text-black font-bold text-2xl mb-4">Are rock concerts really coming back into fashion?</h2>
            <p className="cutoff-text text-neutral-700 text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio qui alias placeat ipsam numquam, nemo facilis exercitationem neque sapiente. ipsam numquam, nemo facilis exercitationem neque sapiente. ipsam numquam, nemo facilis exercitationem neque sapiente.</p>
          </div>
          <div className="flex gap-x-2 items-center mt-4">
            <div className="relative w-6 h-6">
              <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg' className="rounded-full" alt="author-image" fill/>
            </div>
            <span className="text-sm text-neutral-800">Paul Mbatia</span>
          </div>
        </article>
        {/* VARIANT THREE */}
        <article className="flex h-80 shadow-md md:col-span-2 col-span-full bg-blend-overlay bg-black/50 sm:bg-white bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${'https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg'})` }}>
          <div className="relative h-full w-[50%] hidden sm:inline-block"> 
            <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg' alt="image-one" fill className="object-cover object-center"/>
          </div>
          <div className="h-full flex flex-col justify-between sm:w-1/2 w-full py-6 px-7">
            <div className="overflow-y-hidden">
              <Link className={cn(buttonVariants({ variant: 'tag' }), 'mb-3')} href='/technology'>
                  technology
              </Link>
              <h2 className="text-white sm:text-black font-bold text-2xl mb-4">Are rock concerts really coming back into fashion?</h2>
              <p className="cutoff-text text-neutral-300 sm:text-neutral-700 text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio qui alias placeat ipsam numquam, nemo facilis exercitationem neque sapiente. ipsam numquam, nemo facilis exercitationem neque sapiente. ipsam numquam, nemo facilis exercitationem neque sapiente.</p>
            </div>
            <div className="flex gap-x-2 items-center mt-4">
              <div className="relative w-6 h-6">
                <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg' className="rounded-full" alt="author-image" fill/>
              </div>
              <span className="text-sm text-neutral-200 sm:text-neutral-800">Paul Mbatia</span>
            </div>
          </div>
        </article>
        {/* VARIANT FOUR */}
        <article className="flex flex-col justify-between h-80 shadow-md bg-white w-full">
          <div className="w-full h-1/2 bg-cover bg-center bg-no-repeat py-6 px-7" style={{ backgroundImage: `url(${'https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg'})` }}>
            <Link className={cn(buttonVariants({ variant: 'tag' }), 'mb-3')} href='/technology'>
              technology
            </Link>
          </div>
          <div className="px-7 py-6">
            <h2 className="text-black font-bold text-2xl mb-4">Are rock concerts really coming back into fashion?</h2>
            <div className="flex gap-x-2 items-center mt-4">
            <div className="relative w-6 h-6">
              <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg' className="rounded-full" alt="author-image" fill/>
            </div>
            <span className="text-sm text-neutral-800">Paul Mbatia</span>
          </div>
          </div>
        </article>
        {/* VARIANT ONE */}
        <article className="flex h-80 flex-col justify-between bg-cover bg-no-repeat bg-center shadow-md py-6 px-7 bg-black/50 bg-blend-overlay" style={{ backgroundImage: `url(${'https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg'})`}}>
          <div className="overflow-y-hidden">
            <Link className={cn(buttonVariants({ variant: 'tag' }), 'mb-3')} href='/technology'>
                technology
            </Link>
            <h2 className="text-white font-bold text-2xl mb-4">Are rock concerts really coming back into fashion?</h2>
            <p className="cutoff-text text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio qui alias placeat ipsam numquam, nemo facilis exercitationem neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio qui alias placeat ipsam numquam, nemo facilis exercitationem neque sapiente.</p>
          </div>
          <div className="flex gap-x-2 items-center mt-4">
            <div className="relative w-6 h-6">
              <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg' className="rounded-full" alt="author-image" fill/>
            </div>
            <span className="text-sm text-neutral-200">Paul Mbatia</span>
          </div>
        </article>
        {/* VARIANT TWO */}
        <article className="flex flex-col h-80 justify-between shadow-md py-6 px-7 bg-white">
          <div className="overflow-y-hidden">
            <Link className={cn(buttonVariants({ variant: 'tag' }), 'mb-3')} href='/technology'>
                technology
            </Link>
            <h2 className="text-black font-bold text-2xl mb-4">Are rock concerts really coming back into fashion?</h2>
            <p className="cutoff-text text-neutral-700 text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio qui alias placeat ipsam numquam, nemo facilis exercitationem neque sapiente. ipsam numquam, nemo facilis exercitationem neque sapiente. ipsam numquam, nemo facilis exercitationem neque sapiente.</p>
          </div>
          <div className="flex gap-x-2 items-center mt-4">
            <div className="relative w-6 h-6">
              <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg' className="rounded-full" alt="author-image" fill/>
            </div>
            <span className="text-sm text-neutral-800">Paul Mbatia</span>
          </div>
        </article>
        {/* VARIANT THREE */}
        <article className="flex h-80 shadow-md md:col-span-2 col-span-full bg-blend-overlay bg-black/50 sm:bg-white bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${'https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg'})` }}>
          <div className="relative h-full w-[50%] hidden sm:inline-block"> 
            <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg' alt="image-one" fill className="object-cover object-center"/>
          </div>
          <div className="h-full flex flex-col justify-between sm:w-1/2 w-full py-6 px-7">
            <div className="overflow-y-hidden">
              <Link className={cn(buttonVariants({ variant: 'tag' }), 'mb-3')} href='/technology'>
                  technology
              </Link>
              <h2 className="text-white sm:text-black font-bold text-2xl mb-4">Are rock concerts really coming back into fashion?</h2>
              <p className="cutoff-text text-neutral-300 sm:text-neutral-700 text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio qui alias placeat ipsam numquam, nemo facilis exercitationem neque sapiente. ipsam numquam, nemo facilis exercitationem neque sapiente. ipsam numquam, nemo facilis exercitationem neque sapiente.</p>
            </div>
            <div className="flex gap-x-2 items-center mt-4">
              <div className="relative w-6 h-6">
                <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg' className="rounded-full" alt="author-image" fill/>
              </div>
              <span className="text-sm text-neutral-200 sm:text-neutral-800">Paul Mbatia</span>
            </div>
          </div>
        </article>
        {/* VARIANT FOUR */}
        <article className="flex flex-col justify-between h-80 shadow-md bg-white w-full">
          <div className="w-full h-1/2 bg-cover bg-center bg-no-repeat py-6 px-7" style={{ backgroundImage: `url(${'https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_38-385x300.jpg'})` }}>
            <Link className={cn(buttonVariants({ variant: 'tag' }), 'mb-3')} href='/technology'>
              technology
            </Link>
          </div>
          <div className="px-7 py-6">
            <h2 className="text-black font-bold text-2xl mb-4">Are rock concerts really coming back into fashion?</h2>
            <div className="flex gap-x-2 items-center mt-4">
            <div className="relative w-6 h-6">
              <Image src='https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_3_1473333938-24x24.jpg' className="rounded-full" alt="author-image" fill/>
            </div>
            <span className="text-sm text-neutral-800">Paul Mbatia</span>
          </div>
          </div>
        </article>
      </div>
    </main>
  )
}
