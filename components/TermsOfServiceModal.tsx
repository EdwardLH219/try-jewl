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
            Welcome to Jewl ("we", "our", or "us"). By using our services, you agree to these terms. Please read them carefully.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using Jewl's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">2. Description of Service</h2>
          <p className="mb-4">
            Jewl provides an AI-powered data retrieval service that connects with various messaging platforms and document repositories. The service allows users to search and retrieve information from their connected accounts.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">You must provide accurate information when using our services</li>
            <li className="mb-2">You are responsible for maintaining the security of your account</li>
            <li className="mb-2">You agree not to use the service for any illegal or unauthorized purpose</li>
            <li className="mb-2">You must comply with all applicable laws and regulations</li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-4">4. Data Usage and Privacy</h2>
          <p className="mb-4">
            Your use of Jewl is also governed by our Privacy Policy. We process your data as described in that policy and in accordance with applicable data protection laws.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">5. Third-Party Services</h2>
          <p className="mb-4">
            Jewl integrates with third-party services like WhatsApp, Telegram, and document storage providers. Your use of these services is subject to their respective terms and conditions.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">6. Intellectual Property</h2>
          <p className="mb-4">
            All content, features, and functionality of Jewl's services are owned by us or our licensors and are protected by copyright and other intellectual property laws.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            Jewl provides its services "as is" and makes no warranties, express or implied. We shall not be liable for any indirect, incidental, special, or consequential damages.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">8. Changes to Terms</h2>
          <p className="mb-4">
            We may modify these terms at any time. We will notify users of any material changes. Your continued use of Jewl after such modifications constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">9. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend access to our services, without prior notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">Contact</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at: [support@jewl.ai]
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
} 