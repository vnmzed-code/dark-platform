// app/properties/[id]/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PropertyDetailsPage() {
  const params = useParams();
  const propertyId = parseInt(params?.id as string) || 1;
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    university: '',
    academicRank: '',
    phone: '',
  });

  // جميع البيانات متاحة لجميع العقارات
  const allPropertiesData = {
    1: {
      id: 1,
      title: 'شقة F4 فاخرة بجوار جامعة باب الزوار',
      price: 45000,
      city: 'الجزائر العاصمة',
      location: 'حي الموز',
      type: 'apartment',
      area: 120,
      bedrooms: 4,
      bathrooms: 2,
      floor: 3,
      description: 'شقة فاخرة وحديثة بموقع استراتيجي قريب جداً من جامعة باب الزوار. تتميز بتصميم عصري وتشطيب عالي الجودة مع جميع المرافق الحديثة.',
      features: [
        'مصعد كهربائي',
        'موقف سيارات خاص',
        'إنترنت فائق السرعة',
        'تكييف مركزي',
        'مطبخ مفتوح عصري',
        'شرفة واسعة',
        'حمام حديث',
        'غرفة معيشة فسيحة',
      ],
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
      ],
      investor: {
        name: 'محمد العتيبي',
        company: 'شركة العقارات الذهبية',
        rating: 4.8,
        reviews: 156,
        phone: '+213 6 12 345 678',
        email: 'info@goldrealestate.dz',
        about: 'شركة متخصصة في تأجير العقارات للنخبة الأكاديمية منذ 10 سنوات',
      },
      nearbyUniversities: [
        'جامعة باب الزوار (USTHB)',
        'جامعة الجزائر 1',
        'جامعة الجزائر 2',
      ],
      nearbyServices: [
        'مستشفى الحكيم سعيدة',
        'مركز تجاري قريب',
        'محطة النقل العام',
        'مدرسة دولية',
      ],
    },
    2: {
      id: 2,
      title: 'استوديو مفروش للنخب الأكاديمية',
      price: 22000,
      city: 'وهران',
      location: 'حي العقيد لطفي',
      type: 'studio',
      area: 45,
      bedrooms: 1,
      bathrooms: 1,
      floor: 2,
      description: 'استوديو حديث ومفروش بالكامل في قلب مدينة وهران. مشروع متكامل موجه للأساتذة والطلاب الجامعيين مع كافة الخدمات.',
      features: [
        'مفروش بالكامل',
        'إنترنت فائق السرعة',
        'حمام حديث',
        'مطبخ كامل التجهيز',
        'تكييف هواء',
        'غسالة آلية',
        'ثلاجة',
        'فرن كهربائي',
      ],
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      ],
      investor: {
        name: 'أحمد الغامدي',
        company: 'مجموعة الساحل العقارية',
        rating: 4.6,
        reviews: 98,
        phone: '+213 6 98 765 432',
        email: 'contact@sahel-realestate.dz',
        about: 'متخصصون في توفير السكن الجامعي الحديث والمريح',
      },
      nearbyUniversities: [
        'جامعة وهران 1',
        'جامعة وهران 2',
      ],
      nearbyServices: [
        'مستشفى إبن رشد',
        'مركز تسوق بحري',
        'محطة القطار',
      ],
    },
    3: {
      id: 3,
      title: 'إقامة مغلقة مخصصة للأساتذة الجامعيين',
      price: 35000,
      city: 'قسنطينة',
      location: 'المدينة الجديدة',
      type: 'residence',
      area: 100,
      bedrooms: 3,
      bathrooms: 2,
      floor: 1,
      description: 'إقامة مغلقة آمنة وحديثة تابعة لمشروع سكني متكامل يخدم الأساتذة والباحثين الجامعيين. توفر كل المرافق والخدمات اللازمة.',
      features: [
        'حارس أمن 24/24',
        'مراقبة أمنية بالكاميرات',
        'ملعب رياضي',
        'حمام سباحة',
        'مجمع تجاري صغير',
        'مركز صحي',
        'حديقة مشتركة',
        'موقف سيارات واسع',
      ],
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      ],
      investor: {
        name: 'عبدالله الأنصاري',
        company: 'مجموعة طيبة للعقارات',
        rating: 4.9,
        reviews: 203,
        phone: '+213 6 55 123 456',
        email: 'info@tiba-realestate.dz',
        about: 'رائدة في تطوير المشاريع السكنية الآمنة والحديثة',
      },
      nearbyUniversities: [
        'جامعة قسنطينة 1',
        'جامعة قسنطينة 2',
        'جامعة قسنطينة 3',
      ],
      nearbyServices: [
        'مستشفى نور الدين باضار',
        'مول قسنطينة',
        'محطة المتروبوس',
      ],
    },
    4: {
      id: 4,
      title: 'شقة F3 مشرفة على الساحل',
      price: 50000,
      city: 'الجزائر العاصمة',
      location: 'حي سيدي فراج',
      type: 'apartment',
      area: 95,
      bedrooms: 3,
      bathrooms: 2,
      floor: 5,
      description: 'شقة فاخرة مشرفة على الساحل مع إطلالة بحرية خلابة. موقع رائع قريب من الجامعات والمرافق.',
      features: [
        'إطلالة بحرية',
        'قريب من الشاطئ',
        'بلكون واسع',
        'تكييف مركزي',
        'مطبخ عصري',
        'حمام حديث',
        'موقف سيارات',
        'مصعد',
      ],
      images: [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      ],
      investor: {
        name: 'فاطمة بن علي',
        company: 'بن علي للعقارات',
        rating: 4.7,
        reviews: 124,
        phone: '+213 6 35 789 456',
        email: 'contact@benali-realestate.dz',
        about: 'متخصصة في العقارات الساحلية الفاخرة',
      },
      nearbyUniversities: [
        'جامعة الجزائر 3',
        'جامعة الجزائر 1',
      ],
      nearbyServices: [
        'الشاطئ مباشرة',
        'مطاعم فاخرة',
        'مراكز تجارية',
      ],
    },
    5: {
      id: 5,
      title: 'شقة F2 حديثة بمدينة تلمسان',
      price: 18000,
      city: 'تلمسان',
      location: 'حي النور',
      type: 'apartment',
      area: 75,
      bedrooms: 2,
      bathrooms: 1,
      floor: 2,
      description: 'شقة حديثة وفسيحة في موقع هادئ وآمن بمدينة تلمسان قرب الجامعات والمرافق.',
      features: [
        'بناء حديث',
        'موقع هادئ',
        'قريب من المركز التجاري',
        'تكييف',
        'مطبخ',
        'حمام',
        'موقف سيارات',
        'شرفة',
      ],
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      ],
      investor: {
        name: 'علي الزياني',
        company: 'الزياني للعقارات',
        rating: 4.5,
        reviews: 87,
        phone: '+213 6 78 123 456',
        email: 'info@ziyani-realestate.dz',
        about: 'متخصصون في العقارات بمدن الولايات',
      },
      nearbyUniversities: [
        'جامعة تلمسان',
      ],
      nearbyServices: [
        'المركز الإداري',
        'المستشفى الجهوي',
        'السوق الحديث',
      ],
    },
    6: {
      id: 6,
      title: 'عمارة سكنية بجنان القصبة',
      price: 55000,
      city: 'الجزائر العاصمة',
      location: 'جنان القصبة',
      type: 'apartment',
      area: 130,
      bedrooms: 4,
      bathrooms: 3,
      floor: 4,
      description: 'عمارة سكنية فاخرة في حي جنان القصبة الراقي مع جميع الخدمات الحديثة.',
      features: [
        'تراس واسع',
        'مطبخ عصري',
        'غرفة خدم',
        'مصعد',
        'موقف سيارات',
        'تكييف مركزي',
        'حمامات حديثة',
        'حديقة مشتركة',
      ],
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
      ],
      investor: {
        name: 'سارة القادري',
        company: 'القادري للتطوير العقاري',
        rating: 4.9,
        reviews: 145,
        phone: '+213 6 45 678 901',
        email: 'info@qadri-development.dz',
        about: 'متخصصة في العقارات الفاخرة',
      },
      nearbyUniversities: [
        'جامعة الجزائر 2',
      ],
      nearbyServices: [
        'المركز الثقافي',
        'المتحف الوطني',
        'الحدائق العمومية',
      ],
    },
    7: {
      id: 7,
      title: 'استوديو مفروش بسيدي بلعباس',
      price: 16000,
      city: 'سيدي بلعباس',
      location: 'الحي الإداري',
      type: 'studio',
      area: 50,
      bedrooms: 1,
      bathrooms: 1,
      floor: 1,
      description: 'استوديو حديث التشطيب ومفروش بالكامل في الحي الإداري بسيدي بلعباس.',
      features: [
        'حديث التشطيب',
        'فرش عصري',
        'موقف سيارات خاص',
        'إنترنت',
        'تكييف',
        'حمام',
        'مطبخ',
        'شرفة صغيرة',
      ],
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      ],
      investor: {
        name: 'محمد حمادة',
        company: 'حمادة للعقارات',
        rating: 4.4,
        reviews: 65,
        phone: '+213 6 32 145 678',
        email: 'contact@hamada-realestate.dz',
        about: 'متخصصون في الاستوديوهات المفروشة',
      },
      nearbyUniversities: [
        'جامعة سيدي بلعباس',
      ],
      nearbyServices: [
        'المركز الإداري',
        'الشرطة',
        'المستشفى',
      ],
    },
    8: {
      id: 8,
      title: 'فيلا مع حديقة بالقبة',
      price: 80000,
      city: 'الجزائر العاصمة',
      location: 'القبة',
      type: 'villa',
      area: 250,
      bedrooms: 5,
      bathrooms: 3,
      floor: 0,
      description: 'فيلا فاخرة مع حديقة خاصة واسعة في حي القبة الراقي.',
      features: [
        'حديقة خاصة',
        'مسبح',
        'موقف سيارات واسع',
        'مطبخ فاخر',
        'حمامات عديدة',
        'غرفة معيشة كبيرة',
        'تراس',
        'غرفة خدم',
      ],
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      ],
      investor: {
        name: 'حسن محمودي',
        company: 'محمودي للفيلات الفاخرة',
        rating: 4.9,
        reviews: 178,
        phone: '+213 6 99 456 789',
        email: 'info@mahmoudi-villas.dz',
        about: 'متخصصون في الفيلات الفاخرة عالية الجودة',
      },
      nearbyUniversities: [
        'جامعة الجزائر 1',
      ],
      nearbyServices: [
        'مول القبة',
        'مطاعم راقية',
        'أندية رياضية',
      ],
    },
  };

  // احصل على البيانات بناءً على معرف العقار
  const property = allPropertiesData[propertyId as keyof typeof allPropertiesData] || allPropertiesData[1];

  const universities = [
    'جامعة باب الزوار (USTHB)',
    'جامعة الجزائر 1',
    'جامعة الجزائر 2',
    'جامعة الجزائر 3',
    'جامعة وهران 1',
    'جامعة وهران 2',
    'جامعة قسنطينة 1',
    'جامعة قسنطينة 2',
    'جامعة تلمسان',
    'جامعة سيدي بلعباس',
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

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // إظهار رسالة النجاح
    setShowSuccessMessage(true);
    
    // إغلاق النافذة المنبثقة
    setShowApplicationModal(false);
    
    // مسح البيانات
    setApplicationData({
      fullName: '',
      university: '',
      academicRank: '',
      phone: '',
    });

    // إخفاء رسالة النجاح بعد 5 ثوان
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-3 rounded-xl shadow-lg">
                <svg className="h-7 w-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-l from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                DARK
              </h1>
            </div>
          </Link>

          <Link href="/properties">
            <button className="bg-gradient-to-l from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-bold px-6 py-3 rounded-lg shadow-lg">
              العودة للعروض
            </button>
          </Link>
        </div>
      </header>

      {/* Success Message Modal */}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[999] p-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* Success Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-in zoom-in duration-300">
            {/* Checkmark Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-2xl font-black text-center text-slate-900 mb-3">
              تم بنجاح! 🎉
            </h2>
            
            <p className="text-center text-slate-600 mb-4 leading-relaxed">
              تم إرسال طلب اهتمامك إلى <span className="font-bold text-amber-600">{property.investor.name}</span>
            </p>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-green-800 text-center leading-relaxed">
                <span className="font-bold">✓</span> سيتم التواصل معك قريباً على الرقم {applicationData.phone}
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800 text-center leading-relaxed">
                <span className="font-bold">💡</span> يمكنك التواصل المباشر على: <br/>
                <span className="font-bold font-mono">{property.investor.phone}</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowApplicationModal(false)}
          ></div>

          {/* Modal Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Header - Gradient */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6">
              <h2 className="text-2xl font-black text-white mb-2">
                تقديم طلب اهتمام
              </h2>
              <p className="text-amber-300 font-semibold">
                {property.title}
              </p>
            </div>

            {/* Form Content */}
            <div className="p-6 space-y-4">
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.fullName}
                    onChange={(e) => setApplicationData({ ...applicationData, fullName: e.target.value })}
                    className="w-full h-11 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right placeholder-slate-400 transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* University */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    الجامعة *
                  </label>
                  <select
                    required
                    value={applicationData.university}
                    onChange={(e) => setApplicationData({ ...applicationData, university: e.target.value })}
                    className="w-full h-11 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right bg-white transition-colors"
                  >
                    <option value="">اختر الجامعة</option>
                    {universities.map((uni) => (
                      <option key={uni} value={uni}>{uni}</option>
                    ))}
                  </select>
                </div>

                {/* Academic Rank */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    الرتبة الأكاديمية *
                  </label>
                  <select
                    required
                    value={applicationData.academicRank}
                    onChange={(e) => setApplicationData({ ...applicationData, academicRank: e.target.value })}
                    className="w-full h-11 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right bg-white transition-colors"
                  >
                    <option value="">اختر الرتبة</option>
                    {academicRanks.map((rank) => (
                      <option key={rank} value={rank}>{rank}</option>
                    ))}
                  </select>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                    className="w-full h-11 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none placeholder-slate-400 transition-colors"
                    placeholder="06 XX XXX XXX"
                    dir="ltr"
                  />
                </div>

                {/* Info Box */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                  <p className="text-xs text-amber-800 font-semibold">
                    📌 سيتم التواصل معك من قبل {property.investor.name} في أسرع وقت
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-l from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    ✓ تأكيد الطلب
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplicationModal(false)}
                    className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-3 rounded-lg transition-colors"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-slate-600">
          <Link href="/" className="hover:text-slate-900">الرئيسية</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-slate-900">العروض</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">{property.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title Section */}
            <div className="space-y-2">
              <h1 className="text-4xl font-black text-slate-900">
                {property.title}
              </h1>
              <div className="flex items-center gap-3 text-lg">
                <span className="text-amber-600 font-bold">📍 {property.city}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-600">{property.location}</span>
              </div>
              <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm mt-2">
                ✓ متاح الآن
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative h-96 bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={property.images[selectedImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold">
                  {selectedImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {property.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-amber-500 shadow-lg'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`صورة ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900">نبذة عن العقار</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border-2 border-slate-100 shadow-md">
                <div className="text-slate-600 text-sm mb-1">المساحة</div>
                <div className="text-3xl font-black text-slate-900">{property.area} م²</div>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-slate-100 shadow-md">
                <div className="text-slate-600 text-sm mb-1">عدد الغرف</div>
                <div className="text-3xl font-black text-slate-900">{property.bedrooms}</div>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-slate-100 shadow-md">
                <div className="text-slate-600 text-sm mb-1">الحمامات</div>
                <div className="text-3xl font-black text-slate-900">{property.bathrooms}</div>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-slate-100 shadow-md">
                <div className="text-slate-600 text-sm mb-1">الطابق</div>
                <div className="text-3xl font-black text-slate-900">{property.type === 'villa' ? 'الأرضي' : `الطابق ${property.floor}`}</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900">المميزات</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {property.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-slate-100">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-slate-900 font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Universities */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900">الجامعات القريبة</h2>
              <div className="space-y-2">
                {property.nearbyUniversities.map((uni: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <span className="text-2xl">🎓</span>
                    <span className="text-slate-900 font-semibold">{uni}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Services */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900">الخدمات القريبة</h2>
              <div className="space-y-2">
                {property.nearbyServices.map((service: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <span className="text-2xl">📍</span>
                    <span className="text-slate-900 font-semibold">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200 shadow-xl sticky top-32">
              <div className="text-slate-600 text-sm mb-2">السعر الشهري</div>
              <div className="text-4xl font-black text-amber-600 mb-6">
                {property.price.toLocaleString('ar-DZ')}
                <span className="text-lg text-slate-600"> دج</span>
              </div>

              <button
                onClick={() => setShowApplicationModal(true)}
                className="w-full bg-gradient-to-l from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-black text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                إرسال طلب اهتمام
              </button>
            </div>

            {/* Investor Card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-lg space-y-4">
              <h3 className="text-xl font-black text-slate-900">معلومات صاحب العقار</h3>

              {/* Investor Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white font-black text-2xl">
                  {property.investor.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-slate-900">{property.investor.name}</h4>
                  <p className="text-sm text-slate-600">{property.investor.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="border-y border-slate-100 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-lg">★★★★★</span>
                  <span className="font-black text-slate-900">{property.investor.rating}</span>
                </div>
                <p className="text-sm text-slate-600">{property.investor.reviews} تقييم</p>
              </div>

              {/* About */}
              <div className="space-y-2">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {property.investor.about}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 bg-slate-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <span className="text-sm text-slate-900 font-semibold font-mono">
                    {property.investor.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">✉️</span>
                  <span className="text-sm text-slate-900 font-semibold truncate">
                    {property.investor.email}
                  </span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors">
                  استدعاء الآن
                </button>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors">
                  واتساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 rounded-lg">
                <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h4 className="text-xl font-black">DARK</h4>
            </div>
            <p className="text-slate-400 mb-6">منصة السكن الحصرية للأساتذة الجامعيين في الجزائر</p>
            <div className="border-t border-slate-800 pt-6">
              <p className="text-slate-500 text-sm">© 2024 DARK. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}