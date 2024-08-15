interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Our Works", href: "/works" },
  { label: "About", href: "/about" },
];

export default navLinks;
