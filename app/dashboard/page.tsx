// app/dashboard/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Application {
  id: number;
  name: string;
  university: string;
  property: string;
  status: 'جديد' | 'قيد المراجعة' | 'مقبول' | 'مرفوض' | 'تم القبول';
}

export default function DashboardPage() {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      name: 'د. أحمد بن يوسف',
      university: 'جامعة باب الزوار USTHB',
      property: 'شقة F4 - حي الموز',
      status: 'جديد',
    },
    {
      id: 2,
      name: 'د. سميرة بوقرة',
      university: 'جامعة وهران 1',
      property: 'استوديو مفروش - العقيد لطفي',
      status: 'قيد المراجعة',
    },
    {
      id: 3,
      name: 'د. مراد بوشارب',
      university: 'جامعة قسنطينة 1',
      property: 'إقامة مغلقة - المدينة الجديدة',
      status: 'مقبول',
    },
    {
      id: 4,
      name: 'د. نوال عيساوي',
      university: 'جامعة الجزائر 2',
      property: 'شقة F3 - سيدي فرج',
      status: 'جديد',
    },
    {
      id: 5,
      name: 'د. ياسين شريف',
      university: 'جامعة تلمسان',
      property: 'شقة F2 - حي النور',
      status: 'مرفوض',
    },
    {
      id: 6,
      name: 'د. هاجر محمد',
      university: 'جامعة الجزائر 1',
      property: 'فيلا - القبة',
      status: 'جديد',
    },
  ]);

  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showNotification, setShowNotification] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success',
  });

  const stats = [
    {
      title: 'إجمالي العقارات',
      value: '12',
      subtitle: '+2 هذا الشهر',
      icon: '🏢',
      color: 'from-slate-800 to-slate-900',
    },
    {
      title: 'الطلبات الجديدة',
      value: applications.filter((a) => a.status === 'جديد').length.toString(),
      subtitle: 'في انتظار الرد',
      icon: '📩',
      color: 'from-amber-500 to-yellow-600',
    },
    {
      title: 'الطلبات المقبولة',
      value: applications
        .filter((a) => a.status === 'تم القبول' || a.status === 'مقبول')
        .length.toString(),
      subtitle: 'نسبة قبول ممتازة',
      icon: '✅',
      color: 'from-emerald-500 to-green-600',
    },
  ];

  // تصفية الطلبات حسب الحالة المختارة
  const filteredApplications =
    filterStatus === 'all'
      ? applications
      : applications.filter((app) => app.status === filterStatus);

  // دالة قبول الطلب
  const handleAcceptApplication = (id: number): void => {
    const appName = applications.find((a) => a.id === id)?.name;

    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, status: 'تم القبول' as const } : app
      )
    );

    // إظهار إشعار النجاح
    setShowNotification({
      show: true,
      message: `تم قبول طلب ${appName} بنجاح! 🎉`,
      type: 'success',
    });

    // إخفاء الإشعار بعد 4 ثوان
    setTimeout(() => {
      setShowNotification({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  // دالة رفض الطلب
  const handleRejectApplication = (id: number): void => {
    const appName = applications.find((a) => a.id === id)?.name;

    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, status: 'مرفوض' as const } : app
      )
    );

    // إظهار إشعار الخطأ
    setShowNotification({
      show: true,
      message: `تم رفض طلب ${appName}`,
      type: 'error',
    });

    // إخفاء الإشعار بعد 4 ثوان
    setTimeout(() => {
      setShowNotification({ show: false, message: '', type: 'error' });
    }, 4000);
  };

  const getStatusStyles = (status: string): string => {
    switch (status) {
      case 'جديد':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'قيد المراجعة':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'مقبول':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'تم القبول':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'مرفوض':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">
          <div className="border-b border-white/10 px-6 py-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 blur-md opacity-60 transition-opacity group-hover:opacity-100"></div>
                <div className="relative rounded-xl bg-gradient-to-br from-slate-700 to-slate-950 p-3">
                  <svg
                    className="h-7 w-7 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">DARK</h1>
                <p className="text-xs text-slate-300">لوحة تحكم المستثمر</p>
              </div>
            </Link>
          </div>

          <div className="px-4 py-6">
            <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">مرحباً بك</p>
              <h2 className="mt-1 text-lg font-black text-white">
                شركة العقارات الذهبية
              </h2>
              <p className="mt-1 text-xs text-amber-300">حساب مستثمر موثّق</p>
            </div>

            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-xl bg-gradient-to-l from-amber-500 to-yellow-600 px-4 py-3 font-bold text-slate-900 shadow-lg"
              >
                <span>🏠</span>
                <span>الرئيسية</span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <span>🏢</span>
                <span>عقاراتي</span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <span>📨</span>
                <span>الطلبات المستلمة</span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <span>⚙️</span>
                <span>الإعدادات</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900">لوحة التحكم</h2>
                <p className="mt-1 text-sm text-slate-600">
                  متابعة العقارات وإدارة طلبات الأساتذة الجامعيين
                </p>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <button className="rounded-xl border-2 border-slate-200 bg-white px-4 py-2 font-bold text-slate-700 transition hover:border-amber-400 hover:text-slate-900">
                  تصدير البيانات
                </button>
                <button className="rounded-xl bg-gradient-to-l from-slate-800 to-slate-900 px-5 py-2.5 font-bold text-white shadow-lg transition hover:from-slate-900 hover:to-black">
                  إضافة عقار جديد
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
            {/* Stats Cards */}
            <section className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="overflow-hidden rounded-2xl border-2 border-slate-100 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          {stat.title}
                        </p>
                        <h3 className="mt-2 text-4xl font-black text-slate-900">
                          {stat.value}
                        </h3>
                      </div>
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow-lg ${stat.color}`}
                      >
                        {stat.icon}
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">
                      {stat.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Notification */}
            {showNotification.show && (
              <div
                className={`mb-6 rounded-2xl border-2 px-6 py-4 shadow-lg ${
                  showNotification.type === 'success'
                    ? 'border-green-200 bg-green-50'
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-black text-white ${
                      showNotification.type === 'success'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {showNotification.type === 'success' ? '✓' : '✕'}
                  </div>
                  <p
                    className={`font-bold ${
                      showNotification.type === 'success'
                        ? 'text-green-800'
                        : 'text-red-800'
                    }`}
                  >
                    {showNotification.message}
                  </p>
                </div>
              </div>
            )}

            {/* Quick Overview */}
            <section className="mb-8 grid gap-5 lg:grid-cols-3">
              <div className="rounded-2xl border-2 border-slate-100 bg-white p-6 shadow-md lg:col-span-2">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      ملخص النشاط
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      نظرة سريعة على أداء حسابك اليوم
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                    محدث الآن
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">العقارات النشطة</p>
                    <p className="mt-2 text-2xl font-black text-slate-900">9</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">طلبات اليوم</p>
                    <p className="mt-2 text-2xl font-black text-slate-900">4</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">معدل الاستجابة</p>
                    <p className="mt-2 text-2xl font-black text-slate-900">
                      92%
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 shadow-md">
                <h3 className="text-xl font-black text-slate-900">
                  ملاحظة مهمة
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  لديك{' '}
                  <span className="font-black text-amber-700">
                    {
                      applications.filter((a) => a.status === 'جديد')
                        .length
                    }{' '}
                    طلبات جديدة
                  </span>{' '}
                  لم يتم الرد عليها بعد. يفضل مراجعتها سريعاً لرفع نسبة
                  التفاعل والثقة.
                </p>
                <button className="mt-5 w-full rounded-xl bg-gradient-to-l from-amber-500 to-yellow-600 px-4 py-3 font-bold text-slate-900 shadow-lg transition hover:from-amber-600 hover:to-yellow-700">
                  عرض الطلبات الجديدة
                </button>
              </div>
            </section>

            {/* Applications Table */}
            <section className="overflow-hidden rounded-2xl border-2 border-slate-100 bg-white shadow-md">
              <div className="border-b border-slate-100 px-6 py-5">
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      أحدث طلبات الأساتذة
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      قائمة بآخر الطلبات المرسلة على عقاراتك
                    </p>
                  </div>

                  <button className="rounded-xl border-2 border-slate-200 px-4 py-2 font-bold text-slate-700 transition hover:border-amber-400 hover:text-slate-900">
                    عرض جميع الطلبات
                  </button>
                </div>

                {/* Filter Section */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setFilterStatus('all')}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      filterStatus === 'all'
                        ? 'bg-slate-800 text-white shadow-md'
                        : 'border-2 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    جميع الطلبات
                  </button>
                  <button
                    onClick={() => setFilterStatus('جديد')}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      filterStatus === 'جديد'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'border-2 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    🔔 جديد (
                    {applications.filter((a) => a.status === 'جديد').length})
                  </button>
                  <button
                    onClick={() => setFilterStatus('تم القبول')}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      filterStatus === 'تم القبول'
                        ? 'bg-green-600 text-white shadow-md'
                        : 'border-2 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    ✓ مقبول (
                    {
                      applications.filter((a) => a.status === 'تم القبول')
                        .length
                    }
                    )
                  </button>
                  <button
                    onClick={() => setFilterStatus('مرفوض')}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      filterStatus === 'مرفوض'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'border-2 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    ✕ مرفوض (
                    {applications.filter((a) => a.status === 'مرفوض').length})
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-right">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-sm font-black text-slate-700">
                        الاسم
                      </th>
                      <th className="px-6 py-4 text-sm font-black text-slate-700">
                        الجامعة
                      </th>
                      <th className="px-6 py-4 text-sm font-black text-slate-700">
                        العقار المطلوب
                      </th>
                      <th className="px-6 py-4 text-sm font-black text-slate-700">
                        الحالة
                      </th>
                      <th className="px-6 py-4 text-sm font-black text-slate-700">
                        الإجراءات
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredApplications.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center">
                          <div className="flex flex-col items-center gap-3">
                            <div className="text-4xl">📭</div>
                            <p className="font-bold text-slate-600">
                              لا توجد طلبات بهذه الحالة
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredApplications.map((application, index) => (
                        <tr
                          key={application.id}
                          className={`transition hover:bg-slate-50 ${
                            index !== filteredApplications.length - 1
                              ? 'border-b border-slate-100'
                              : ''
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 font-black text-white">
                                {application.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-bold text-slate-900">
                                  {application.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                  أستاذ جامعي
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                            {application.university}
                          </td>

                          <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                            {application.property}
                          </td>

                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${getStatusStyles(
                                application.status
                              )}`}
                            >
                              {application.status}
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() =>
                                  handleAcceptApplication(application.id)
                                }
                                disabled={
                                  application.status === 'تم القبول' ||
                                  application.status === 'مرفوض'
                                }
                                className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
                                  application.status === 'تم القبول' ||
                                  application.status === 'مرفوض'
                                    ? 'cursor-not-allowed bg-slate-100 text-slate-400'
                                    : 'bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg'
                                }`}
                              >
                                ✓ قبول
                              </button>

                              <button
                                onClick={() =>
                                  handleRejectApplication(application.id)
                                }
                                disabled={
                                  application.status === 'مرفوض' ||
                                  application.status === 'تم القبول'
                                }
                                className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
                                  application.status === 'مرفوض' ||
                                  application.status === 'تم القبول'
                                    ? 'cursor-not-allowed bg-slate-100 text-slate-400'
                                    : 'bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg'
                                }`}
                              >
                                ✕ رفض
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}