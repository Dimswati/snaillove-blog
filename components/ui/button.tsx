import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase bg-yellow-500",
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-white text-sm rounded-sm px-8 h-11',
        tag: 'hover:bg-white hover:text-black text-white rounded-full text-[10px] py-[3px] px-3',
        ghost: 'bg-transparent hover:bg-slate-100 text-sm lowercase px-4 h-8 rounded-full',
        link: 'lowercase bg-transparent underline-offset-4 hover:underline text-slate-900 hover:bg-transparent'
      },
      // size: {
      //   default: "h-10 px-4 py-2",
      //   sm: "h-9 rounded-md px-3",
      //   lg: "h-11 rounded-md px-8",
      //   icon: "h-10 w-10",
      // },
    },
    defaultVariants: {
      variant: "default",
      // size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
