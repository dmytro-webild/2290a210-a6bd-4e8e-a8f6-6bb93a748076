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
      logoAlt="Ninja Antwerp Logo"
      brandName="Ninja Antwerp"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain"}}
      title="Ninja Antwerp'e Hoş Geldiniz"
      description="Antwerp'in kalbinde otantik Japon mutfağının eşsiz lezzetlerini keşfedin. Taze malzemelerle hazırlanan sushi, ramen ve geleneksel yemeklerle damaklarınızı şenlendirin."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-cooks-healthy-meal-rustic-table-decorate-with-mint-leaf-two-raw-pieces-salmon-white-wine-sause-with-spices-herbs-presented-marble-deck-prepared-grill_346278-812.jpg",          imageAlt: "Gourmet Sushi Tabağı"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-noodles-table_23-2148803808.jpg",          imageAlt: "Lezzetli Ramen Kasesi"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/rustic-deck-with-patio-furniture-vegetation_23-2150698372.jpg",          imageAlt: "Kıtır Tempura Karides"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-cups-bottle-arrangement_23-2149706090.jpg",          imageAlt: "Izgara Yakitori Şişler"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-raw-fish-plate_23-2148862986.jpg",          imageAlt: "Udon Erişte Kasesi"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-delicious-healthy-food_23-2148648571.jpg",          imageAlt: "Edamame Atıştırmalık"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/male-hand-taking-sushi-roll-with-chopsticks-from-white-plate_114579-65927.jpg",          imageAlt: "Edamame Atıştırmalık"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-working-as-professional-chef_23-2151864181.jpg",          imageAlt: "Udon Erişte Kasesi"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/japanese-cups-bottle-arrangement_23-2149706082.jpg",          imageAlt: "Izgara Yakitori Şişler"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/preparing-sake-japanese-beverage_23-2150158617.jpg",          imageAlt: "Kıtır Tempura Karides"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-sashimi-fish_74190-1873.jpg",          imageAlt: "Lezzetli Ramen Kasesi"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-ramen-with-chopsticks_23-2150606745.jpg",          imageAlt: "Gourmet Sushi Tabağı"},
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
          type: "text",          text: "Antwerp'in En İyi Japon Restoranı"},
        {
          type: "text",          text: "Taze Sushi ve Sashimi"},
        {
          type: "text",          text: "Geleneksel Ramen Lezzetleri"},
        {
          type: "text",          text: "Mükemmel Servis, Harika Atmosfer"},
        {
          type: "text",          text: "Ninja Antwerp Deneyimi"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Ninja Antwerp: Lezzetin ve Geleneğin Buluştuğu Yer"},
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
          title: "Taze Sushi & Sashimi",          description: "Usta şeflerimiz tarafından günlük olarak hazırlanan el yapımı sushi ve sashimi çeşitleri."},
        {
          icon: Home,
          title: "Geleneksel Ramen",          description: "Zengin ve aromatik et suyunda pişirilmiş, doyurucu ve lezzetli ramen kaseleri."},
        {
          icon: Flame,
          title: "Özel Şef Menüleri",          description: "Deneyimli şefimizin yaratıcı dokunuşlarıyla hazırladığı benzersiz tadım menüleri."},
      ]}
      title="Öne Çıkan Lezzetlerimiz"
      description="Ninja Antwerp'in ustalıkla hazırladığı, taze ve kaliteli malzemelerle yaratılan özel lezzetleri keşfedin."
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
          id: "p1",          brand: "Ninja Antwerp",          name: "Deluxe Sushi Tabağı",          price: "€45.00",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/sushi-plate-with-various-filling_140725-4210.jpg",          imageAlt: "Deluxe Sushi Tabağı"},
        {
          id: "p2",          brand: "Ninja Antwerp",          name: "Tonkotsu Ramen",          price: "€18.50",          rating: 4,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/steaming-bowl-ramen_23-2151950855.jpg",          imageAlt: "Tonkotsu Ramen Kasesi"},
        {
          id: "p3",          brand: "Ninja Antwerp",          name: "Karides Tempura",          price: "€22.00",          rating: 5,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-king-prawn-glasses-shots_140725-11981.jpg",          imageAlt: "Karides Tempura"},
        {
          id: "p4",          brand: "Ninja Antwerp",          name: "Izgara Wagyu Biftek",          price: "€55.00",          rating: 5,
          reviewCount: "70",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-japanese-meal-composition_23-2148809881.jpg",          imageAlt: "Izgara Wagyu Biftek"},
        {
          id: "p5",          brand: "Ninja Antwerp",          name: "Baharatlı Ton Balığı Roll",          price: "€16.00",          rating: 4,
          reviewCount: "60",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fried-sushi-with-red-fish-with-wasabi-ginger-plate_141793-11288.jpg",          imageAlt: "Baharatlı Ton Balığı Roll"},
        {
          id: "p6",          brand: "Ninja Antwerp",          name: "Sebzeli Gyoza",          price: "€12.00",          rating: 4,
          reviewCount: "45",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-traditional-asian-dumplings-with-meat-vegetables-served-with-soy-sauce-plate-rustic-table_141793-8476.jpg",          imageAlt: "Sebzeli Gyoza"},
      ]}
      title="Menümüz"
      description="Usta şeflerimiz tarafından özenle hazırlanan geniş menü seçeneklerimizi keşfedin."
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
          id: "t1",          name: "Elif Yılmaz",          role: "Gastronomi Bloğu Yazarı",          company: "Lezzet Rehberi",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-taking-selfie_23-2149250087.jpg",          imageAlt: "Elif Yılmaz"},
        {
          id: "t2",          name: "Can Demir",          role: "Yemek Eleştirmeni",          company: "Şehir Gurmesi",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-with-delicious-food_23-2149250117.jpg",          imageAlt: "Can Demir"},
        {
          id: "t3",          name: "Ayşe Kaya",          role: "Seyahat Influencer'ı",          company: "Dünya Lezzetleri",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-holding-toast-while-enjoying-lunch-with-her-friends-home_637285-5886.jpg",          imageAlt: "Ayşe Kaya"},
        {
          id: "t4",          name: "Mehmet Ali",          role: "Yazar",          company: "Gurme Notları",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-couple-talking-while-having-meal-dining-table_637285-12645.jpg",          imageAlt: "Mehmet Ali"},
        {
          id: "t5",          name: "Zeynep Arslan",          role: "Dijital Pazarlamacı",          company: "Sosyal Lezzetler",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/sushi-near-soy-sauce-teapot_23-2147773628.jpg",          imageAlt: "Zeynep Arslan"},
      ]}
      title="Müşterilerimiz Ne Diyor?"
      description="Ninja Antwerp'te unutulmaz bir deneyim yaşayan misafirlerimizin yorumlarını okuyun."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      groups={[
        {
          id: "g1",          groupTitle: "Ninja Antwerp Ekibi",          members: [
            {
              id: "m1",              title: "Chef Hiroshi Tanaka",              subtitle: "Baş Şef & Kurucu",              detail: "Japon mutfağının inceliklerini Antwerp'e taşıyan usta şefimiz.",              imageSrc: "http://img.b2bpic.net/free-photo/candy-girl-kitchen_1150-10020.jpg",              imageAlt: "Chef Hiroshi Tanaka"},
            {
              id: "m2",              title: "Ayaka Sato",              subtitle: "Restoran Müdürü",              detail: "Misafirlerimize kusursuz bir deneyim sunmak için titizlikle çalışan yöneticimiz.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-serious-man-with-beard-restaurant_1262-3602.jpg",              imageAlt: "Ayaka Sato"},
            {
              id: "m3",              title: "Kenji Nakamura",              subtitle: "Sushi Şefi",              detail: "En taze deniz ürünleriyle sanat eseri sushi'ler yaratan yetenekli şefimiz.",              imageSrc: "http://img.b2bpic.net/free-photo/man-preparing-sushi-order-takeaway_23-2149050373.jpg",              imageAlt: "Kenji Nakamura"},
            {
              id: "m4",              title: "Sophie Dubois",              subtitle: "Servis Yöneticisi",              detail: "Sıcakkanlı ve profesyonel ekibimizin lideri, her zaman gülümseyerek hizmetinizde.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-waiter-holding-plates-with-food-looking-camera-while-working-pub_637285-2415.jpg",              imageAlt: "Sophie Dubois"},
          ]
        },
      ]}
      title="Ekibimiz"
      description="Ninja Antwerp'i unutulmaz kılan, tutku ve adanmışlıkla çalışan ekibimizle tanışın."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="İletişim"
      title="Rezervasyon ve Bilgi İçin"
      description="Unutulmaz bir Japon mutfağı deneyimi için hemen yerinizi ayırtın veya sorularınız için bize ulaşın."
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
              label: "Konum",              href: "https://maps.google.com/?q=Ninja+Antwerp"},
            {
              label: "E-posta",              href: "mailto:info@ninjaantwerp.com"},
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
      bottomLeftText="© 2024 Ninja Antwerp. Tüm Hakları Saklıdır."
      bottomRightText="Antwerp, Belçika"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
