// app/register/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type UserType = 'professor' | 'investor';

const saudiCities = [
  'الرياض',
  'جدة',
  'مكة المكرمة',
  'المدينة المنورة',
  'الدمام',
  'الخبر',
  'الظهران',
  'تبوك',
  'أبها',
  'الطائف',
  'بريدة',
  'خميس مشيط',
  'نجران',
  'جازان',
  'ينبع',
  'الجبيل',
];

const academicRanks = [
  'معيد',
  'محاضر',
  'أستاذ مساعد',
  'أستاذ مشارك',
  'أستاذ',
  'باحث',
  'زائر',
];

const universities = [
  'جامعة الملك سعود',
  'جامعة الملك عبدالعزيز',
  'جامعة الإمام محمد بن سعود الإسلامية',
  'جامعة الملك فهد للبترول والمعادن',
  'جامعة الملك عبدالله للعلوم والتقنية',
  'جامعة الأميرة نورة بنت عبدالرحمن',
  'جامعة الملك خالد',
  'جامعة الملك فيصل',
  'جامعة طيبة',
  'جامعة أم القرى',
  'جامعة تبوك',
  'جامعة الطائف',
  'جامعة جازان',
  'جامعة نجران',
  'جامعة الجوف',
  'جامعة الباحة',
  'جامعة حائل',
  'جامعة القصيم',
  'جامعة الحدود الشمالية',
  'أخرى',
];

