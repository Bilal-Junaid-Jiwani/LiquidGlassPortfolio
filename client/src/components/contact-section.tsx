import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 glass -z-10" />
      <div className="container mx-auto max-w-3xl">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-16"
          data-testid="heading-contact"
        >
          Get In <span className="bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="glass-card rounded-3xl p-6 md:p-12">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="9bb74cad-33c9-4f53-b493-4c696de31dc9"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-base font-semibold">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="glass-card rounded-xl border-0 focus-visible:ring-primary h-12 mt-2"
                  data-testid="input-name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-base font-semibold">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="glass-card rounded-xl border-0 focus-visible:ring-primary h-12 mt-2"
                  data-testid="input-email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-base font-semibold">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={6}
                className="glass-card rounded-xl border-0 focus-visible:ring-primary resize-none mt-2"
                data-testid="input-message"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full text-base lg:text-lg py-6 glass-card hover-elevate active-elevate-2 group"
              data-testid="button-submit"
            >
              Send Message
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
