import {
  LucideFacebook,
  LucideInstagram,
  LucideLinkedin,
  LucideYoutube,
} from "lucide-react";

export const FooterSocial = () => {
  /** Static List of Social Networks */
  const socialLinks = [
    {
      href: "https://www.facebook.com/SalexCorporation/?locale=es_LA",
      icon: <LucideFacebook />,
    },
    { href: "https://www.instagram.com/salexcorp", icon: <LucideInstagram /> },
    {
      href: "https://www.linkedin.com/company/salex-sv",
      icon: <LucideLinkedin />,
    },
    { href: "https://www.youtube.com/@salexcorp", icon: <LucideYoutube /> },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-gray-400 hover:text-gray-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