export default function RegisterPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType>('professor');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Professor Form State
  const [professorData, setProfessorData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    academicRank: '',
    phone: '',
    preferredCity: '',
  });

  // Investor Form State
  const [investorData, setInvestorData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    commercialRegister: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      alert('يرجى الموافقة على الشروط والأحكام');
      return;
    }

    const currentData = userType === 'professor' ? professorData : investorData;
    
    if (currentData.password !== currentData.confirmPassword) {
      alert('كلمة المرور غير متطابقة');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('تم إنشاء الحساب بنجاح! يرجى تفعيل حسابك عبر البريد الإلكتروني.');
      router.push('/auth/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4" dir="rtl">
      {/* Header */}
      <div className="container mx-auto max-w-6xl mb-8">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2.5 rounded-xl shadow-lg">
              <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-black bg-gradient-to-l from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              DARK
            </h1>
            <p className="text-[9px] text-slate-600 font-medium -mt-1">منصة السكن الأكاديمي</p>
          </div>
        </Link>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info Section */}
          <div className="space-y-8 lg:sticky lg:top-8">
            {/* Welcome Card */}
            <div className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl rounded-xl overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    مرحباً بك في DARK
                  </h2>
                </div>
                <p className="text-slate-700 text-base">
                  انضم إلى المنصة الرائدة في السكن الأكاديمي
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-slate-900">تسجيل سريع وآمن</h4>
                      <p className="text-sm text-slate-600">أقل من 3 دقائق لإكمال حسابك</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-slate-900">توثيق احترافي</h4>
                      <p className="text-sm text-slate-600">نتحقق من جميع الحسابات لضمان الأمان</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-slate-900">خصوصية تامة</h4>
                      <p className="text-sm text-slate-600">بياناتك محمية وفق أعلى معايير الأمان</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900">ملاحظة مهمة</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      بعد التسجيل، سيتم إرسال رابط تفعيل إلى بريدك الإلكتروني. كما قد يتطلب الأمر مراجعة من فريقنا للتحقق من البيانات الأكاديمية أو التجارية.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Already Have Account */}
            <div className="text-center p-6 bg-white rounded-xl border-2 border-slate-100 shadow-md">
              <p className="text-slate-600 mb-3">هل لديك حساب بالفعل؟</p>
              <Link 
                href="/auth/login"
                className="inline-block w-full px-6 py-3 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-bold rounded-lg transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  تسجيل الدخول
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="border-2 border-slate-200 shadow-2xl rounded-xl bg-white overflow-hidden">
            <div className="p-6 pb-6 space-y-4 border-b border-slate-100">
              <h2 className="text-3xl font-black text-slate-900">
                إنشاء حساب جديد
              </h2>

              {/* User Type Selector */}
              <div className="grid grid-cols-2 gap-3 p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setUserType('professor')}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold transition-all duration-300 ${
                    userType === 'professor'
                      ? 'bg-gradient-to-l from-slate-800 to-slate-900 text-white shadow-lg scale-105'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <span>أستاذ جامعي</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('investor')}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold transition-all duration-300 ${
                    userType === 'investor'
                      ? 'bg-gradient-to-l from-slate-800 to-slate-900 text-white shadow-lg scale-105'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>مستثمر عقاري</span>
                </button>
              </div>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Professor Form */}
                {userType === 'professor' && (
                  <div className="space-y-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-slate-900 font-bold text-sm">
                        الاسم الكامل *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="د. أحمد محمد العلي"
                        required
                        value={professorData.fullName}
                        onChange={(e) => setProfessorData({ ...professorData, fullName: e.target.value })}
                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-slate-900 font-bold text-sm">
                        البريد الإلكتروني الجامعي *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="a.alali@university.edu.sa"
                        required
                        value={professorData.email}
                        onChange={(e) => setProfessorData({ ...professorData, email: e.target.value })}
                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        dir="ltr"
                      />
                      <p className="text-xs text-slate-600">يفضل استخدام البريد الجامعي الرسمي</p>
                    </div>

                    {/* University */}
                    <div className="space-y-2">
                      <label htmlFor="university" className="block text-slate-900 font-bold text-sm">
                        الجامعة *
                      </label>
                      <select
                        id="university"
                        required
                        value={professorData.university}
                        onChange={(e) => setProfessorData({ ...professorData, university: e.target.value })}
                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right bg-white transition-colors"
                      >
                        <option value="">اختر الجامعة</option>
                        {universities.map((uni) => (
                          <option key={uni} value={uni}>
                            {uni}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Academic Rank */}
                    <div className="space-y-2">
                      <label htmlFor="rank" className="block text-slate-900 font-bold text-sm">
                        الرتبة العلمية *
                      </label>
                      <select
                        id="rank"
                        required
                        value={professorData.academicRank}
                        onChange={(e) => setProfessorData({ ...professorData, academicRank: e.target.value })}
                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right bg-white transition-colors"
                      >
                        <option value="">اختر الرتبة العلمية</option>
                        {academicRanks.map((rank) => (
                          <option key={rank} value={rank}>
                            {rank}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-slate-900 font-bold text-sm">
                        رقم الجوال *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="05XXXXXXXX"
                        required
                        value={professorData.phone}
                        onChange={(e) => setProfessorData({ ...professorData, phone: e.target.value })}
                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        dir="ltr"
                      />
                    </div>

                    {/* Preferred City */}
                    <div className="space-y-2">
                      <label htmlFor="city" className="block text-slate-900 font-bold text-sm">
                        المنطقة الجغرافية المفضلة *
                      </label>
                      <select
                        id="city"
                        required
                        value={professorData.preferredCity}
                        onChange={(e) => setProfessorData({ ...professorData, preferredCity: e.target.value })}
                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right bg-white transition-colors"
                      >
                        <option value="">اختر المدينة المفضلة</option>
                        {saudiCities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Password */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="password" className="block text-slate-900 font-bold text-sm">
                          كلمة المرور *
                        </label>
                        <input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          required
                          minLength={8}
                          value={professorData.password}
                          onChange={(e) => setProfessorData({ ...professorData, password: e.target.value })}
                          className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-slate-900 font-bold text-sm">
                          تأكيد كلمة المرور *
                        </label>
                        <input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          required
                          minLength={8}
                          value={professorData.confirmPassword}
                          onChange={(e) => setProfessorData({ ...professorData, confirmPassword: e.target.value })}
                          className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Investor Form */}
                {userType === 'investor' && (
                  <div className="space-y-5">
                    {/* Company Name */}
                    <div className="space-y-2">
                      <label htmlFor="companyName" className="block text-slate-900 font-bold text-sm">
                        اسم الشركة / المستثمر *
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        placeholder="شركة العقارات المتميزة"
                        required
                        value={investorData.companyName}
                        onChange={(e) => setInvestorData({ ...investorData, companyName: e.target.value })}
                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="investorEmail" className="block text-slate-900 font-bold text-sm">
                        البريد الإلكتروني *
                      </label>
                      <input
                        id="investorEmail"
                        type="email"
                        placeholder="info@company.com"
                        required
                        value={investorData.email}
                        onChange={(e) => setInvestorData({ ...investorData, email: e.target.value })}
                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        dir="ltr"
                      />
                    </div>

                    {/* Commercial Register */}
                    <div className="space-y-2">
                      <label htmlFor="commercialRegister" className="block text-slate-900 font-bold text-sm">
                        رقم السجل التجاري *
                      </label>
                      <input
                        id="commercialRegister"
                        type="text"
                        placeholder="1234567890"
                        required
                        value={investorData.commercialRegister}
                        onChange={(e) => setInvestorData({ ...investorData, commercialRegister: e.target.value })}
                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        dir="ltr"
                      />
                      <p className="text-xs text-slate-600">سيتم التحقق من صحة السجل التجاري</p>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="investorPhone" className="block text-slate-900 font-bold text-sm">
                        رقم الجوال *
                      </label>
                      <input
                        id="investorPhone"
                        type="tel"
                        placeholder="05XXXXXXXX"
                        required
                        value={investorData.phone}
                        onChange={(e) => setInvestorData({ ...investorData, phone: e.target.value })}
                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        dir="ltr"
                      />
                    </div>

                    {/* Password */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="investorPassword" className="block text-slate-900 font-bold text-sm">
                          كلمة المرور *
                        </label>
                        <input
                          id="investorPassword"
                          type="password"
                          placeholder="••••••••"
                          required
                          minLength={8}
                          value={investorData.password}
                          onChange={(e) => setInvestorData({ ...investorData, password: e.target.value })}
                          className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="investorConfirmPassword" className="block text-slate-900 font-bold text-sm">
                          تأكيد كلمة المرور *
                        </label>
                        <input
                          id="investorConfirmPassword"
                          type="password"
                          placeholder="••••••••"
                          required
                          minLength={8}
                          value={investorData.confirmPassword}
                          onChange={(e) => setInvestorData({ ...investorData, confirmPassword: e.target.value })}
                          className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Terms and Conditions */}
                <div className="border-2 border-slate-200 rounded-xl p-5 bg-slate-50 space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded border-2 border-slate-400 text-amber-600 focus:ring-2 focus:ring-amber-500 cursor-pointer"
                    />
                    <div className="space-y-2">
                      <label htmlFor="terms" className="text-sm font-bold text-slate-900 cursor-pointer leading-relaxed block">
                        أوافق على شروط وأحكام استخدام منصة DARK وسياسة الخصوصية *
                      </label>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        بالموافقة، فإنك تقر بأنك قرأت وفهمت{' '}
                        <Link href="/terms" className="text-amber-600 hover:text-amber-700 font-bold underline">
                          الشروط والأحكام
                        </Link>{' '}
                        و
                        <Link href="/privacy" className="text-amber-600 hover:text-amber-700 font-bold underline">
                          {' '}سياسة الخصوصية
                        </Link>
                        ، وتوافق على معالجة بياناتك الشخصية وفقاً لها.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!acceptedTerms || isLoading}
                  className="w-full h-14 bg-gradient-to-l from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-black text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="h-5 w-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      جاري إنشاء الحساب...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      إنشاء الحساب
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="container mx-auto max-w-6xl mt-12 text-center">
        <p className="text-sm text-slate-600">
          محمية بواسطة تقنيات التشفير المتقدمة وفق معايير الأمان العالمية 🔒
        </p>
      </div>
    </div>
  );
}