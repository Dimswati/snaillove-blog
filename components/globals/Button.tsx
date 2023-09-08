import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

const buttonVariants = cva(
    'inline-flex items-center justify-center transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase bg-yellow-500',
    {
        variants: {
            variant: {
                default: 'bg-blue-500 text-white text-sm rounded-sm px-8 h-11',
                tag: 'hover:bg-white hover:text-black text-white rounded-full text-[10px] py-[3px] px-3',
                ghost: 'bg-transparent hover:bg-slate-100 text-sm lowercase px-4 h-8 rounded-full',
                link: 'lowercase bg-transparent underline-offset-4 hover:underline text-slate-900 hover:bg-transparent'
            },
            // size: {
            //     default: 'h-6 py-2 px-3',
            //     sm: 'h-9 px-2',
            //     lg: 'h-11 px-8',
            // }
        },
        defaultVariants: {
            variant: 'default',
            // size: 'default'
        }
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    variant,
    href,
    ...props
}, ref)=>{
    if(href){
        return (
            <Link href={href} className={cn(buttonVariants({ variant }), className)}>{children}</Link>
        )
    }
    return (
        <button className={cn(buttonVariants({ variant }), className)} ref={ref} {...props}>{children}</button>
    )
})

Button.displayName = 'Button'

export default Button

{/* <Button >default</Button>
      <Button variant={'ghost'}>link</Button>
      <Button variant={'link'}>link</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'subtle'}>subtle</Button>

      <Button size={'lg'} variant={'subtle'}>lg</Button>
      <Button size={'sm'}>sm</Button> */}