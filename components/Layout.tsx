import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { 
  DropboxIcon, 
  SharePointIcon, 
  WhatsAppIcon, 
  SlackIcon, 
  GoogleDocsIcon,
  DiscordIcon,
  TelegramIcon
} from '@/utils/integration-icons';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import TermsOfServiceModal from '@/components/TermsOfServiceModal';

interface LayoutProps {
  children: React.ReactNode;
}

type IntegrationType = 'dropbox' | 'sharepoint' | 'googledocs' | 'whatsapp' | 'slack' | 'discord' | 'telegram' | null;

export default function Layout({ children }: LayoutProps) {
  const [activeIntegration, setActiveIntegration] = useState<IntegrationType>(null);
  
  // Add scroll event listener for sticky header
  useEffect(() => {
    const header = document.querySelector('.sticky-header');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleIntegrationClick = (integration: IntegrationType) => {
    setActiveIntegration(integration);
  };

  const handleCloseModal = () => {
    setActiveIntegration(null);
  };

  const getIntegrationTitle = (integration: IntegrationType): string => {
    switch (integration) {
      case 'dropbox':
        return 'Dropbox Integration';
      case 'sharepoint':
        return 'SharePoint Integration';
      case 'googledocs':
        return 'Google Docs Integration';
      case 'whatsapp':
        return 'WhatsApp Integration';
      case 'slack':
        return 'Slack Integration';
      case 'discord':
        return 'Discord Integration';
      case 'telegram':
        return 'Telegram Integration';
      default:
        return '';
    }
  };

  const getIntegrationContent = (integration: IntegrationType): React.ReactNode => {
    switch (integration) {
      case 'dropbox':
        return (
          <div className="space-y-6">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-white">
              <Image
                src="/integrations/dropbox.webp"
                alt="Jewl Dropbox Integration Interface"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                quality={95}
                className="object-contain rounded-xl"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Connect Jewl to your Dropbox account to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Search across all your Dropbox files using natural language</li>
                <li>Get instant answers from your documents without opening them</li>
                <li>Automatically organize and tag documents based on content</li>
              </ul>
              <Button className="w-full">Connect Dropbox</Button>
            </div>
          </div>
        );
      case 'sharepoint':
        return (
          <div className="space-y-6">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-white">
              <Image
                src="/integrations/sharepoint.png"
                alt="Jewl SharePoint Integration Interface"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                quality={95}
                className="object-contain rounded-xl"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Enhance your SharePoint experience with Jewl:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Search across sites, lists, and document libraries instantly</li>
                <li>Extract insights from SharePoint documents and discussions</li>
                <li>Maintain security compliance while improving accessibility</li>
              </ul>
              <Button className="w-full">Connect SharePoint</Button>
            </div>
          </div>
        );
      case 'googledocs':
        return (
          <div className="space-y-6">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-white">
              <Image
                src="/integrations/googledocs.png"
                alt="Jewl Google Docs Integration Interface"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                quality={95}
                className="object-contain rounded-xl"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Transform your Google Docs workflow with Jewl:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Get AI-powered insights while writing and editing</li>
                <li>Search across your entire Google Docs library naturally</li>
                <li>Collaborate smarter with contextual document summaries</li>
              </ul>
              <Button className="w-full">Connect Google Docs</Button>
            </div>
          </div>
        );
      case 'whatsapp':
        return (
          <div className="space-y-6">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-white">
              <Image
                src="/integrations/whatsapp.png"
                alt="Jewl WhatsApp Integration Interface"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                quality={95}
                className="object-contain rounded-xl"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Access your documents through WhatsApp:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Chat with Jewl to find and analyze documents on the go</li>
                <li>Share document insights directly in WhatsApp chats</li>
                <li>Get instant notifications about important document updates</li>
              </ul>
              <Button className="w-full">Connect WhatsApp</Button>
            </div>
          </div>
        );
      case 'slack':
        return (
          <div className="space-y-6">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-white">
              <Image
                src="/integrations/slack.png"
                alt="Jewl Slack Integration Interface"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                quality={95}
                className="object-contain rounded-xl"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Bring Jewl's power to your Slack workspace:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Search and share document insights in any channel</li>
                <li>Get automated document summaries and updates</li>
                <li>Collaborate on documents without leaving Slack</li>
              </ul>
              <Button className="w-full">Add to Slack</Button>
            </div>
          </div>
        );
      case 'discord':
        return (
          <div className="space-y-6">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-white">
              <Image
                src="/integrations/discord.png"
                alt="Jewl Discord Integration Interface"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                quality={95}
                className="object-contain rounded-xl"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Use Jewl in your Discord server:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Access and search documents directly in Discord</li>
                <li>Share document insights with your community</li>
                <li>Set up automated document notifications</li>
              </ul>
              <Button className="w-full">Add to Discord</Button>
            </div>
          </div>
        );
      case 'telegram':
        return (
          <div className="space-y-6">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-white">
              <Image
                src="/integrations/telegram.png"
                alt="Jewl Telegram Integration Interface"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                quality={95}
                className="object-contain rounded-xl"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Access Jewl through Telegram:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Chat with Jewl bot to find and analyze documents</li>
                <li>Share document insights in group chats</li>
                <li>Get real-time document update notifications</li>
              </ul>
              <Button className="w-full">Connect Telegram</Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>jewl.ai - AI-powered Document Assistant</title>
        <meta name="description" content="jewl.ai is an AI-powered document assistant that helps you find, analyze, and extract valuable insights from your documents." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconV2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <header className="sticky-header bg-white backdrop-blur py-6 shadow-md">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="cursor-pointer">
                <Image
                  src="/logo-blackV2.png" 
                  alt="jewl.ai logo" 
                  width={192} 
                  height={58}
                  className="h-14 w-auto" 
                  unoptimized
                  priority
                />
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="py-4 bg-[#1E1E1E]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left md:flex-1">
              <p className="text-sm text-white">© {new Date().getFullYear()} jewl.ai. All rights reserved.</p>
            </div>
            <div className="text-center md:flex-1 md:flex md:justify-center">
              <p className="text-sm text-white">Jewl is a dito.tech innovation</p>
            </div>
            <div className="flex space-x-6 md:flex-1 md:justify-end">
              <div className="text-sm text-white hover:text-gray-300">
                <PrivacyPolicyModal />
              </div>
              <div className="text-sm text-white hover:text-gray-300">
                <TermsOfServiceModal />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Integration Modals */}
      <Modal
        isOpen={activeIntegration !== null}
        onClose={handleCloseModal}
        title={getIntegrationTitle(activeIntegration)}
      >
        {getIntegrationContent(activeIntegration)}
      </Modal>
    </div>
  );
} 