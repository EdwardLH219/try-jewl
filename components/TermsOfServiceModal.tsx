import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TermsOfServiceModal() {
  return (
    <Dialog>
      <DialogTrigger className="text-white text-sm hover:text-gray-300 transition">
        Terms
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Terms of Service</DialogTitle>
        </DialogHeader>
        
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="mb-6">
            Welcome to Jewl! These Terms of Service ("Terms") govern your use of the Jewl website, chat interfaces, and related services ("Services"). By accessing or using Jewl, you agree to these Terms.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">1. Who We Are</h2>
          <p className="mb-4">
            Jewl is an AI-powered assistant that helps you search and retrieve information from your documents using natural language, via platforms like WhatsApp, Slack, and others.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">2. Your Responsibilities</h2>
          <p className="mb-2">By using Jewl, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate information when signing up or connecting services.</li>
            <li>Only upload or connect documents you have legal access to.</li>
            <li>Not misuse the service (e.g., attempting to hack, overload, or reverse engineer the system).</li>
          </ul>
          <p className="mb-4">You are responsible for how Jewl is used through your accounts or connected platforms.</p>

          <h2 className="text-xl font-bold mt-6 mb-4">3. Your Data & Privacy</h2>
          <p className="mb-4">
            We respect your privacy. Please review our [Privacy Policy] for how we collect, use, and protect your data. You retain ownership of your documents and messages.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">4. Acceptable Use</h2>
          <p className="mb-2">You agree not to use Jewl to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violate laws or regulations</li>
            <li>Distribute harmful, unlawful, or misleading content</li>
            <li>Infringe on the rights of others</li>
          </ul>
          <p className="mb-4">We reserve the right to suspend or terminate accounts violating these rules.</p>

          <h2 className="text-xl font-bold mt-6 mb-4">5. Availability & Modifications</h2>
          <p className="mb-4">
            Jewl is a work in progress. We may change, pause, or discontinue features at any time, without notice. We're not liable for any disruptions, data loss, or delays caused by third-party integrations or outages.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">6. Disclaimer of Warranties</h2>
          <p className="mb-4">
            Jewl is provided "as is." While we strive to offer reliable results, we do not guarantee the accuracy, completeness, or reliability of information retrieved. Use your own judgment when acting on AI-generated answers.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent allowed by law, Jewl and its team will not be liable for any indirect, incidental, or consequential damages resulting from your use of the service.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">8. Governing Law</h2>
          <p className="mb-4">
            These Terms are governed by the laws of [Your Country or State]. Any disputes will be handled in the courts of that jurisdiction.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">9. Contact</h2>
          <p className="mb-4">
            For questions or support, please contact us at: [support@jewl.ai]
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
} 