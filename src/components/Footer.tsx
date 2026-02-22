import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <span className="text-xl font-bold tracking-tight">
                Event<span className="text-accent">Sphere</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              KIIT EventSphere is the official campus-wide event platform for KIIT University, designed to bridge the gap between students and societies.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-background border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#dashboard" className="hover:text-primary transition-colors">Dashboard Preview</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Explore Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Portals</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Student Login</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Society Admin</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Super Admin</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Register Society</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                KIIT University, Bhubaneswar
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                support@eventsphere.kiit.ac.in
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                +91 1234 567 890
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 KIIT EventSphere. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
