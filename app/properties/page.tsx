"use client";
import React from 'react';
import Link from 'next/link';
import { MapPin, Home, ArrowLeft } from 'lucide-react';

const properties = [
  { id: 1, title: "شقة F4 فاخرة - باب الزوار", location: "الجزائر العاصمة", price: "45,000 دج", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400" },
  { id: 2, title: "شقة F3 عصرية - العقيد لطفي", location: "وهران", price: "38,000 دج", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" },
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white p-8 dir-rtl" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-yellow-600">العروض المتاحة</h1>
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ArrowLeft size={20} /> العودة للرئيسية
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div key={prop.id} className="bg-[#0D213F] rounded-2xl overflow-hidden border border-yellow-600/10 hover:border-yellow-600/40 transition group">
              <div className="h-48 overflow-hidden">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <MapPin size={16} className="text-yellow-600" /> {prop.location}
                </div>
                <div className="flex justify-between items-center border-t border-yellow-600/10 pt-4">
                  <span className="text-2xl font-bold text-yellow-600">{prop.price}</span>
                  <Link href={`/properties/${prop.id}`} className="bg-yellow-600 text-[#0A192F] px-4 py-2 rounded-lg font-bold hover:bg-yellow-700 transition">
                    التفاصيل
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}