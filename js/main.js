/* =============================================
   MY DEAR SKIN — main.js
   Language switching + UI behaviours
   ============================================= */

// ── Translation Data ──────────────────────────
const translations = {
  en: {
    // Banner
    'banner-text': 'Shanthi Wedakama — Traditional Sri Lankan Ayurveda Healing',

    // Header
    'nav-home': 'Home',
    'nav-about': 'About Us',
    'nav-doctor': 'Our Doctor',
    'nav-treatments': 'Our Treatments',
    'nav-packages': 'Our Packages',
    'nav-gallery': 'Gallery',
    'nav-testimonials': 'Testimonials',
    'nav-contact': 'Contact Us',
    'book-now': 'Book Now',
    'menu-label': 'Menu',

    // Hero
    'hero-eyebrow': 'Ādhitya Āyurvēda · Ampitiya · Kandy',
    'hero-title': 'Discover the Wonders of Traditional Ayurveda',
    'hero-subtitle': 'Healing the Sri Lankan Way',
    'hero-desc': 'Experience the ancient wisdom of Hela Wedakama at the heart of Kandy. We treat the root, not just the symptom.',
    'hero-cta': '▶ Learn More',
    'scroll-text': 'Scroll',

    // Credentials
    'cred-reg': 'Reg No: PV00313811',
    'cred-jp': 'Justice of the Peace · Reg: 16351',
    'cred-gen': 'General Reg: s_R*010SFSUNFO',
    'cred-loc': 'Reg No/08/12/kP/kd/107',

    // About
    'about-eyebrow': 'About Us',
    'about-title': 'Traditional Ayurveda in the Heart of Kandy',
    'about-desc': 'My Dear Skin (Pvt) Ltd is a registered traditional Ayurveda wellness centre located in the lush hills of Ampitiya, Kandy. Founded by Dr. Mangalika Rajasekara — a Justice of the Peace and licensed Ayurvedic physician — our practice is rooted in centuries-old Sri Lankan healing traditions known as Hela Wedakama.',
    'about-badge': 'Registered Ayurveda\nWellness Centre',
    'hl1-title': 'Ancient Sri Lankan Heritage',
    'hl1-sub': 'Centuries of traditional wisdom',
    'hl2-title': 'Licensed Physicians',
    'hl2-sub': 'JP-certified Ayurveda doctors',
    'hl3-title': 'Natural Herbal Medicine',
    'hl3-sub': 'Pure plant-based treatments',
    'hl4-title': 'All Diseases Treated',
    'hl4-sub': 'Root-cause healing approach',

    // Treatments
    'treat-eyebrow': 'Our Treatments',
    'treat-title': 'Conditions We Treat',
    'treat-desc': 'Using traditional Hela Wedakama plant-based medicine, we address a wide range of chronic and acute conditions at their root cause.',

    't1-name': 'Arthritis & Joint Care',
    't1-desc': 'Natural relief for arthritis, cartilage degeneration, and chronic joint pain through herbal oils and treatments.',
    't2-name': 'Cardiovascular Health',
    't2-desc': 'Traditional remedies for high blood pressure, fatty heart, and cholesterol management.',
    't3-name': 'Gastritis & Digestive',
    't3-desc': 'Effective Ayurvedic treatment for gastritis, acidity, and all digestive disorders.',
    't4-name': 'Paralysis & Nerve Care',
    't4-desc': 'Specialized traditional treatments for hemiplegia, paralysis, and neurological conditions.',
    't5-name': 'Sinusitis & Respiratory',
    't5-desc': 'Relief from sinusitis, chronic cough, and respiratory ailments using herbal therapies.',
    't6-name': 'Headaches & Migraines',
    't6-desc': 'Traditional head treatments and herbal medicines to relieve chronic headaches.',
    't7-name': 'Diabetes Management',
    't7-desc': 'Holistic Ayurvedic approach to managing blood sugar levels and diabetic complications.',
    't8-name': "Children's Health",
    't8-desc': 'Gentle traditional remedies for childhood fever diseases and pediatric conditions.',
    't9-name': 'Rheumatic Diseases',
    't9-desc': 'Treatment for vata-related rheumatic conditions using time-tested traditional medicine.',
    't10-name': 'Cancer Support',
    't10-desc': 'Complementary Ayurvedic care and support treatment for cancer patients.',
    't11-name': 'Mumps & Infections',
    't11-desc': 'Traditional treatment for mumps and infectious diseases using Hela Wedakama.',
    't12-name': 'General Wellness',
    't12-desc': 'Comprehensive care for all systemic diseases and full-body wellness restoration.',

    'read-more': 'Read More',

    // Doctor
    'doc-eyebrow': 'Our Doctor',
    'doc-title': 'Dr. Mangalika Rajasekara',
    'doc-specialty': 'Traditional Ayurveda Physician · Justice of the Peace',
    'doc-bio': 'Dr. Mangalika Rajasekara is a licensed and registered traditional Ayurveda practitioner based in Ampitiya, Kandy. Carrying on the ancient traditions of Hela Wedakama — Sri Lanka\'s indigenous healing system — she specialises in treating chronic diseases through the use of traditional plant-based medicines, dietary guidance, and spiritual healing practices.',
    'doc-bio2': 'With deep-rooted expertise in classical Ayurveda and the indigenous Sri Lankan system of Shanthi Wedakama, Dr. Rajasekara provides holistic care that addresses the mind, body, and soul.',
    'doc-spec-label': 'Areas of Specialisation',
    'doc-s1': 'Hela Wedakama — Traditional Sri Lankan Medicine',
    'doc-s2': 'Shanthi Wedakama — Spiritual Healing',
    'doc-s3': 'Chronic Disease Management',
    'doc-s4': 'Paediatric Ayurvedic Care',
    'doc-s5': 'Herbal Formulation & Preparation',
    'doc-years-num': '20+',
    'doc-years-text': 'Years of Healing',

    // Packages
    'pkg-eyebrow': 'Our Services',
    'pkg-title': 'Ayurveda Treatment Packages',
    'pkg-desc': 'Each programme is tailored after a personal consultation with Dr. Mangalika Rajasekara to ensure the most effective healing journey for you.',
    'pkg1-label': 'Short Programme',
    'pkg1-title': '7-Day Retreat',
    'pkg1-sub': 'Initial healing & detox',
    'pkg2-label': 'Standard Programme',
    'pkg2-title': '14-Day Retreat',
    'pkg2-sub': 'Comprehensive healing',
    'pkg3-label': 'Most Popular',
    'pkg3-title': '21-Day Retreat',
    'pkg3-sub': 'Deep treatment programme',
    'pkg4-label': 'Intensive Programme',
    'pkg4-title': '28-Day Retreat',
    'pkg4-sub': 'Complete transformation',
    'inc-label': 'Inclusions',
    'inc1': 'Doctor consultation',
    'inc2': 'Personalised herbal medicine',
    'inc3': '24-hour doctor care',
    'inc4': 'Daily yoga & meditation',
    'inc5': 'Traditional Shanthi rituals',
    'inc6': 'Follow-up consultations',

    // Gallery
    'gal-eyebrow': 'Our Gallery',
    'gal-title': 'Moments of Healing & Serenity',

    // Testimonials
    'test-eyebrow': 'Patient Stories',
    'test-title': 'What Our Patients Say',
    'test1-text': 'After suffering from severe arthritis for years, Dr. Mangalika\'s traditional treatments brought me relief within three weeks. I am truly grateful for this ancient healing.',
    'test1-name': 'Priya Perera',
    'test1-loc': 'Colombo, Sri Lanka',
    'test2-text': 'The Shanthi Wedakama treatments here are unlike anything else. My blood pressure is now under control and I feel 20 years younger. Truly miraculous healing.',
    'test2-name': 'Kumar Ratnayake',
    'test2-loc': 'Kandy, Sri Lanka',
    'test3-text': 'My daughter had been suffering from sinusitis for months. After two weeks of the herbal treatments, she was completely cured. Dr. Rajasekara is a true healer.',
    'test3-name': 'Rukmani Fonseka',
    'test3-loc': 'Ampitiya, Kandy',

    // Contact
    'contact-eyebrow': 'Find Us',
    'contact-title': 'Visit Our Clinic',
    'ci1-label': 'Address',
    'ci1-value': 'Shanthi Weda Madura, No 225, Galthanna Road, Kanda, Ampitiya, Kandy, Sri Lanka',
    'ci2-label': 'Phone Numbers',
    'ci2-value': '+94 70 514 2900\n+94 71 578 1269\n+94 77 531 2419',
    'ci3-label': 'Open Hours',
    'ci3-value': 'Monday – Saturday\n8:00 AM – 4:30 PM',
    'map-label': 'Shanthi Weda Madura, No 225, Galthanna Road, Ampitiya, Kandy',

    // Footer
    'footer-desc': 'My Dear Skin (Pvt) Ltd provides traditional Sri Lankan Ayurveda healing rooted in the ancient Hela Wedakama and Shanthi Wedakama traditions, Ampitiya, Kandy.',
    'footer-links-title': 'Quick Links',
    'footer-contact-title': 'Contact Details',
    'footer-copy': '© 2026 My Dear Skin (Pvt) Ltd. All Rights Reserved. Reg No: PV00313811',
    'footer-jp': 'Justice of the Peace · Reg No: 16351',
  },

  si: {
    'banner-text': 'ශාන්ති වෙදකම — ශ්‍රී ලංකාවේ පාරම්පරික ආයුර්වේද ප්‍රතිකාර',
    'nav-home': 'මුල් පිටුව',
    'nav-about': 'අප ගැන',
    'nav-doctor': 'අපේ වෛද්‍ය',
    'nav-treatments': 'ප්‍රතිකාර',
    'nav-packages': 'පැකේජ',
    'nav-gallery': 'ගැලරිය',
    'nav-testimonials': 'අත්දැකීම්',
    'nav-contact': 'අප අමතන්න',
    'book-now': 'දැන් වෙන් කරන්න',
    'menu-label': 'මෙනුව',
    'hero-eyebrow': 'ආධිත්‍ය ආයුර්වේද · අම්පිටිය · මහනුවර',
    'hero-title': 'පාරම්පරික ආයුර්වේදයේ අදිසිය සොයා ගන්න',
    'hero-subtitle': 'ශ්‍රී ලාංකික ක්‍රමයෙන් සුවය',
    'hero-desc': 'හේල වෙදකමේ පුරාණ ප්‍රඥාව මහනුවරේ හදවතේදී අත් විඳින්න. අපි රෝගයේ මූලය ප්‍රතිකාර කරමු.',
    'hero-cta': '▶ තව දැනගන්න',
    'scroll-text': 'පහළට',
    'cred-reg': 'ලියාපදිංචි අංකය: PV00313811',
    'cred-jp': 'සාමාධිකරණය · ලියාපදිංචි: 16351',
    'cred-gen': 'ජනල ලියාපදිංචිය: s_R*010SFSUNFO',
    'cred-loc': 'ලියාපදිංචිය: 08/12/kP/kd/107',
    'about-eyebrow': 'අප ගැන',
    'about-title': 'මහනුවරේ හදවතේ පාරම්පරික ආයුර්වේදය',
    'about-desc': 'මයි ඩියර් ස්කින් (පුද්.) සමාගම, අම්පිටිය, මහනුවරේ කොළ කඳු මැද පිහිටි ලියාපදිංචි ආයුර්වේද සෞඛ්‍ය මධ්‍යස්ථානයකි. සාමාධිකාර සහ බලපත්‍ර ලාභී ආයුර්වේද වෛද්‍ය ඩා. මංගලිකා රාජසේකර විසින් ස්ථාපිත, අපගේ ප්‍රතිකාරය හේල වෙදකම ලෙස හඳුන්වනු ලබන සියවස් ගණනාවක් පැරණි ශ්‍රී ලාංකික සුවකිරීමේ සම්ප්‍රදායන් මත පදනම් ය.',
    'about-badge': 'ලියාපදිංචි ආයුර්වේද\nසෞඛ්‍ය මධ්‍යස්ථානය',
    'hl1-title': 'ශ්‍රී ලාංකික පාරම්පරිකත්වය',
    'hl1-sub': 'සියවස් ගණනාවක ආයුර්වේද ප්‍රඥාව',
    'hl2-title': 'බලපත්‍ර ලාභී වෛද්‍යවරු',
    'hl2-sub': 'සාමාධිකරණ සහතිත ආයුර්වේද',
    'hl3-title': 'ස්වාභාවික ඖෂධ',
    'hl3-sub': 'පිරිසිදු ශාකමූල ප්‍රතිකාර',
    'hl4-title': 'සියළු රෝග ප්‍රතිකාර',
    'hl4-sub': 'රෝගයේ මූලය ප්‍රතිකාර',
    'treat-eyebrow': 'ප්‍රතිකාර',
    'treat-title': 'අපි ප්‍රතිකාර කරන රෝග',
    'treat-desc': 'පාරම්පරික හේල වෙදකම ශාකමූල ඖෂධ භාවිතයෙන් තීව්‍ර හා සෘජු රෝග රාශියකට ප්‍රතිකාර කරමු.',
    't1-name': 'ආතරයිටිස් හා සන්ධි රෝග',
    't1-desc': 'ශාකමූල තෙල් හා ප්‍රතිකාර මගින් ආතරයිටිස්, කාටිලේජ් ක්ෂය, නිදන්ගත සන්ධි වේදනාවට ස්වාභාවික සහනයක්.',
    't2-name': 'හෘද හා රුධිර පීඩනය',
    't2-desc': 'අධි රුධිර පීඩනය, මේද හෘදය, කොලෙස්ටරෝල් කළමනාකරණය සඳහා පාරම්පරික ප්‍රතිකාර.',
    't3-name': 'ගැස්ට්‍රයිටිස් හා ජීර්ණය',
    't3-desc': 'ගැස්ට්‍රයිටිස්, අම්ලිත්ත සහ සියළු ජීර්ණ ආකූලතා සඳහා ඵලදායී ආයුර්වේද ප්‍රතිකාර.',
    't4-name': 'අංශභාග හා ස්නායු රෝග',
    't4-desc': 'අංශභාග, ස්නායු රෝග සඳහා විශේෂිත පාරම්පරික ප්‍රතිකාර.',
    't5-name': 'පිනස හා ශ්වාසය',
    't5-desc': 'ශාකමූල චිකිත්සා මගින් නිදන්ගත පිනස, සෙම සහ ශ්වාසාකූලතා සහනය.',
    't6-name': 'හිස කැක්කුම',
    't6-desc': 'නිදන්ගත හිස කැක්කුම සහනය සඳහා පාරම්පරික හිස ප්‍රතිකාර.',
    't7-name': 'දියවැඩියා කළමනාකරණය',
    't7-desc': 'රුධිර සීනි මට්ටම කළමනාකරණය සඳහා ආයුර්වේද සමස්ත ප්‍රවේශය.',
    't8-name': 'ළදරු රෝග',
    't8-desc': 'ළදරු රත රෝග හා ළමා රෝග සඳහා මෘදු පාරම්පරික ප්‍රතිකාර.',
    't9-name': 'වාත රෝග',
    't9-desc': 'සාම්ප්‍රදායික ඖෂධ භාවිතයෙන් වාත සම්බන්ධ රෝමාටික රෝග ප්‍රතිකාර.',
    't10-name': 'පිළිකා සහාය',
    't10-desc': 'පිළිකා රෝගීන් සඳහා අනුපූරක ආයුර්වේද ප්‍රතිකාර.',
    't11-name': 'මූනු ගල් හා ආසාදන',
    't11-desc': 'හේල වෙදකම භාවිතයෙන් මූනු ගල් හා ආසාදන ප්‍රතිකාර.',
    't12-name': 'සාමාන්‍ය සෞඛ්‍යය',
    't12-desc': 'සියළු සද්ශ්‍ය රෝග සහ සම්පූර්ණ ශරීර සෞඛ්‍ය සුවය සඳහා.',
    'read-more': 'තව කියවන්න',
    'doc-eyebrow': 'අපේ වෛද්‍ය',
    'doc-title': 'ඩා. මංගලිකා රාජසේකර',
    'doc-specialty': 'පාරම්පරික ආයුර්වේද වෛද්‍ය · සාමාධිකරණ',
    'doc-bio': 'ඩා. මංගලිකා රාජසේකර, අම්පිටිය, මහනුවරේ පදනම් ගත් බලපත්‍ර ලාභී ලියාපදිංචි ආයුර්වේද ප්‍රාතිකා ජ්‍ය ය. ශ්‍රී ලංකාවේ ආදිවාසී සෞඛ්‍ය ක්‍රමය වන හේල වෙදකමේ පුරාණ සම්ප්‍රදායන් දිගටම කරගෙන යනමින්, ශාකමූල ඖෂධ, ආහාර මාර්ගෝපදේශ සහ ආධ්‍යාත්මික සෞඛ්‍ය ක්‍රම ඔස්සේ නිදන්ගත රෝග ප්‍රතිකාර කිරීමේ විශේෂඥකාරිණියකි.',
    'doc-bio2': 'සාම්ප්‍රදායික ආයුර්වේදය හා ශ්‍රී ලාංකා ශාන්ති වෙදකමේ ගැඹුරු දැනුම සහිතව, ඩා. රාජසේකරා මනස, ශරීරය සහ ආත්මය ආමන්ත්‍රණය කරන සමස්ත ආරක්ෂාව සපයයි.',
    'doc-spec-label': 'විශේෂතා ක්ෂේත්‍ර',
    'doc-s1': 'හේල වෙදකම — ශ්‍රී ලාංකා පාරම්පරික ඖෂධ',
    'doc-s2': 'ශාන්ති වෙදකම — ආධ්‍යාත්මික සෞඛ්‍යය',
    'doc-s3': 'නිදන්ගත රෝග කළමනාකරණය',
    'doc-s4': 'ළමා ආයුර්වේද ප්‍රතිකාර',
    'doc-s5': 'ශාකමූල සූත්‍ර සකස් කිරීම',
    'doc-years-num': '20+',
    'doc-years-text': 'සෞඛ්‍ය ප්‍රතිකාර වර්ෂ',
    'pkg-eyebrow': 'සේවා',
    'pkg-title': 'ආයුර්වේද ප්‍රතිකාර පැකේජ',
    'pkg-desc': 'සෑම වැඩසටහනක්ම ඩා. මංගලිකා රාජසේකර සමඟ පෞද්ගලික සාකච්ඡාවකින් පසු ඔබ සඳහා අභිරුචි කෙරේ.',
    'pkg1-label': 'කෙටි වැඩසටහන',
    'pkg1-title': 'දින 7 ප්‍රතිකාරය',
    'pkg1-sub': 'මූලික සෞඛ්‍ය',
    'pkg2-label': 'සාමාන්‍ය වැඩසටහන',
    'pkg2-title': 'දින 14 ප්‍රතිකාරය',
    'pkg2-sub': 'සවිස්තරාත්මක සෞඛ්‍ය',
    'pkg3-label': 'ජනප්‍රිය',
    'pkg3-title': 'දින 21 ප්‍රතිකාරය',
    'pkg3-sub': 'ගැඹුරු ප්‍රතිකාරය',
    'pkg4-label': 'දිගු වැඩසටහන',
    'pkg4-title': 'දින 28 ප්‍රතිකාරය',
    'pkg4-sub': 'සම්පූර්ණ ප්‍රතිෂ්ඨාපනය',
    'inc-label': 'ඇතුළත්',
    'inc1': 'වෛද්‍ය නිමිතිය',
    'inc2': 'පෞද්ගලිකීකෘත ශාකමූල ඖෂධ',
    'inc3': 'පැය 24 වෛද්‍ය ආරක්ෂාව',
    'inc4': 'දිනපතා යෝගා හා භාවනා',
    'inc5': 'ශාන්ති ආගමික චාරිත්‍ර',
    'inc6': 'පසු විෂ්කම්භ සාකච්ඡා',
    'gal-eyebrow': 'අපේ ගැලරිය',
    'gal-title': 'සෞඛ්‍ය ලාභ හා සන්සිඳිලිවල මොහොතකින්',
    'test-eyebrow': 'රෝගි කතා',
    'test-title': 'අපේ රෝගීන් කියන දේ',
    'test1-text': 'අවුරුදු ගණනාවක් ආතරයිටිස් රෝගයෙන් පීඩා විඳ, ඩා. මංගලිකාගේ පාරම්පරික ප්‍රතිකාර සතිතුනක් ඇතුළත සහනය ගෙන ආවා. සසළ ශාන්ත සෞඛ්‍යයට ස්තූතිවන්ත ය.',
    'test1-name': 'ප්‍රිය පෙරේරා',
    'test1-loc': 'කොළඹ, ශ්‍රී ලංකාව',
    'test2-text': 'ශාන්ති වෙදකම ප්‍රතිකාර ඕනෑම දෙයකට ස්ව දෙශීය ය. රුධිර පීඩනය දැන් සාමාන්‍ය ය, ජීවිතයේ 20 වසරක් ගෙවා දැමීමක් ලෙස සිතෙයි.',
    'test2-name': 'කුමාර රත්නායක',
    'test2-loc': 'මහනුවර, ශ්‍රී ලංකාව',
    'test3-text': 'මාස ගණනාවක් පිනස රෝගයෙන් සිටි මගේ දියණිය, සතිදෙකකින් ශාකමූල ප්‍රතිකාරයෙන් සම්පූර්ණයෙන් සුවයා. ඩා. රාජසේකරා ඇත්ත ශාන්ත සෞඛ්‍ය ෙ෫ෙ ය.',
    'test3-name': 'රුක්මිනී ෆොන්සේකා',
    'test3-loc': 'අම්පිටිය, මහනුවර',
    'contact-eyebrow': 'අප හමුවන්න',
    'contact-title': 'ක්ලිනික් අමතන්න',
    'ci1-label': 'ලිපිනය',
    'ci1-value': 'ශාන්ති වෙද මැදුර, අංක 225, ගල්තන්න පාර, කන්ද, අම්පිටිය, මහනුවර, ශ්‍රී ලංකාව',
    'ci2-label': 'දූරකතන අංක',
    'ci2-value': '+94 70 514 2900\n+94 71 578 1269\n+94 77 531 2419',
    'ci3-label': 'විවෘත වේලාවන්',
    'ci3-value': 'සඳුදා – සෙනසුරාදා\nපෙ.ව. 8:00 – ප.ව. 4:30',
    'map-label': 'ශාන්ති වෙද මැදුර, අංක 225, ගල්තන්න පාර, අම්පිටිය, මහනුවර',
    'footer-desc': 'මයි ඩියර් ස්කින් (පුද්.) සමාගම අම්පිටිය, මහනුවරේදී හේල වෙදකම සහ ශාන්ති වෙදකම සම්ප්‍රදායන් මත පදනම් ශ්‍රී ලාංකා ආයුර්වේද ප්‍රතිකාර සපයයි.',
    'footer-links-title': 'ශීඝ්‍ර සබැඳි',
    'footer-contact-title': 'සම්බන්ධ විස්තර',
    'footer-copy': '© 2026 මයි ඩියර් ස්කින් (පුද්.) සමාගම. සියළු හිමිකම් ඇවිරිණි.',
    'footer-jp': 'සාමාධිකරණ · ලියාපදිංචි: 16351',
  },

  ta: {
    'banner-text': 'சாந்தி வெதகம — பாரம்பரிய இலங்கை ஆயுர்வேத சிகிச்சை',
    'nav-home': 'முகப்பு',
    'nav-about': 'எங்களைப் பற்றி',
    'nav-doctor': 'எங்கள் மருத்துவர்',
    'nav-treatments': 'சிகிச்சைகள்',
    'nav-packages': 'தொகுப்புகள்',
    'nav-gallery': 'கேலரி',
    'nav-testimonials': 'அனுபவங்கள்',
    'nav-contact': 'தொடர்பு கொள்ளுங்கள்',
    'book-now': 'இப்போது பதிவு செய்யுங்கள்',
    'menu-label': 'மெனு',
    'hero-eyebrow': 'ஆதித்ய ஆயுர்வேதம் · அம்பிட்டிய · கண்டி',
    'hero-title': 'பாரம்பரிய ஆயுர்வேதத்தின் அற்புதங்களை கண்டுபிடியுங்கள்',
    'hero-subtitle': 'இலங்கை முறையில் குணமடைதல்',
    'hero-desc': 'கண்டியின் இதயத்தில் ஹேல வெதகமாவின் பண்டைய ஞானத்தை அனுபவியுங்கள். நாங்கள் அறிகுறியை மட்டுமல்ல, வேரை குணப்படுத்துகிறோம்.',
    'hero-cta': '▶ மேலும் அறிக',
    'scroll-text': 'கீழே',
    'cred-reg': 'பதிவு எண்: PV00313811',
    'cred-jp': 'நடுவர் · பதிவு: 16351',
    'cred-gen': 'பொது பதிவு: s_R*010SFSUNFO',
    'cred-loc': 'பதிவு: 08/12/kP/kd/107',
    'about-eyebrow': 'எங்களைப் பற்றி',
    'about-title': 'கண்டியின் இதயத்தில் பாரம்பரிய ஆயுர்வேதம்',
    'about-desc': 'மை டியர் ஸ்கின் (பி.வி.டி) லிமிடெட் என்பது அம்பிட்டிய, கண்டியின் பச்சை மலைகளில் அமைந்த பதிவு செய்யப்பட்ட ஆயுர்வேத நலன்புரி மையம். நடுவர் மற்றும் உரிமம் பெற்ற ஆயுர்வேத மருத்துவர் டாக்டர் மங்களிகா ராஜசேக்கர நிறுவியது. எங்கள் சிகிச்சை ஹேல வெதகம எனப்படும் நூற்றாண்டுகள் பழமையான இலங்கை குணப்படுத்தும் மரபுகளில் வேரூன்றியது.',
    'about-badge': 'பதிவு செய்யப்பட்ட ஆயுர்வேத\nநலன்புரி மையம்',
    'hl1-title': 'இலங்கை பண்டைய மரபு',
    'hl1-sub': 'நூற்றாண்டுகளின் ஞானம்',
    'hl2-title': 'உரிமம் பெற்ற மருத்துவர்கள்',
    'hl2-sub': 'நடுவர் சான்றளிக்கப்பட்டவர்',
    'hl3-title': 'இயற்கை மூலிகை மருந்து',
    'hl3-sub': 'தாவர அடிப்படையிலான சிகிச்சை',
    'hl4-title': 'அனைத்து நோய்களும் சிகிச்சை',
    'hl4-sub': 'வேர்-காரண குணப்படுத்தல்',
    'treat-eyebrow': 'எங்கள் சிகிச்சைகள்',
    'treat-title': 'நாங்கள் சிகிச்சையளிக்கும் நோய்கள்',
    'treat-desc': 'பாரம்பரிய ஹேல வெதகம தாவர மருந்துகளைப் பயன்படுத்தி பரந்த அளவிலான நாட்பட்ட மற்றும் கடுமையான நிலைகளுக்கு சிகிச்சை அளிக்கிறோம்.',
    't1-name': 'மூட்டு வாதம் & மூட்டு பராமரிப்பு',
    't1-desc': 'மூலிகை எண்ணெய் மற்றும் சிகிச்சை மூலம் ஆர்த்ரைட்டிஸ், குருத்தெலும்பு அழிவு மற்றும் நாட்பட்ட மூட்டு வலிக்கு இயற்கை நிவாரணம்.',
    't2-name': 'இதய & ரத்த அழுத்தம்',
    't2-desc': 'உயர் இரத்த அழுத்தம், கொழுப்பு இதயம், கொலஸ்ட்ரால் மேலாண்மைக்கு பாரம்பரிய சிகிச்சை.',
    't3-name': 'இரைப்பை அழற்சி & செரிமானம்',
    't3-desc': 'இரைப்பை அழற்சி, அமிலத்தன்மை மற்றும் செரிமான கோளாறுகளுக்கு ஆயுர்வேத சிகிச்சை.',
    't4-name': 'பக்கவாதம் & நரம்பியல்',
    't4-desc': 'பக்கவாதம் மற்றும் நரம்பியல் நோய்களுக்கு சிறப்பு சிகிச்சை.',
    't5-name': 'சைனஸ் & சுவாசம்',
    't5-desc': 'மூலிகை சிகிச்சைகள் மூலம் சைனஸ், நாட்பட்ட இருமல் நிவாரணம்.',
    't6-name': 'தலைவலி & மைக்ரேன்',
    't6-desc': 'நாட்பட்ட தலைவலிக்கு பாரம்பரிய தலை சிகிச்சை.',
    't7-name': 'நீரிழிவு மேலாண்மை',
    't7-desc': 'இரத்த சர்க்கரை அளவை மேலாண்மை செய்ய ஆயுர்வேத முழுமை அணுகுமுறை.',
    't8-name': 'குழந்தை நோய்கள்',
    't8-desc': 'குழந்தை காய்ச்சல் நோய்களுக்கு மென்மையான பாரம்பரிய சிகிச்சை.',
    't9-name': 'வாத நோய்கள்',
    't9-desc': 'வாத தொடர்பான மூட்டு வலி நோய்களுக்கு பாரம்பரிய மருந்து சிகிச்சை.',
    't10-name': 'புற்றுநோய் ஆதரவு',
    't10-desc': 'புற்றுநோய் நோயாளிகளுக்கு துணை ஆயுர்வேத சிகிச்சை.',
    't11-name': 'காஞ்சாமாடு & தொற்றுகள்',
    't11-desc': 'ஹேல வெதகம மூலம் காஞ்சாமாடு மற்றும் தொற்று சிகிச்சை.',
    't12-name': 'பொது ஆரோக்கியம்',
    't12-desc': 'அனைத்து உடல் நோய்கள் மற்றும் முழு உடல் ஆரோக்கிய மறுசீரமைப்பு.',
    'read-more': 'மேலும் படிக்க',
    'doc-eyebrow': 'எங்கள் மருத்துவர்',
    'doc-title': 'டாக்டர் மங்களிகா ராஜசேக்கர',
    'doc-specialty': 'பாரம்பரிய ஆயுர்வேத மருத்துவர் · நடுவர்',
    'doc-bio': 'டாக்டர் மங்களிகா ராஜசேக்கர அம்பிட்டிய, கண்டியை தளமாகக் கொண்ட உரிமம் பெற்ற மற்றும் பதிவு செய்யப்பட்ட ஆயுர்வேத மருத்துவர். இலங்கையின் உள்நாட்டு குணப்படுத்தும் முறையான ஹேல வெதகமாவின் பண்டைய மரபுகளை தொடர்ந்து, தாவர மருந்துகள், உணவு வழிகாட்டுதல் மற்றும் ஆன்மீக குணப்படுத்தல் நடைமுறைகள் மூலம் நாட்பட்ட நோய்களை குணப்படுத்துவதில் நிபுணத்துவம் பெற்றவர்.',
    'doc-bio2': 'பாரம்பரிய ஆயுர்வேதம் மற்றும் இலங்கையின் சாந்தி வெதகமாவில் ஆழமான நிபுணத்துவத்துடன், டாக்டர் ராஜசேக்கர மனம், உடல் மற்றும் ஆன்மாவை உரையாற்றும் முழுமையான பராமரிப்பை வழங்குகிறார்.',
    'doc-spec-label': 'நிபுணத்துவ துறைகள்',
    'doc-s1': 'ஹேல வெதகம — இலங்கை பாரம்பரிய மருத்துவம்',
    'doc-s2': 'சாந்தி வெதகம — ஆன்மீக குணப்படுத்தல்',
    'doc-s3': 'நாட்பட்ட நோய் மேலாண்மை',
    'doc-s4': 'குழந்தை ஆயுர்வேத பராமரிப்பு',
    'doc-s5': 'மூலிகை மருந்து தயாரிப்பு',
    'doc-years-num': '20+',
    'doc-years-text': 'குணப்படுத்தல் ஆண்டுகள்',
    'pkg-eyebrow': 'எங்கள் சேவைகள்',
    'pkg-title': 'ஆயுர்வேத சிகிச்சை தொகுப்புகள்',
    'pkg-desc': 'ஒவ்வொரு திட்டமும் டாக்டர் மங்களிகா ராஜசேக்கரருடன் தனிப்பட்ட ஆலோசனைக்குப் பிறகு உங்களுக்காக தனிப்படுத்தப்படுகிறது.',
    'pkg1-label': 'குறு திட்டம்',
    'pkg1-title': '7 நாள் சிகிச்சை',
    'pkg1-sub': 'ஆரம்ப குணமடைதல்',
    'pkg2-label': 'நிலையான திட்டம்',
    'pkg2-title': '14 நாள் சிகிச்சை',
    'pkg2-sub': 'விரிவான குணமடைதல்',
    'pkg3-label': 'மிகவும் பிரபலமானது',
    'pkg3-title': '21 நாள் சிகிச்சை',
    'pkg3-sub': 'ஆழமான சிகிச்சை',
    'pkg4-label': 'தீவிர திட்டம்',
    'pkg4-title': '28 நாள் சிகிச்சை',
    'pkg4-sub': 'முழு மாற்றம்',
    'inc-label': 'உள்ளடக்கியது',
    'inc1': 'மருத்துவ ஆலோசனை',
    'inc2': 'தனிப்படுத்தப்பட்ட மூலிகை மருந்து',
    'inc3': '24 மணி நேர மருத்துவ பராமரிப்பு',
    'inc4': 'தினசரி யோகா & தியானம்',
    'inc5': 'சாந்தி பாரம்பரிய சடங்குகள்',
    'inc6': 'பின்தொடர் ஆலோசனைகள்',
    'gal-eyebrow': 'எங்கள் கேலரி',
    'gal-title': 'குணமடைதல் & அமைதியின் தருணங்கள்',
    'test-eyebrow': 'நோயாளி கதைகள்',
    'test-title': 'எங்கள் நோயாளிகள் என்ன கூறுகிறார்கள்',
    'test1-text': 'பல ஆண்டுகளாக கடுமையான ஆர்த்ரைட்டிஸால் பாதிக்கப்பட்ட பிறகு, டாக்டர் மங்களிகாவின் பாரம்பரிய சிகிச்சை மூன்று வாரங்களில் நிவாரணம் அளித்தது. நன்றியுடன் இருக்கிறேன்.',
    'test1-name': 'பிரியா பெரேரா',
    'test1-loc': 'கொழும்பு, இலங்கை',
    'test2-text': 'இங்கே சாந்தி வெதகம சிகிச்சைகள் தனிப்பட்டவை. என் இரத்த அழுத்தம் இப்போது கட்டுக்குள் உள்ளது, 20 வயது இளமையாக உணர்கிறேன். அற்புதமான குணப்படுத்தல்.',
    'test2-name': 'குமார் ரத்னாயக்கே',
    'test2-loc': 'கண்டி, இலங்கை',
    'test3-text': 'மாதக்கணக்கில் சைனஸால் பாதிக்கப்பட்ட என் மகள், இரண்டு வாரம் மூலிகை சிகிச்சையில் முழுமையாக குணமடைந்தாள். டாக்டர் ராஜசேக்கர உண்மையான வைத்தியர்.',
    'test3-name': 'ருக்மிணி ஃபொன்சேக்கா',
    'test3-loc': 'அம்பிட்டிய, கண்டி',
    'contact-eyebrow': 'எங்களை கண்டுபிடியுங்கள்',
    'contact-title': 'எங்கள் மருத்துவமனையை பார்வையிடுங்கள்',
    'ci1-label': 'முகவரி',
    'ci1-value': 'சாந்தி வெத மதுர, இல. 225, கல்தன்னா சாலை, கண்ட, அம்பிட்டிய, கண்டி, இலங்கை',
    'ci2-label': 'தொலைபேசி எண்கள்',
    'ci2-value': '+94 70 514 2900\n+94 71 578 1269\n+94 77 531 2419',
    'ci3-label': 'திறந்திருக்கும் நேரம்',
    'ci3-value': 'திங்கள் – சனி\nகாலை 8:00 – பிற்பகல் 4:30',
    'map-label': 'சாந்தி வெத மதுர, இல. 225, கல்தன்னா சாலை, அம்பிட்டிய, கண்டி',
    'footer-desc': 'மை டியர் ஸ்கின் (பி.வி.டி) லிமிடெட் அம்பிட்டிய, கண்டியில் ஹேல வெதகம மற்றும் சாந்தி வெதகம மரபுகளின் அடிப்படையில் இலங்கை ஆயுர்வேத சிகிச்சையை வழங்குகிறது.',
    'footer-links-title': 'விரைவு இணைப்புகள்',
    'footer-contact-title': 'தொடர்பு விவரங்கள்',
    'footer-copy': '© 2026 மை டியர் ஸ்கின் (பி.வி.டி) லிமிடெட். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    'footer-jp': 'நடுவர் · பதிவு: 16351',
  }
};

