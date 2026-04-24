"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Building2, Users, Settings, CheckCircle, XCircle } from 'lucide-react';

export default function DashboardPage() {
  const [applications, setApplications] = useState([
    { id: 1, name: "أحمد بن محمد", university: "جامعة باب الزوار", property: "شقة F4 - حي الموز", status: "جديد" },
    { id: 2, name: "سارة محمود", university: "جامعة قسنطينة 1", property: "شقة F3 - وسط المدينة", status: "جديد" },
  ]);

  const updateStatus = (id, newStatus) => {
    setApplications(apps => apps.map(app => app.id === id ? { ...app, status: newStatus } : app));
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-white flex dir-rtl" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0D213F] border-l border-yellow-600/20 p-6">
        <div className="text-2xl font-bold text-yellow-600 mb-10">لوحة المستثمر</div>
        <nav className="space-y-4">
          <div className="flex items-center gap-3 text-yellow-600 bg-yellow-600/10 p-3 rounded-lg"><LayoutDashboard size={20}/> الرئيسية</div>
          <div className="flex items-center gap-3 p-3 text-gray-400 hover:text-white transition"><Building2 size={20}/> عقاراتي</div>
          <div className="flex items-center gap-3 p-3 text-gray-400 hover:text-white transition"><Users size={20}/> الطلبات</div>
          <div className="flex items-center gap-3 p-3 text-gray-400 hover:text-white transition"><Settings size={20}/> الإعدادات</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">إحصائيات المنصة</h1>
        
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-[#0D213F] p-6 rounded-2xl border border-yellow-600/10">
            <div className="text-gray-400">إجمالي العقارات</div>
            <div className="text-3xl font-bold text-yellow-600">12</div>
          </div>
          <div className="bg-[#0D213F] p-6 rounded-2xl border border-yellow-600/10">
            <div className="text-gray-400">طلبات الانتظار</div>
            <div className="text-3xl font-bold text-yellow-600">{applications.filter(a => a.status === "جديد").length}</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">طلبات الأساتذة الأخيرة</h2>
        <div className="bg-[#0D213F] rounded-2xl overflow-hidden border border-yellow-600/10">
          <table className="w-full text-right">
            <thead className="bg-yellow-600/10 text-yellow-600">
              <tr>
                <th className="p-4">الأستاذ</th>
                <th className="p-4">الجامعة</th>
                <th className="p-4">العقار</th>
                <th className="p-4">الحالة</th>
                <th className="p-4">الإجراء</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-t border-yellow-600/5">
                  <td className="p-4 font-bold">{app.name}</td>
                  <td className="p-4 text-gray-400">{app.university}</td>
                  <td className="p-4 text-gray-400">{app.property}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${app.status === 'تم القبول' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-4 flex gap-2">
                    <button onClick={() => updateStatus(app.id, 'تم القبول')} className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition"><CheckCircle size={18}/></button>
                    <button onClick={() => updateStatus(app.id, 'مرفوض')} className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition"><XCircle size={18}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}