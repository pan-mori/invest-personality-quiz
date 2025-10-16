import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-indigo-400 dark:border-indigo-500 bg-white dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/40 dark:hover:to-purple-900/40 hover:border-indigo-500 dark:hover:border-indigo-400 font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-all duration-300 hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline",
        quiz: "w-full p-6 text-left border-2 border-slate-200 bg-white/80 hover:border-indigo-300 hover:bg-white/90 backdrop-blur-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-xl",
        "quiz-selected": "w-full p-6 text-left border-2 border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-900 shadow-lg rounded-xl",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-6 text-base",
        icon: "h-10 w-10",
        quiz: "h-auto min-h-[4rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }