// app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShieldCheck, 
  MessageSquare, 
  Sparkles,
  GraduationCap,
  Building2,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-3 rounded-xl shadow-lg">
                <GraduationCap className="h-7 w-7 text-amber-400" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-l from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                DARK
              </h1>
              <p className="text-[10px] text-slate-600 font-medium -mt-1">منصة السكن الأكاديمي</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-semibold transition-colors relative group">
              الرئيسية
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/listings" className="text-slate-700 hover:text-slate-900 font-semibold transition-colors relative group">
              العروض
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-slate-900 font-semibold transition-colors relative group">
              عن المنصة
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Auth Button */}
          <Link href="/auth/login">
            <Button 
              className="bg-gradient-to-l from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 px-6"
              size="lg"
            >
              تسجيل الدخول
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-[0.02]"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-l from-amber-50 to-yellow-50 border border-amber-200 rounded-full px-5 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-bold text-amber-900">منصة السكن الحصرية للأكاديميين</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-l from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                منصة DARK
              </span>
              <br />
              <span className="bg-gradient-to-l from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                الخيار الأول لسكن
              </span>
              <br />
              <span className="text-slate-700">
                الأساتذة الجامعيين
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              نربط الأساتذة الجامعيين بأفضل العروض السكنية المصممة خصيصاً لتلبية احتياجاتهم الأكاديمية والمعيشية
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/auth/register?role=professor" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-l from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-bold text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-slate-500/30 transition-all duration-300 hover:scale-105"
                >
                  <GraduationCap className="ml-2 h-6 w-6" />
                  أنا أستاذ جامعي
                </Button>
              </Link>
              
              <Link href="/auth/register?role=investor" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Building2 className="ml-2 h-6 w-6" />
                  أنا مستثمر عقاري
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-l from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  +500
                </div>
                <div className="text-sm md:text-base text-slate-600 font-semibold mt-1">عقار متاح</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-l from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  +1200
                </div>
                <div className="text-sm md:text-base text-slate-600 font-semibold mt-1">أستاذ مسجل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-l from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm md:text-base text-slate-600 font-semibold mt-1">رضا العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-4">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-bold text-amber-900">لماذا DARK؟</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              مميزات تجعلنا الخيار الأمثل
            </h3>
            <p className="text-lg md:text-xl text-slate-600">
              نقدم تجربة فريدة تجمع بين الجودة والأمان والسهولة
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="border-2 border-slate-100 hover:border-amber-200 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-10 w-10 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3">عروض حصرية</h4>
                  <p className="text-slate-600 leading-relaxed">
                    عقارات مختارة بعناية تلبي المعايير الأكاديمية الراقية وتوفر بيئة مثالية للعمل والاستقرار
                  </p>
                  <ul className="mt-6 space-y-2 text-right">
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      <span>قرب من الجامعات الكبرى</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      <span>مرافق عصرية ومتكاملة</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      <span>أسعار تنافسية ومرنة</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 border-slate-100 hover:border-amber-200 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-10 w-10 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3">تواصل مباشر</h4>
                  <p className="text-slate-600 leading-relaxed">
                    نظام محادثة فوري يربطك بالملاك مباشرة لضمان سرعة الاستجابة والشفافية الكاملة
                  </p>
                  <ul className="mt-6 space-y-2 text-right">
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>دردشة مباشرة مع الملاك</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>إشعارات فورية</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>حفظ سجل المحادثات</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 border-slate-100 hover:border-amber-200 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="h-10 w-10 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3">أمان وتحقق</h4>
                  <p className="text-slate-600 leading-relaxed">
                    جميع الأساتذة والملاك يخضعون لعملية تحقق صارمة لضمان مجتمع آمن وموثوق
                  </p>
                  <ul className="mt-6 space-y-2 text-right">
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>توثيق الهوية الأكاديمية</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>فحص شامل للعقارات</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>حماية البيانات الشخصية</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
              هل أنت جاهز للعثور على
              <br />
              <span className="bg-gradient-to-l from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                منزلك الأكاديمي المثالي؟
              </span>
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              انضم إلى مئات الأساتذة الذين وجدوا سكنهم المثالي عبر منصة DARK
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/auth/register">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-l from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-black text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
                >
                  ابدأ الآن مجاناً
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-slate-900" strokeWidth={2.5} />
                </div>
                <h4 className="text-xl font-black">DARK</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                منصة السكن الحصرية للأساتذة الجامعيين في السعودية
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-bold text-lg mb-4 text-amber-400">روابط سريعة</h5>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
                <li><Link href="/listings" className="hover:text-white transition-colors">العروض</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">عن المنصة</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="font-bold text-lg mb-4 text-amber-400">قانوني</h5>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">سياسة الكوكيز</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-bold text-lg mb-4 text-amber-400">تواصل معنا</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>البريد: info@dark.sa</li>
                <li>الهاتف: +966 XX XXX XXXX</li>
                <li>الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>© 2024 DARK. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}