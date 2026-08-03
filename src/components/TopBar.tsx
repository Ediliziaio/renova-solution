import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { CONTATTI } from '../data/contatti';

export default function TopBar() {
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#C8E600]" />
            <span className="text-gray-300">Veneto e Friuli Venezia Giulia</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#C8E600]" />
            <a href={CONTATTI.telefonoLink} className="text-gray-300 hover:text-[#C8E600] transition-colors">
              {CONTATTI.telefono}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#C8E600]" />
            <a href={CONTATTI.emailLink} className="text-gray-300 hover:text-[#C8E600] transition-colors">
              {CONTATTI.email}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-300 hover:text-[#C8E600] transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" className="text-gray-300 hover:text-[#C8E600] transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="#" className="text-gray-300 hover:text-[#C8E600] transition-colors">
            <Instagram size={16} />
          </a>
          <a href="#" className="text-gray-300 hover:text-[#C8E600] transition-colors">
            <Youtube size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
