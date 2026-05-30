"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, Flame, Home } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Anasayfa",          id: "#home"},
        {
          name: "Hakkımızda",          id: "#about"},
        {
          name: "Menü",          id: "#menu"},
        {
          name: "Ekibimiz",          id: "#team"},
        {
          name: "İletişim",          id: "#contact"},
      ]}
      button={{
        text: "Rezervasyon Yap",        href: "#contact"}}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=tepa2w"
      logoAlt="Döner Palace Logo"
      brandName="Döner Palace"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain"}}
      title="Lezzetli Dönerin Adresi: Döner Palace"
      description="Antwerp'in en iyi et ve tavuk döneri için Döner Palace'a hoş geldiniz. Her lokmada geleneksel lezzet, taptaze malzemeler."
      leftCarouselItems={[
        {
          imageSrc: "https://img.b2bpic.net/free-photo/delicious-dner-kebab-with-meat-vegetables-served-table_140725-5024.jpg?_wi=1",          imageAlt: "Et Döner"},
        {
          imageSrc: "https://img.b2bpic.net/free-photo/chicken-dner-kebab-with-french-fries_140725-5028.jpg?_wi=1",          imageAlt: "Tavuk Döner"},
        {
          imageSrc: "https://img.b2bpic.net/free-photo/top-view-delicious-chicken-doner_23-2148419641.jpg?_wi=1",          imageAlt: "Döner Dürüm"},
        {
          imageSrc: "https://img.b2bpic.net/free-photo/delicious-doner-with-chicken-served-with-fresh-salad_23-2148780287.jpg?_wi=1",          imageAlt: "Döner Tabak"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "https://img.b2bpic.net/free-photo/top-view-delicious-chicken-doner_23-2148419641.jpg?_wi=2",          imageAlt: "Döner Dürüm"},
        {
          imageSrc: "https://img.b2bpic.net/free-photo/delicious-dner-kebab-with-meat-vegetables-served-table_140725-5024.jpg?_wi=2",          imageAlt: "Et Döner"},
        {
          imageSrc: "https://img.b2bpic.net/free-photo/chicken-dner-kebab-with-french-fries_140725-5028.jpg?_wi=2",          imageAlt: "Tavuk Döner"},
        {
          imageSrc: "https://img.b2bpic.net/free-photo/delicious-doner-with-chicken-served-with-fresh-salad_23-2148780287.jpg?_wi=2",          imageAlt: "Döner Tabak"},
      ]}
      buttons={[
        {
          text: "Menüyü Keşfet",          href: "#menu"},
        {
          text: "Rezervasyon Yap",          href: "#contact"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-woman-eating_23-2149008692.jpg",          alt: "Mutlu müşteri"},
        {
          src: "http://img.b2bpic.net/free-photo/young-sunny-smiling-blonde-woman-white-sweater-eating-sushi-lunch-small-caffe_231208-5225.jpg",          alt: "Yemekten keyif alan kişi"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-indoors_23-2151038685.jpg",          alt: "Gülümseyen şef"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-couple-enjoying-cafe-while-talking-waiter_637285-579.jpg",          alt: "Memnun ziyaretçi"},
        {
          src: "http://img.b2bpic.net/free-photo/good-humoured-caucasian-woman-enjoying-healthy-food-indoor-shot-smiling-girl-eating-salad_197531-17196.jpg",          alt: "Yemek blog yazarı"},
      ]}
      avatarText="100+ Mutlu Müşteri Yorumu"
      marqueeItems={[
        {
          type: "text",          text: "Antwerp'in En İyi Dönercisi"},
        {
          type: "text",          text: "Taptaze Et Döner"},
        {
          type: "text",          text: "Lezzetli Tavuk Döner"},
        {
          type: "text",          text: "Geleneksel Türk Lezzetleri"},
        {
          type: "text",          text: "Döner Palace Deneyimi"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Döner Palace: Geleneksel Döner Lezzetinin Yeni Adresi"},
      ]}
      buttons={[
        {
          text: "Hikayemizi Keşfedin",          href: "#"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Award,
          title: "Gerçek Et Döner",          description: "Özel soslarımızla marine edilmiş, odun ateşinde pişirilmiş %100 dana veya kuzu etinden döner."},
        {
          icon: Flame,
          title: "Nefis Tavuk Döner",          description: "Taptaze tavuk göğsünden hazırlanan, hafif ve lezzetli döner çeşitleri."},
        {
          icon: Home,
          title: "Günlük Taze Malzemeler",          description: "Her gün özenle seçilen taze sebzeler ve günlük hazırlanan pidelerle servis edilir."},
      ]}
      title="Döner Palace Farkı"
      description="Sadece en kaliteli et ve tavuk döneri sunuyoruz, her zaman taze ve özenle hazırlanmış."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          brand: "Döner Palace",          name: "Et Döner Porsiyon",          price: "€15.00",          rating: 5,
          reviewCount: "120",          imageSrc: "https://img.b2bpic.net/free-photo/delicious-dner-kebab-with-meat-vegetables-served-table_140725-5024.jpg?_wi=3",          imageAlt: "Et Döner Porsiyon"},
        {
          id: "p2",          brand: "Döner Palace",          name: "Tavuk Döner Porsiyon",          price: "€13.00",          rating: 4,
          reviewCount: "85",          imageSrc: "https://img.b2bpic.net/free-photo/chicken-dner-kebab-with-french-fries_140725-5028.jpg?_wi=3",          imageAlt: "Tavuk Döner Porsiyon"},
        {
          id: "p3",          brand: "Döner Palace",          name: "Et Döner Dürüm",          price: "€12.00",          rating: 5,
          reviewCount: "95",          imageSrc: "https://img.b2bpic.net/free-photo/top-view-delicious-chicken-doner_23-2148419641.jpg?_wi=3",          imageAlt: "Et Döner Dürüm"},
        {
          id: "p4",          brand: "Döner Palace",          name: "Tavuk Döner Dürüm",          price: "€10.00",          rating: 5,
          reviewCount: "70",          imageSrc: "https://img.b2bpic.net/free-photo/delicious-doner-with-chicken-served-with-fresh-salad_23-2148780287.jpg?_wi=3",          imageAlt: "Tavuk Döner Dürüm"},
      ]}
      title="Menümüz: Et ve Tavuk Döner"
      description="Sadece iki çeşit dönerimiz var, ama her biri damaklarda iz bırakacak lezzette."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Elif Yılmaz",          role: "Döner Bloğu Yazarı",          company: "Lezzet Notları",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-taking-selfie_23-2149250087.jpg",          imageAlt: "Elif Yılmaz"},
        {
          id: "t2",          name: "Can Demir",          role: "Yemek Uzmanı",          company: "Döner Tutkunu",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-with-delicious-food_23-2149250117.jpg",          imageAlt: "Can Demir"},
        {
          id: "t3",          name: "Ayşe Kaya",          role: "Yerel Gurme",          company: "Şehir Lezzetleri",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-holding-toast-while-enjoying-lunch-with-her-friends-home_637285-5886.jpg",          imageAlt: "Ayşe Kaya"},
        {
          id: "t4",          name: "Mehmet Ali",          role: "Lezzet Avcısı",          company: "Gurme Deneyimleri",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-couple-talking-while-having-meal-dining-table_637285-12645.jpg",          imageAlt: "Mehmet Ali"},
        {
          id: "t5",          name: "Zeynep Arslan",          role: "Sosyal Medya Gurmesi",          company: "Döner Paylaşımları",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/sushi-near-soy-sauce-teapot_23-2147773628.jpg",          imageAlt: "Zeynep Arslan"},
      ]}
      title="Müşterilerimiz Dönerlerimiz Hakkında Ne Diyor?"
      description="Döner Palace'ın lezzetlerini tadan misafirlerimizin yorumlarını okuyun."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      groups={[
        {
          id: "g1",          groupTitle: "Döner Palace Ekibi",          members: [
            {
              id: "m1",              title: "Usta Dönerci Ahmet Bey",              subtitle: "Baş Döner Şefi & Kurucu",              detail: "Yılların deneyimiyle en lezzetli et döneri hazırlayan usta şefimiz.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-chef-uniform_23-2148710321.jpg",              imageAlt: "Usta Dönerci Ahmet Bey"},
            {
              id: "m2",              title: "Zeynep Hanım",              subtitle: "Restoran Müdürü",              detail: "Misafirlerimize sıcak ve hızlı hizmet sunmak için çalışan yöneticimiz.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-posing-indoors_23-2151038676.jpg",              imageAlt: "Zeynep Hanım"},
            {
              id: "m3",              title: "Murat Bey",              subtitle: "Tavuk Döner Ustası",              detail: "Taptaze tavuk döneri özenle hazırlayan genç ve yetenekli ustamız.",              imageSrc: "http://img.b2bpic.net/free-photo/man-cooking-grilled-chicken_23-2149591963.jpg",              imageAlt: "Murat Bey"},
            {
              id: "m4",              title: "Fatma Hanım",              subtitle: "Müşteri İlişkileri",              detail: "Güleryüzlü ekibimizin bir parçası, her zaman misafir memnuniyetine odaklı.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-restaurant_23-2150935579.jpg",              imageAlt: "Fatma Hanım"},
          ]
        },
      ]}
      title="Döner Sarayının Usta Elleri"
      description="Döner Palace'ın lezzet sırrını oluşturan, tutkuyla çalışan ekibimizle tanışın."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="İletişim"
      title="Lezzet Durağımızda Yer Ayırtın"
      description="En taze dönerlerimizi tatmak için hemen yerinizi ayırtın veya özel siparişleriniz için bize ulaşın."
      inputPlaceholder="E-posta adresinizi girin"
      buttonText="Gönder"
      termsText="Gönder düğmesine tıklayarak gizlilik politikamızı kabul etmiş olursunuz."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Keşfedin",          items: [
            {
              label: "Menü",              href: "#menu"},
            {
              label: "Hakkımızda",              href: "#about"},
            {
              label: "Ekibimiz",              href: "#team"},
          ],
        },
        {
          title: "İletişim",          items: [
            {
              label: "Rezervasyon",              href: "#contact"},
            {
              label: "Konum",              href: "https://maps.google.com/?q=Döner+Palace+Antwerp"},
            {
              label: "E-posta",              href: "mailto:info@donerpalaceantwerp.com"},
          ],
        },
        {
          title: "Yasal",          items: [
            {
              label: "Gizlilik Politikası",              href: "#"},
            {
              label: "Kullanım Şartları",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Döner Palace. Tüm Hakları Saklıdır."
      bottomRightText="Antwerp, Belçika"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}