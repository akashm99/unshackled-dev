"use client";

import React, { useEffect, useRef, useState } from 'react'
import { VENDOR_CATEGORIES } from '@/config';
import NavItem from './NavItem';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null|number>(null)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            setActiveIndex(null)
          }
        }
    
        document.addEventListener('keydown', handler)
    
        return () => {
          document.removeEventListener('keydown', handler)
        }
      }, [])

    const isAnyOpen = activeIndex !== null

    const navRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(navRef, () => setActiveIndex(null))

  return (
    <div className='flex gap-4 h-full' ref={navRef}>
        {
        VENDOR_CATEGORIES.map((category, idx) => {
            const handleOpen = () => {
                if (activeIndex === idx) {
                    setActiveIndex(null)
                } else {
                    setActiveIndex(idx)
                }
            }
            const isOpen = idx === activeIndex

            return (
                <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isAnyOpen}  key={category.value}/>
            )
        })
        }
    </div>
  )
}

export default NavItems