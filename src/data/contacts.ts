export interface Contact {
  id: string;
  label: string;
  value: string;
  isHtml?: boolean;
  link?: string;
}

export const contacts: Contact[] = [
  {
    id: "address",
    label: "Адрес",
    value: "ул. Примерная, 123, г. Москва"
  },
  {
    id: "phone",
    label: "Телефон",
    value: "+7 (123) 456-78-90",
    link: "tel:+71234567890"
  },
  {
    id: "email",
    label: "Email",
    value: "info@lesla.ru",
    link: "mailto:info@lesla.ru"
  },
  {
    id: "social",
    label: "Социальные сети",
    value: "facebook | twitter | instagram | linkedin",
    isHtml: true
  }
];

export const socialLinks = [
  {
    id: "facebook",
    name: "Facebook",
    url: "https://facebook.com/lesla",
    icon: "facebook"
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/lesla",
    icon: "twitter"
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/lesla",
    icon: "instagram"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/company/lesla",
    icon: "linkedin"
  }
]; 