export const VENDOR_CATEGORIES = [
    {
      label: 'Lawyers',
      value: 'lawyers' as const,
      featured: [
        {
          name: 'Editor picks',
          href: `/products?category=ui_kits`,
          imageSrc: '/nav/ui-kits/mixed.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=ui_kits&sort=desc',
          imageSrc: '/nav/ui-kits/blue.jpg',
        },
        {
          name: 'Bestsellers',
          href: '/products?category=ui_kits',
          imageSrc: '/nav/ui-kits/purple.jpg',
        },
      ],
    },
    {
      label: 'Publications',
      value: 'publications' as const,
      featured: [
        {
          name: 'Favorite Icon Picks',
          href: `/products?category=icons`,
          imageSrc: '/nav/icons/picks.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=icons&sort=desc',
          imageSrc: '/nav/icons/new.jpg',
        },
        {
          name: 'Bestselling Icons',
          href: '/products?category=icons',
          imageSrc: '/nav/icons/bestsellers.jpg',
        },
      ],
    },
  ]
  