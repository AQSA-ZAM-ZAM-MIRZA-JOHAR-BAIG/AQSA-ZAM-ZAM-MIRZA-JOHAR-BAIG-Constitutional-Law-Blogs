import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaList = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 2,
    "name": item.label,
    "item": `https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app${item.href}`
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/"
      },
      ...schemaList
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <li>
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span>/</span>
            <Link 
              href={item.href} 
              className="hover:text-blue-600 dark:hover:text-blue-400 font-medium text-gray-800 dark:text-gray-200 transition" 
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
