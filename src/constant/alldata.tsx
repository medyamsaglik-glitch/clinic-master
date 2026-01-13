import Link from "next/link";
import { IMAGES, SVGICONS } from "./theme";
import Image, { StaticImageData } from "next/image";

// layout
// header (üst bilgi kutuları)
export const headerinfo = [
  {
    image: IMAGES.svgicon1,
    title: "Bize Ulaşın",
    paragraph: (
      <Link href="tel:+11234567890" className="text-secondary">
        +1 123 456 7890
      </Link>
    ),
  },
  {
    image: IMAGES.svgicon2,
    title: "E-posta",
    paragraph: (
      <Link href="mailto:email@domain.com" className="text-secondary">
        email@domain.com
      </Link>
    ),
  },
  {
    image: IMAGES.svgicon3,
    title: "Online Randevu",
    paragraph: (
      <span>
        Hemen Oluştur <i className="feather icon-arrow-right" />
      </span>
    ),
  },
  { image: IMAGES.svgicon4, title: "Destek", paragraph: "7/24 Destek", },
  {
    image: IMAGES.svgicon5,
    title: "Ödeme",
    paragraph: (
      <span>
        Online Öde <i className="feather icon-arrow-right" />
      </span>
    ),
  },
  { image: IMAGES.svgicon6, title: "Sepet", paragraph: "2 Ürün", },
];

export type HeaderContentItem = {
  title: string;
  to: string;
  image?: string | StaticImageData;
};

export type HeaderItem = {
  title: string;
  to?: string;
  classChange?: string;
  content?: HeaderContentItem[];
};

/**
 * ✅ ANA MENÜ (Senin istediğin yapı)
 * - KVKK ve After/Before sayfaları projede yoksa 404 olmaması için şimdilik /under-construction
 *   (Sayfaları oluşturunca: KVKK -> /kvkk, Galeri -> /gallery yaparız.)
 */
export const headerdata: HeaderItem[] = [
  {
    title: "Ana Sayfa",
    to: "/",
  },
  {
    title: "Kurumsal",
    classChange: "sub-menu-down",
    content: [
      { title: "Özhan İnce Kimdir?", to: "/about-us" }, // mevcut sayfa
      { title: "Ekibimiz", to: "/team" }, // mevcut sayfa
      { title: "Sıkça Sorulan Sorular", to: "/faqs" }, // mevcut sayfa
      { title: "Kişisel Veri Gizliliği", to: "/under-construction" }, // KVKK sayfası açınca /kvkk yap
    ],
  },
  {
    title: "İşlemlerimiz",
    to: "/services",
  },
  {
    title: "After - Before Galeri",
    to: "/under-construction", // Galeri sayfası açınca /gallery yap
  },
  {
    title: "Hasta Rehberi",
    classChange: "sub-menu-down",
    content: [
      { title: "Bilgilendirme Yazıları (Grid)", to: "/blog-grid" },
      { title: "Bilgilendirme Yazıları (Liste)", to: "/blog-list-sidebar" },
      { title: "Yazı Detayı", to: "/blog-details" },
    ],
  },
  { title: "İletişim", to: "/contact-us" },
];

// footer
export const footerdata1 = [
  {
    delay: "0.4s",
    icon: <i className="feather icon-phone" />,
    title: "Bizi Arayın",
    paragraph: (
      <Link href="tel:+11234567890" className="text-body">
        +1 123 456 7890
      </Link>
    ),
  },
  {
    delay: "0.6s",
    icon: <i className="feather icon-mail" />,
    title: "E-posta Gönderin",
    paragraph: (
      <Link href="mailto:info@example.com" className="text-body">
        info@example.com
      </Link>
    ),
  },
  {
    delay: "0.8s",
    icon: <i className="feather icon-clock" />,
    title: "Çalışma Saatleri",
    paragraph: "Pzt - Cmt: 07:00 - 17:00",
  },
];

export const footerdata2 = [
  {
    title: "Hizmetlerimiz",
    span1: "Acil Destek",
    span2: "Ameliyathane",
    span3: "Genel Kontrol",
    span4: "Tanı Merkezi",
    span5: "Poliklinik",
    link1: "/service-detail",
    link2: "/service-detail",
    link3: "/service-detail",
    link4: "/service-detail",
    link5: "/service-detail",
    delay: "0.4s",
  },
  {
    title: "Faydalı Linkler",
    span1: "Gizlilik Politikası",
    span2: "Şartlar & Koşullar",
    span3: "İletişim",
    span4: "Son Yazılar",
    span5: "Site Haritası",
    link1: "/under-construction",
    link2: "/under-construction",
    link3: "/contact-us",
    link4: "/blog-grid",
    link5: "/under-construction",
    delay: "0.6s",
  },
  {
    title: "Şubelerimiz",
    span1: "New York",
    span2: "London SF",
    span3: "Edinburgh",
    span4: "Los Angeles",
    span5: "Las Vegas",
    link1: "#",
    link2: "#",
    link3: "#",
    link4: "#",
    link5: "#",
    delay: "0.8s",
  },
  {
    title: "Kısa Yollar",
    span1: "Hakkımızda",
    span2: "Hizmetlerimiz",
    span3: "Ekibimiz",
    span4: "Randevu",
    span5: "İletişim",
    link1: "/about-us",
    link2: "/services",
    link3: "/team",
    link4: "/appointment",
    link5: "/contact-us",
    delay: "1.0s",
  },
];

