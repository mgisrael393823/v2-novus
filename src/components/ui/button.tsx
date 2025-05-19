import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-novus-gold text-white shadow hover:bg-novus-gold-dark",
        destructive:
          "bg-error text-white shadow-sm hover:bg-error/90",
        outline:
          "border border-novus-gold text-novus-gold bg-background shadow-sm hover:bg-novus-gold-50 hover:border-novus-gold-dark",
        secondary:
          "bg-gray-100 text-text-primary shadow-sm hover:bg-gray-200",
        ghost: 
          "hover:bg-novus-cream text-text-primary",
        link: 
          "text-novus-gold hover:text-novus-gold-dark underline-offset-4 hover:underline p-0 h-auto",
        premium:
          "bg-novus-gold-light text-novus-gold-dark border border-novus-gold-dark/20 hover:bg-novus-gold-light/80 shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1 text-xs",
        lg: "h-12 px-6 py-3",
        xl: "h-14 px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
      uppercase: {
        true: "uppercase tracking-wider",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      uppercase: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, uppercase, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, uppercase, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
