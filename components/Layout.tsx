import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import TermsOfServiceModal from '@/components/TermsOfServiceModal';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>jewl.ai - Your AI-powered data companion</title>
        <meta name="description" content="jewl.ai helps you find and understand your data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white/40 backdrop-blur-md py-3 rounded-2xl border border-gray-300/30 shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex justify-center items-center">
                <Link href="/">
                  <div className="cursor-pointer">
                    <Image
                      src="/logo-blackV3.png"
                      alt="jewl.ai logo"
                      width={154}
                      height={46}
                      className="h-11 w-auto"
                      unoptimized
                      priority
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="py-4 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="text-center md:text-left md:w-1/3">
              <p className="text-sm text-white">© {new Date().getFullYear()} jewl.ai. All rights reserved.</p>
            </div>
            <div className="text-center my-4 md:my-0 md:w-1/3">
              <p className="text-sm text-white">Jewl is a dito.tech innovation</p>
            </div>
            <div className="flex justify-center space-x-6 md:w-1/3">
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
    </div>
  );
} 