// pages
// testimonial
export const testidata = [
  { treat: "Optimum Tedavi", delay: "0.2s", title: "Kenneth Fong", position: "Hasta", image: IMAGES.testimonial2 },
  { treat: "En İyi Tedavi", delay: "0.4s", title: "Danial Frankie", position: "Hasta", image: IMAGES.testimonial3 },
  { treat: "Önerilen Bakım", delay: "0.6s", title: "Rihana Roy", position: "Hasta", image: IMAGES.testimonial4 },
  { treat: "Birinci Sınıf Hizmet", delay: "0.8s", title: "Kenneth Fong", position: "Hasta", image: IMAGES.testimonial5 },
];

export const testiswipeerdata2 = [
  { image: IMAGES.testimonialsmall1, name: "Danial Frankie" },
  { image: IMAGES.testimonialsmall2, name: "Esteban Serrano" },
  { image: IMAGES.testimonialsmall3, name: "Rihana Roy" },
];

export interface BlogItem {
  image: any;
  dealy: string;
  title: string;
}

// bloggrid
export const blogdata: BlogItem[] = [
  { image: IMAGES.blogoverlaylarge1, dealy: "0.1s", title: "İş Yönetimi ve Hasta Bakımını Birlikte Yönetmenin Sanatı." },
  { image: IMAGES.blogoverlaylarge2, dealy: "0.2s", title: "Başarılı Rehabilitasyon: Sadece Egzersizden Fazlası" },
  { image: IMAGES.blogoverlaylarge3, dealy: "0.3s", title: "Mola Bakımı Nedir ve Neden Önemlidir?" },
  { image: IMAGES.blogoverlaylarge4, dealy: "0.4s", title: "Hasta Deneyiminde Süreklilik ve Kalite" },
  { image: IMAGES.blogoverlaylarge5, dealy: "0.5s", title: "İyileşmede İstikrar: Süreklilik ve İlerleme" },
  { image: IMAGES.blogoverlaylarge6, dealy: "0.6s", title: "İnme Sonrası Toparlanmayı Destekleyen Yaklaşımlar" },
];

export const blogdata2 = [
  { image: IMAGES.bloggrid1, dealy: "0.1s", title: "İş Yönetimi ve Hasta Bakımını Birlikte Yönetmenin Sanatı." },
  { image: IMAGES.bloggrid2, dealy: "0.2s", title: "Başarılı Rehabilitasyon: Sadece Egzersizden Fazlası" },
  { image: IMAGES.bloggrid3, dealy: "0.3s", title: "Mola Bakımı Nedir ve Neden Önemlidir?" },
  { image: IMAGES.bloggrid4, dealy: "0.4s", title: "Hasta Deneyiminde Süreklilik ve Kalite" },
  { image: IMAGES.bloggrid5, dealy: "0.5s", title: "İyileşmede İstikrar: Süreklilik ve İlerleme" },
  { image: IMAGES.bloggrid6, dealy: "0.6s", title: "İnme Sonrası Toparlanmayı Destekleyen Yaklaşımlar" },
];

// servicedetails
export const servicedetails = [
  { columnstand: "active", title: "Anjiyoplasti" },
  { title: "Kardiyoloji" },
  { title: "Diş" },
  { title: "Endokrinoloji" },
  { title: "Göz Sağlığı" },
  { title: "Nöroloji" },
  { title: "Ortopedi" },
  { title: "MR" },
];

// teamdetail
export const empolydata = [
  { id: 1, delay: "0.2s", image: IMAGES.team1, title: "Nashid Martines", position: "Kalp Cerrahisi" },
  { id: 2, delay: "0.4s", image: IMAGES.team2, title: "Emilio Duarte", position: "Çocuk Kliniği" },
  { id: 3, delay: "0.6s", image: IMAGES.team3, title: "Rihana Roy", position: "Kadın Hastalıkları" },
  { id: 5, delay: "1.0s", image: IMAGES.team1, title: "Santiago Rivas", position: "Kalp Cerrahisi" },
  { id: 6, delay: "1.2s", image: IMAGES.team2, title: "Danial Frankie", position: "Çocuk Kliniği" },
  { id: 4, delay: "0.8s", image: IMAGES.team4, title: "Esteban Serrano", position: "Nöroloji" },
  { id: 7, delay: "1.4s", image: IMAGES.team3, title: "Roman Petrov", position: "Kadın Hastalıkları" },
  { id: 8, delay: "1.6s", image: IMAGES.team4, title: "Kenneth Fong", position: "Nöroloji" },
];

// component
// alllocation
export const locationdata = [
  { delay: "0.2s", title: "Amerika Birleşik Devletleri" },
  { delay: "0.4s",