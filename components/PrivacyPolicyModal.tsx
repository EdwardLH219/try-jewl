import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PrivacyPolicyModal() {
  return (
    <Dialog>
      <DialogTrigger className="text-black text-sm hover:text-gray-600 transition">
        Privacy Policy
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Privacy Policy</DialogTitle>
        </DialogHeader>
        
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="mb-6">
            Jewl ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">1. What We Collect</h2>
          <p className="mb-2">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong>Information you provide:</strong> such as your name, email address, or connected account information when you sign up or contact us.
            </li>
            <li className="mb-2">
              <strong>Chat and document data:</strong> only when you use Jewl through messaging platforms like WhatsApp, Telegram, or Slack. This data is processed securely to help retrieve the exact information you ask for.
            </li>
            <li className="mb-2">
              <strong>Usage data:</strong> like pages visited, browser type, and referral source, used to improve our site performance and user experience.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-4">2. How We Use Your Information</h2>
          <p className="mb-2">We use your information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve Jewl's services</li>
            <li>Respond to your support requests</li>
            <li>Analyze usage trends</li>
            <li>Communicate service updates or important notices</li>
          </ul>
          <p className="mb-4">
            We do not sell or share your personal data with third parties for marketing purposes.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We apply industry-standard security measures to protect your information. Documents and messages are encrypted in transit and stored only as long as necessary for processing.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">4. Third-Party Services</h2>
          <p className="mb-4">
            Jewl integrates with platforms like WhatsApp, Slack, Google Drive, and Dropbox. Your use of these services is governed by their respective privacy policies.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">5. Your Rights</h2>
          <p className="mb-4">
            You may request access, correction, or deletion of your data by contacting us at [support@jewl.ai].
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">6. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this policy from time to time. We will post updates here and notify you if changes are significant.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions, please reach out to: [support@jewl.ai]
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
} 