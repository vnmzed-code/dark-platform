"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function PropertyDetail() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A192F] text-white dir-rtl" dir="rtl">
      <div className="max-w-4xl mx-auto p-8">
        <Link href="/properties" className="text-yellow-600 mb-6 inline-block hover:underline">← العودة للعروض</Link>
        
        <div className="bg-[#0D213F] rounded-3xl overflow-hidden border border-yellow-600/10">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200" className="w-full h-80 object-cover" />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">شقة F4 فاخرة بجوار جامعة باب الزوار</h1>
            <div className="flex items-center gap-2 text-gray-400 mb-6">
              <MapPin className="text-yellow-600" /> حي الموز، الجزائر العاصمة
            </div>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="bg-[#0A192F] p-6 rounded-2xl border border-yellow-600/5 text-center">
                <div className="text-gray-400 mb-1">السعر الشهري</div>
                <div className="text-3xl font-bold text-yellow-600">45,000 دج</div>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-yellow-600 text-[#0A192F] rounded-2xl font-bold text-xl hover:bg-yellow-700 transition"
              >
                إرسال طلب اهتمام
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0D213F] p-8 rounded-3xl max-w-md w-full border border-yellow-600/20 text-center">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-yellow-600">طلب حجز السكن</h2>
                <div className="space-y-4 text-right">
                  <input type="text" placeholder="الاسم الكامل" className="w-full p-4 bg-[#0A192F] rounded-xl border border-yellow-600/10 focus:border-yellow-600 outline-none" />
                  <input type="text" placeholder="الجامعة / الكلية" className="w-full p-4 bg-[#0A192F] rounded-xl border border-yellow-600/10 focus:border-yellow-600 outline-none" />
                  <button onClick={() => setSubmitted(true)} className="w-full p-4 bg-yellow-600 text-[#0A192F] rounded-xl font-bold text-lg">تأكيد الإرسال</button>
                  <button onClick={() => setShowModal(false)} className="w-full p-2 text-gray-500">إلغاء</button>
                </div>
              </>
            ) : (
              <div className="py-10">
                <CheckCircle2 className="text-green-500 mx-auto mb-4" size={60} />
                <h2 className="text-2xl font-bold mb-2">تم الإرسال بنجاح!</h2>
                <p className="text-gray-400 mb-6">سيتم التواصل معك من طرف المستثمر قريباً</p>
                <button onClick={() => setShowModal(false)} className="bg-yellow-600 text-[#0A192F] px-8 py-2 rounded-xl font-bold">إغلاق</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}