// ── Current Language ───────────────────────────
let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      // Handle multi-line text (use <br> or pre-line)
      if (t[key].includes('\n')) {
        el.innerHTML = t[key].replace(/\n/g, '<br>');
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  // Update lang buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  const htmlEl = document.documentElement;
  htmlEl.setAttribute('lang', lang);

  // Font adjustments for scripts
  const bodyFont = lang === 'si'
    ? "'Noto Sans Sinhala', 'Cormorant Garamond', serif"
    : lang === 'ta'
    ? "'Noto Sans Tamil', 'Cormorant Garamond', serif"
    : "'Inter', 'Cormorant Garamond', serif";
  document.body.style.fontFamily = bodyFont;

  localStorage.setItem('mds-lang', lang);
}

// ── Header Scroll Behaviour ────────────────────
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── Announcement Banner ────────────────────────
function initBanner() {
  const btn = document.getElementById('close-banner');
  const banner = document.getElementById('announcement-banner');
  if (!btn || !banner) return;
  btn.addEventListener('click', () => {
    banner.style.maxHeight = banner.offsetHeight + 'px';
    requestAnimationFrame(() => {
      banner.style.transition = 'max-height 0.4s ease, opacity 0.4s ease';
      banner.style.maxHeight = '0';
      banner.style.opacity = '0';
      banner.style.overflow = 'hidden';
    });
  });
}

