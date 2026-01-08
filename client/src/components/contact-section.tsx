import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="text-primary font-bold mb-2 tracking-widest uppercase text-sm">Contact</h3>
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-foreground"
            data-testid="heading-contact"
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-black mb-6 text-foreground">Let's work together</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-medium">
              Have a project in mind? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 rounded-xl bg-white shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide font-bold mb-1">Email</p>
                  <a href="mailto:bilaljiwani@example.com" className="text-lg font-bold text-foreground hover:text-primary transition-colors">bilaljiwani@example.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-xl bg-white shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide font-bold mb-1">Phone</p>
                  <a href="tel:+923000000000" className="text-lg font-bold text-foreground hover:text-primary transition-colors">+92 300 0000000</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-xl bg-white shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide font-bold mb-1">Location</p>
                  <p className="text-lg font-bold text-foreground">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-border/50">
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
                  <label htmlFor="name" className="text-sm font-bold text-foreground mb-2 block uppercase tracking-wide">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="bg-muted/30 border-border focus:border-primary focus:ring-primary/20 h-14 rounded-lg text-foreground placeholder:text-muted-foreground font-medium transition-all"
                    data-testid="input-name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-bold text-foreground mb-2 block uppercase tracking-wide">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-muted/30 border-border focus:border-primary focus:ring-primary/20 h-14 rounded-lg text-foreground placeholder:text-muted-foreground font-medium transition-all"
                    data-testid="input-email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-bold text-foreground mb-2 block uppercase tracking-wide">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-muted/30 border-border focus:border-primary focus:ring-primary/20 rounded-lg resize-none text-foreground placeholder:text-muted-foreground font-medium py-4 transition-all"
                  data-testid="input-message"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/25 border-0 uppercase tracking-wide transform hover:translate-y-[-2px] transition-all"
                data-testid="button-submit"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
