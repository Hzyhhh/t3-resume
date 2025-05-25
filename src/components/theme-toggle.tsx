"use client"

import { useTheme } from "next-themes"
import { Button } from "~/components/ui/button"
import { Moon, Sun, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"
import Image from "next/image"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex gap-2">
        <Button size="icon" variant="outline" disabled>
          <Phone className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <Button size="icon" variant="outline" disabled>
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Contact me">
            <Phone className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4">
          <div className="flex flex-col items-center">
            <h3 className="font-medium mb-2">扫码联系我</h3>
            <div className="bg-white p-2 rounded-md">
              <Image
                src="/images/IMG_4137.jpg"
                alt="联系二维码"
                width={150}
                height={150}
                className="rounded-md"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
      </Button>
    </div>
  )
}