// ── Slide-out Navigation ───────────────────────
function initNav() {
  const overlay   = document.getElementById('nav-overlay');
  const backdrop  = document.getElementById('nav-backdrop');
  const menuBtn   = document.getElementById('menu-btn');
  const closeBtn  = document.getElementById('close-nav');
  if (!overlay) return;

  const open  = () => overlay.classList.add('open');
  const close = () => overlay.classList.remove('open');

  menuBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);

  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// ── Language Switcher ──────────────────────────
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) applyLanguage(lang);
    });
  });
}

// ── Hero Parallax ──────────────────────────────
function initHeroParallax() {
  const hero = document.getElementById('hero');
  const bg   = hero?.querySelector('.hero-bg');
  if (!hero || !bg) return;

  setTimeout(() => hero.classList.add('loaded'), 100);

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      bg.style.transform = `scale(1) translateY(${scrolled * 0.25}px)`;
    }
  }, { passive: true });
}

// ── Scroll Reveal ──────────────────────────────
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ── Book Now Button ────────────────────────────
function initBookBtn() {
  const btn = document.getElementById('book-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'contact.html';
    }
  });
}

// ── Smooth internal links ──────────────────────
function initSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('nav-overlay')?.classList.remove('open');
      }
    });
  });
}

// ── Active Nav Link ────────────────────────────
function initActiveNavLink() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === 'index.html' && href === '#hero')) {
      link.classList.add('active');
    }
  });
}

// ── Init ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initBanner();
  initNav();
  initLangSwitcher();
  initHeroParallax();
  initScrollReveal();
  initBookBtn();
  initSmoothLinks();
  initActiveNavLink();

  // Restore saved language
  const saved = localStorage.getItem('mds-lang') || 'en';
  applyLanguage(saved);
});
