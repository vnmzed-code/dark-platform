// app/properties/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PropertiesPage() {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const properties = [
    {
      id: 1,
      title: 'شقة F4 فاخرة بجوار جامعة باب الزوار',
      price: 45000,
      city: 'الجزائر العاصمة',
      location: 'حي الموز',
      type: 'apartment',
      area: 120,
      bedrooms: 4,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop',
      features: ['قريب من الجامعة', 'موقف سيارات', 'تكييف مركزي'],
    },
    {
      id: 2,
      title: 'استوديو مفروش للنخب الأكاديمية',
      price: 22000,
      city: 'وهران',
      location: 'حي العقيد لطفي',
      type: 'studio',
      area: 45,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop',
      features: ['مفروش بالكامل', 'إنترنت فائق السرعة', 'حمام حديث'],
    },
    {
      id: 3,
      title: 'إقامة مغلقة مخصصة للأساتذة الجامعيين',
      price: 35000,
      city: 'قسنطينة',
      location: 'المدينة الجديدة',
      type: 'residence',
      area: 100,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=400&fit=crop',
      features: ['حارس أمن 24/24', 'مراقبة أمنية', 'ملعب رياضي'],
    },
    {
      id: 4,
      title: 'شقة F3 مشرفة على الساحل',
      price: 50000,
      city: 'الجزائر العاصمة',
      location: 'حي سيدي فراج',
      type: 'apartment',
      area: 95,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=400&fit=crop',
      features: ['إطلالة بحرية', 'قريب من الشاطئ', 'بلكون واسع'],
    },
    {
      id: 5,
      title: 'شقة F2 حديثة بمدينة تلمسان',
      price: 18000,
      city: 'تلمسان',
      location: 'حي النور',
      type: 'apartment',
      area: 75,
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&h=400&fit=crop',
      features: ['بناء حديث', 'موقع هادئ', 'قريب من المركز التجاري'],
    },
    {
      id: 6,
      title: 'عمارة سكنية بجنان القصبة',
      price: 55000,
      city: 'الجزائر العاصمة',
      location: 'جنان القصبة',
      type: 'apartment',
      area: 130,
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=400&fit=crop',
      features: ['تراس واسع', 'مطبخ عصري', 'غرفة خدم'],
    },
    {
      id: 7,
      title: 'استوديو مفروش بسيدي بلعباس',
      price: 16000,
      city: 'سيدي بلعباس',
      location: 'الحي الإداري',
      type: 'studio',
      area: 50,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop',
      features: ['حديث التشطيب', 'فرش عصري', 'موقف سيارات خاص'],
    },
    {
      id: 8,
      title: 'فيلا مع حديقة بالقبة',
      price: 80000,
      city: 'الجزائر العاصمة',
      location: 'القبة',
      type: 'villa',
      area: 250,
      bedrooms: 5,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      features: ['حديقة خاصة', 'مسبح', 'موقف سيارات واسع'],
    },
  ];

  const filteredProperties = properties.filter((property) => {
    const cityMatch = selectedCity === 'all' || property.city === selectedCity;
    const typeMatch = selectedType === 'all' || property.type === selectedType;

    let priceMatch = true;
    if (priceRange === 'low') priceMatch = property.price < 30000;
    else if (priceRange === 'medium') priceMatch = property.price >= 30000 && property.price <= 60000;
    else if (priceRange === 'high') priceMatch = property.price > 60000;

    return cityMatch && typeMatch && priceMatch;
  });

  const cities = ['all', 'الجزائر العاصمة', 'وهران', 'قسنطينة', 'تلمسان', 'سيدي بلعباس'];
  const types = [
    { value: 'all', label: 'جميع الأنواع' },
    { value: 'apartment', label: 'شقة' },
    { value: 'studio', label: 'استوديو' },
    { value: 'residence', label: 'إقامة مغلقة' },
    { value: 'villa', label: 'فيلا' },
  ];

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
              <p className="text-[10px] text-slate-600 font-medium -mt-1">منصة السكن الأكاديمي</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-semibold transition-colors">
              الرئيسية
            </Link>
            <Link href="/properties" className="text-slate-900 font-bold border-b-2 border-amber-500">
              العروض
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-slate-900 font-semibold transition-colors">
              عن المنصة
            </Link>
          </nav>

          <Link href="/register">
            <button className="bg-gradient-to-l from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              تسجيل الدخول
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-bold text-amber-300">✨ عروض سكنية موثوقة للأساتذة الجامعيين</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              اكتشف أفضل العروض السكنية في الجزائر
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              نقدم لك قائمة شاملة من الشقق والفيلات المخصصة للأساتذة الجامعيين عبر أكبر الولايات الجزائرية
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white shadow-lg border-b border-slate-200 sticky top-20 z-40">
        <div className="container mx-auto px-4 md:px-8 py-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-4">
            {/* City Filter */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">الولاية</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right bg-white transition-colors font-semibold"
              >
                <option value="all">جميع الولايات</option>
                {cities.filter(c => c !== 'all').map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">نوع العقار</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right bg-white transition-colors font-semibold"
              >
                {types.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">نطاق السعر (دج)</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-right bg-white transition-colors font-semibold"
              >
                <option value="all">جميع الأسعار</option>
                <option value="low">أقل من 30,000 دج</option>
                <option value="medium">30,000 - 60,000 دج</option>
                <option value="high">أكثر من 60,000 دج</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-slate-600 font-semibold">
            <span className="text-amber-600 font-black">{filteredProperties.length}</span> عقار متاح
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-4">
                <span className="text-2xl">😕</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">لا توجد نتائج</h3>
              <p className="text-slate-600">جرب تغيير خيارات البحث أو الفلترة</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-slate-100 hover:border-amber-200"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                      {property.type === 'apartment' && '🏢 شقة'}
                      {property.type === 'studio' && '🏠 استوديو'}
                      {property.type === 'residence' && '🏛️ إقامة'}
                      {property.type === 'villa' && '🏡 فيلا'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    {/* Title */}
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {property.title}
                    </h3>

                    {/* Location */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <span>📍</span>
                        <span className="font-bold">{property.city}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <span>🏘️</span>
                        <span>{property.location}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex gap-3 text-xs text-slate-600 py-2 border-y border-slate-100">
                      <div className="flex-1 text-center">
                        <div className="text-slate-500">م²</div>
                        <div className="font-bold text-slate-900">{property.area}</div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-slate-500">غرف</div>
                        <div className="font-bold text-slate-900">{property.bedrooms}</div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-slate-500">حمامات</div>
                        <div className="font-bold text-slate-900">{property.bathrooms}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="bg-slate-50 rounded-lg p-3 space-y-1">
                      {property.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="text-amber-600">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-amber-600">
                        {property.price.toLocaleString('ar-DZ')}
                      </span>
                      <span className="text-slate-600 text-xs font-semibold">دج/شهر</span>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => alert(`تم اختيار: ${property.title}\nالسعر: ${property.price.toLocaleString('ar-DZ')} دج/شهر`)}
                      className="w-full bg-gradient-to-l from-slate-800 to-slate-900 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      تقديم طلب
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">سهل البحث</h4>
              <p className="text-slate-600 text-sm">ابحث عن سكن مناسب حسب الولاية والسعر والنوع</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">عروض موثوقة</h4>
              <p className="text-slate-600 text-sm">جميع العروض من مستثمرين وملاك موثوقين</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">تواصل مباشر</h4>
              <p className="text-slate-600 text-sm">تواصل مباشرة مع المالكين والمستثمرين</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
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
            <div className="border-t border-slate-800 pt-6 space-y-2">
              <p className="text-slate-500 text-sm">© 2024 DARK. جميع الحقوق محفوظة.</p>
              <p className="text-slate-500 text-sm">منصة متخصصة في إيجاد السكن المناسب للنخبة الأكاديمية</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}