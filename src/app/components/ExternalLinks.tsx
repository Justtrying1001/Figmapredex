import { ExternalLink, Globe, Twitter, Github, MessageCircle } from 'lucide-react';

interface ExternalLinksProps {
  website?: string;
  twitter?: string;
  github?: string;
  discord?: string;
}

export function ExternalLinks({ website, twitter, github, discord }: ExternalLinksProps) {
  const links = [
    { icon: Globe, label: 'Website', value: website },
    { icon: Twitter, label: 'Twitter', value: twitter },
    { icon: Github, label: 'GitHub', value: github },
    { icon: MessageCircle, label: 'Discord', value: discord },
  ].filter((link) => link.value);

  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ icon: Icon, label, value }) => (
        <a
          key={label}
          href={value?.startsWith('http') ? value : `https://${value}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 hover:underline"
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      ))}
    </div>
  );
}
