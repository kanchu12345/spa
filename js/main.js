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
    'pkg4-title': '28-Day Retreat',
    'pkg4-sub': 'Complete transformation',
    'pkg5-label': 'Specialized',
    'pkg5-title': 'Panchakarma Detox',
    'pkg5-sub': 'Total body purification',
    'pkg6-label': 'Relaxation',
    'pkg6-title': 'Mind Wellness',
    'pkg6-sub': 'Stress & anxiety relief',
    'pkg7-label': 'Lifestyle',
    'pkg7-title': 'Weight Management',
    'pkg7-sub': 'Natural fat reduction',
    'pkg8-label': 'Mother Care',
    'pkg8-title': 'Post-Natal Care',
    'pkg8-sub': 'Recovery and strength',
    'pkg1-desc': 'A gentle introduction to Ayurvedic healing. This 7-day program focuses on initial detoxification and restoring basic dosha balance through mild herbal therapies and dietary adjustments.',
    'pkg2-desc': 'Our comprehensive 14-day retreat goes deeper into cellular cleansing. It includes specialized oil therapies and Shirodhara to remove deep-rooted toxins and rejuvenate the body.',
    'pkg3-desc': 'The ideal duration for a complete Ayurvedic reset. This 21-day program allows enough time for the body to fully detoxify and rebuild its natural immunity and vitality.',
    'pkg4-desc': 'A profound transformational journey. Over 28 days, this intensive program addresses chronic conditions, offering deep healing and a complete reset of the mind, body, and spirit.',
    'pkg5-desc': 'An authentic Panchakarma experience designed to eliminate toxins from the deepest tissues. This highly specialized program involves rigorous cleansing therapies and a strict dietary regimen.',
    'pkg6-desc': 'Specially curated to combat modern stress, anxiety, and insomnia. This program uses soothing therapies like Shirodhara, gentle massages, and meditation to calm the nervous system.',
    'pkg7-desc': 'A holistic approach to weight loss. We combine metabolism-boosting herbal medicines, Udwarthana (herbal powder massage), and personalized diets to promote natural, sustainable fat reduction.',
    'pkg8-desc': 'Dedicated care for new mothers to regain strength and vitality. This nurturing program includes gentle restorative massages, lactation support, and specialized herbal tonics.',
    'more-details': 'More Details',
    'less-details': 'Less Details',
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
    'test4-text': "I had chronic gastritis for 5 years. Allopathic medicine gave temporary relief, but Dr. Mangalika's herbal decoctions cured me from the root. Highly recommended!",
    'test4-name': 'Nimal Fernando',
    'test4-loc': 'Matale, Sri Lanka',
    'test5-text': "My mother suffered from partial paralysis after a stroke. The specialized oils and nerve treatments here brought her mobility back. A true miracle.",
    'test5-name': 'Sujani Silva',
    'test5-loc': 'Kurunegala, Sri Lanka',
    'test6-text': "I came here for diabetes management. After a 14-day retreat, my blood sugar levels dropped significantly, and I feel energetic again.",
    'test6-name': 'David Thompson',
    'test6-loc': 'London, UK',
    'test7-text': "The Shanthi Wedakama rituals combined with the medicine brought me so much peace of mind during my battle with depression and anxiety.",
    'test7-name': 'Anoma Jayasinghe',
    'test7-loc': 'Colombo, Sri Lanka',
    'test8-text': "My son had severe eczema. After trying dozens of creams, the natural blood-purifying medicine from My Dear Skin cleared his skin completely.",
    'test8-name': 'Ruwan Ekanayake',
    'test8-loc': 'Kandy, Sri Lanka',
    'test9-text': "I was scheduled for knee replacement surgery, but decided to try Ayurveda first. After 21 days here, I can walk without pain. Simply amazing.",
    'test9-name': 'Shirley Pereira',
    'test9-loc': 'Negombo, Sri Lanka',
    'test10-text': "The traditional head treatments completely cured my chronic migraines. I haven't had a headache in six months!",
    'test10-name': 'Mohammed Nazeer',
    'test10-loc': 'Gampola, Sri Lanka',
    'test11-text': "I brought my infant who was suffering from a stubborn pediatric fever. The gentle traditional remedies worked within days with no side effects.",
    'test11-name': 'Kamani Perera',
    'test11-loc': 'Peradeniya, Sri Lanka',
    'test12-text': "After years of suffering from kidney stones, the traditional diuretic herbal formulas cleared them naturally without surgery. I am forever grateful.",
    'test12-name': 'Sunil Bandara',
    'test12-loc': 'Kegalle, Sri Lanka',
    'test13-text': "The 28-day intensive program was a life-changing detox. I lost weight, my digestion improved, and my mind is incredibly clear.",
    'test13-name': 'Sarah Jenkins',
    'test13-loc': 'Sydney, Australia',
    'test14-text': "I had chronic asthma and respiratory issues. The herbal therapies and traditional steam treatments here gave me my breath back.",
    'test14-name': 'Nilantha Dissanayake',
    'test14-loc': 'Nuwara Eliya, Sri Lanka',
    'test15-text': "Diagnosed with early-stage fatty liver, I took Dr. Rajasekara's 14-day program. My recent scan showed my liver is back to normal!",
    'test15-name': 'Chandani Wijesuriya',
    'test15-loc': 'Kandy, Sri Lanka',
    'test16-text': "The care and attention given by the team is unmatched. It’s not just a clinic; it's a sanctuary for holistic healing.",
    'test16-name': 'Rajiv Senanayake',
    'test16-loc': 'Colombo, Sri Lanka',
    'test17-text': "I suffered from severe sciatica pain that kept me awake at night. The traditional Hela Wedakama treatments brought me immense relief.",
    'test17-name': 'Nalini de Silva',
    'test17-loc': 'Galle, Sri Lanka',
    'test18-text': "My cholesterol levels were dangerously high. Three months of following the doctor's herbal medicine and dietary advice, and I am completely healthy.",
    'test18-name': 'Upali Karunaratne',
    'test18-loc': 'Kandy, Sri Lanka',
    'test19-text': "We came for complementary cancer support treatments. The therapies strengthened my body and drastically reduced the side effects of chemotherapy.",
    'test19-name': 'Malkanthi Peiris',
    'test19-loc': 'Panadura, Sri Lanka',
    'test20-text': "An authentic, peaceful, and genuinely healing environment. The traditional Shanthi Wedakama rituals are profoundly moving and effective.",
    'test20-name': 'Helena Rossi',
    'test20-loc': 'Rome, Italy',

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
    'pkg5-label': 'විශේෂිත',
    'pkg5-title': 'පංචකර්ම විෂහරණය',
    'pkg5-sub': 'සම්පූර්ණ ශරීර පවිත්‍රීකරණය',
    'pkg6-label': 'සන්සුන්බව',
    'pkg6-title': 'මානසික සුවය',
    'pkg6-sub': 'ආතතිය සහ කාංසාව සහනය',
    'pkg7-label': 'ජීවන රටාව',
    'pkg7-title': 'බර කළමනාකරණය',
    'pkg7-sub': 'ස්වාභාවික මේද අවම කිරීම',
    'pkg8-label': 'මාතෘ සත්කාරය',
    'pkg8-title': 'ප්‍රසූතියෙන් පසු සත්කාරය',
    'pkg8-sub': 'සුවය සහ ශක්තිය',
    'pkg1-desc': 'ආයුර්වේද සුවකිරීම සඳහා මෘදු හැඳින්වීමක්. මෙම දින 7ක වැඩසටහන මූලික විෂහරණය සහ මෘදු ශාකමූල චිකිත්සා හරහා දෝෂ සමතුලිතතාවය යථා තත්ත්වයට පත් කිරීම කෙරෙහි අවධානය යොමු කරයි.',
    'pkg2-desc': 'අපගේ සවිස්තරාත්මක දින 14ක වැඩසටහන සෛලීය පවිත්‍රීකරණය ගැඹුරට ගෙන යයි. ගැඹුරින් මුල් බැසගත් විෂ ඉවත් කිරීමට විශේෂිත තෙල් චිකිත්සා සහ ශිරෝධාරා මෙයට ඇතුළත් වේ.',
    'pkg3-desc': 'සම්පූර්ණ ආයුර්වේද යථා තත්ත්වයට පත් කිරීමක් සඳහා වඩාත් සුදුසු කාලසීමාවයි. මෙම දින 21ක වැඩසටහන ශරීරයට සම්පූර්ණයෙන්ම විෂ හරණය වීමට සහ ස්වාභාවික ප්‍රතිශක්තිය ගොඩනැගීමට ප්‍රමාණවත් කාලයක් ලබා දෙයි.',
    'pkg4-desc': 'ගැඹුරු පරිවර්තනීය ගමනක්. දින 28ක් පුරා, මෙම තීව්‍ර වැඩසටහන නිදන්ගත තත්වයන් ආමන්ත්‍රණය කරමින්, මනස, ශරීරය සහ ආත්මය සම්පූර්ණයෙන්ම යථා තත්ත්වයට පත් කරයි.',
    'pkg5-desc': 'ගැඹුරුතම පටක වලින් විෂ ඉවත් කිරීම සඳහා නිර්මාණය කරන ලද අව්‍යාජ පංචකර්ම අත්දැකීමකි. මෙම විශේෂිත වැඩසටහනට දැඩි පවිත්‍ර කිරීමේ ප්‍රතිකාර සහ දැඩි ආහාර වේලක් ඇතුළත් වේ.',
    'pkg6-desc': 'නවීන ආතතිය, කාංසාව සහ නින්ද නොයාම සඳහා විශේෂයෙන් සකස් කර ඇත. මෙම වැඩසටහන ස්නායු පද්ධතිය සන්සුන් කිරීම සඳහා ශිරෝධාරා, මෘදු සම්බාහන සහ භාවනාව භාවිතා කරයි.',
    'pkg7-desc': 'බර අඩු කර ගැනීම සඳහා සමස්ත ප්‍රවේශයකි. පරිවෘත්තීය වේගවත් කරන ඖෂධ, උද්වර්තන (ශාකමූල කුඩු සම්බාහනය) සහ අභිරුචි ආහාර වේල් අපි ඒකාබද්ධ කරමු.',
    'pkg8-desc': 'නව මව්වරුන් සඳහා ශක්තිය සහ ජීවය නැවත ලබා ගැනීමට කැප වූ සත්කාරයකි. මෙම පෝෂණීය වැඩසටහනට මෘදු සම්බාහන, මව්කිරි දීමේ සහාය සහ විශේෂිත ඖෂධ ඇතුළත් වේ.',
    'more-details': 'වැඩි විස්තර',
    'less-details': 'අඩු විස්තර',
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
    'test4-text': "වසර 5ක් පුරා ගැස්ට්‍රයිටිස් රෝගයෙන් පීඩා වින්දා. බටහිර වෛද්‍ය විද්‍යාවෙන් ලැබුණේ තාවකාලික සහනයක් පමණයි, නමුත් ඩා. මංගලිකාගේ ශාකමූල කෂාය මා මූලිකවම සුව කළා. ඉතාමත් අගය කරනවා!",
    'test4-name': 'නිමල් ප්‍රනාන්දු',
    'test4-loc': 'මාතලේ, ශ්‍රී ලංකාව',
    'test5-text': "ආඝාතයකින් පසු මගේ මව අර්ධ අංශභාගයෙන් පීඩා වින්දා. මෙහි විශේෂිත තෙල් සහ ස්නායු ප්‍රතිකාර ඇයට යළිත් ඇවිදීමේ හැකියාව ලබා දුන්නා. මෙය සැබෑ ආශ්චර්යයක්.",
    'test5-name': 'සුජානි සිල්වා',
    'test5-loc': 'කුරුණෑගල, ශ්‍රී ලංකාව',
    'test6-text': "මම මෙහි පැමිණියේ දියවැඩියා කළමනාකරණයටයි. දින 14ක ප්‍රතිකාරයෙන් පසු, මගේ රුධිර සීනි මට්ටම සැලකිය යුතු ලෙස අඩු වී ඇති අතර, මට යළිත් ජවයක් දැනෙනවා.",
    'test6-name': 'ඩේවිඩ් තොම්සන්',
    'test6-loc': 'ලන්ඩනය, එක්සත් රාජධානිය',
    'test7-text': "ඖෂධ සමඟ එක් වූ ශාන්ති වෙදකමේ චාරිත්‍ර, මාගේ විෂාදය සහ කාංසාව අතරතුර මට විශාල මානසික සැනසීමක් ගෙන ආවා.",
    'test7-name': 'අනෝමා ජයසිංහ',
    'test7-loc': 'කොළඹ, ශ්‍රී ලංකාව',
    'test8-text': "මගේ පුතාට දරුණු දද රෝගයක් තිබුණා. ආලේපන දුසිම් ගණනක් උත්සාහ කිරීමෙන් පසු, මයි ඩියර් ස්කින් හි ස්වාභාවික රුධිර-පිරිසිදු කිරීමේ ඖෂධ ඔහුගේ සම සම්පූර්ණයෙන්ම පැහැදිලි කළා.",
    'test8-name': 'රුවන් ඒකනායක',
    'test8-loc': 'මහනුවර, ශ්‍රී ලංකාව',
    'test9-text': "මට දණහිස් සැත්කමක් කිරීමට නියමිතව තිබුණා, නමුත් පළමුව ආයුර්වේදය උත්සාහ කිරීමට තීරණය කළා. දින 21කට පසු, මට වේදනාවකින් තොරව ඇවිදින්න පුළුවන්. හුදෙක් විස්මිතයි.",
    'test9-name': 'ෂර්ලි පෙරේරා',
    'test9-loc': 'මීගමුව, ශ්‍රී ලංකාව',
    'test10-text': "පාරම්පරික හිස ප්‍රතිකාර මගින් මගේ නිදන්ගත ඉරුවාරදය සම්පූර්ණයෙන්ම සුව වුණා. මාස හයකින් මට හිස කැක්කුමක් ඇවිත් නැහැ!",
    'test10-name': 'මොහොමඩ් නසීර්',
    'test10-loc': 'ගම්පොළ, ශ්‍රී ලංකාව',
    'test11-text': "දැඩි ළදරු උණකින් පීඩා විඳි මගේ බිළිඳා මම මෙහි ගෙන ආවා. මෘදු පාරම්පරික ප්‍රතිකාර දින කිහිපයක් තුළ කිසිදු අතුරු ආබාධයකින් තොරව ක්‍රියාත්මක වුණා.",
    'test11-name': 'කමණි පෙරේරා',
    'test11-loc': 'පේරාදෙණිය, ශ්‍රී ලංකාව',
    'test12-text': "වසර ගණනාවක් වකුගඩු ගල් වලින් පීඩා විඳීමෙන් පසු, පාරම්පරික ශාකමූල සූත්‍ර ඒවා සැත්කමකින් තොරව ස්වාභාවිකවම ඉවත් කළා. මම සදාකාලිකවම කෘතඥ වෙනවා.",
    'test12-name': 'සුනිල් බණ්ඩාර',
    'test12-loc': 'කෑගල්ල, ශ්‍රී ලංකාව',
    'test13-text': "දින 28ක තීව්‍ර වැඩසටහන ජීවිතය වෙනස් කරන අත්දැකීමක් වුණා. මගේ බර අඩු වුණා, ජීර්ණය වැඩිදියුණු වුණා, මගේ මනස අතිශයින් පැහැදිලියි.",
    'test13-name': 'සාරා ජෙන්කින්ස්',
    'test13-loc': 'සිඩ්නි, ඕස්ට්‍රේලියාව',
    'test14-text': "මට නිදන්ගත ඇදුම සහ ශ්වසන ගැටලු තිබුණා. මෙහි ඇති ශාකමූල චිකිත්සා සහ පාරම්පරික වාෂ්ප ප්‍රතිකාර මට මගේ හුස්ම යළි ලබා දුන්නා.",
    'test14-name': 'නිලන්ත දිසානායක',
    'test14-loc': 'නුවරඑළිය, ශ්‍රී ලංකාව',
    'test15-text': "මුල් අවධියේ මේද අක්මාව ඇති බව හඳුනාගත් මම ඩා. රාජසේකරගේ දින 14ක වැඩසටහනට සහභාගී වුණා. මගේ මෑත කාලීන පරීක්ෂණයෙන් පෙනී ගියේ මගේ අක්මාව යළි යථා තත්ත්වයට පත්ව ඇති බවයි!",
    'test15-name': 'චාන්දනී විජේසූරිය',
    'test15-loc': 'මහනුවර, ශ්‍රී ලංකාව',
    'test16-text': "කණ්ඩායම විසින් ලබා දෙන සැලකිල්ල සහ අවධානය අසමසමයි. එය හුදෙක් සායනයක් නොවේ; එය සමස්ත සෞඛ්‍යය සඳහා වූ අභයභූමියකි.",
    'test16-name': 'රජීව් සේනානායක',
    'test16-loc': 'කොළඹ, ශ්‍රී ලංකාව',
    'test17-text': "රැයේ නින්ද නැති කළ දරුණු සයටිකා වේදනාවකින් මම පීඩා වින්දා. පාරම්පරික හේල වෙදකම ප්‍රතිකාර මට විශාල සහනයක් ගෙන ආවා.",
    'test17-name': 'නලිනි ද සිල්වා',
    'test17-loc': 'ගාල්ල, ශ්‍රී ලංකාව',
    'test18-text': "මගේ කොලෙස්ටරෝල් මට්ටම භයානක ලෙස ඉහළ ගොස් තිබුණා. මාස තුනක් වෛද්‍යවරයාගේ ශාකමූල ඖෂධ සහ ආහාර උපදෙස් අනුගමනය කිරීමෙන් පසු, මම සම්පූර්ණයෙන්ම නිරෝගීයි.",
    'test18-name': 'උපාලි කරුණාරත්න',
    'test18-loc': 'මහනුවර, ශ්‍රී ලංකාව',
    'test19-text': "අපි ආවේ අනුපූරක පිළිකා සහාය ප්‍රතිකාර සඳහායි. චිකිත්සා මගේ ශරීරය ශක්තිමත් කළ අතර රසායනික ප්‍රතිකාරයේ අතුරු ආබාධ විශාල ලෙස අඩු කළා.",
    'test19-name': 'මල්කාන්ති පීරිස්',
    'test19-loc': 'පානදුර, ශ්‍රී ලංකාව',
    'test20-text': "අව්‍යාජ, සාමකාමී සහ සැබවින්ම සුවපත් කරන පරිසරයක්. පාරම්පරික ශාන්ති වෙදකමේ චාරිත්‍ර ඉතා ගැඹුරු සහ ඵලදායී වේ.",
    'test20-name': 'හෙලේනා රොසී',
    'test20-loc': 'රෝමය, ඉතාලිය',
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
    'pkg5-label': 'சிறப்பு',
    'pkg5-title': 'பஞ்சகர்மா நச்சுநீக்கம்',
    'pkg5-sub': 'முழு உடல் சுத்திகரிப்பு',
    'pkg6-label': 'தளர்வு',
    'pkg6-title': 'மன ஆரோக்கியம்',
    'pkg6-sub': 'மன அழுத்தம் & பதட்டம் நிவாரணம்',
    'pkg7-label': 'வாழ்க்கை முறை',
    'pkg7-title': 'எடை மேலாண்மை',
    'pkg7-sub': 'இயற்கையான கொழுப்பு குறைப்பு',
    'pkg8-label': 'தாய் பராமரிப்பு',
    'pkg8-title': 'பிரசவத்திற்கு பிந்தைய பராமரிப்பு',
    'pkg8-sub': 'மீட்பு மற்றும் வலிமை',
    'pkg1-desc': 'ஆயுர்வேத குணப்படுத்துதலுக்கான மென்மையான அறிமுகம். இந்த 7 நாள் திட்டம் ஆரம்பகால நச்சு நீக்கம் மற்றும் மென்மையான மூலிகை சிகிச்சைகள் மூலம் தோஷ சமநிலையை மீட்டெடுப்பதில் கவனம் செலுத்துகிறது.',
    'pkg2-desc': 'எங்கள் விரிவான 14 நாள் திட்டம் செல்லுலார் சுத்திகரிப்புக்கு ஆழமாக செல்கிறது. ஆழமாக வேரூன்றிய நச்சுகளை அகற்றுவதற்கும் உடலை புதுப்பிப்பதற்கும் சிறப்பு எண்ணெய் சிகிச்சைகள் இதில் அடங்கும்.',
    'pkg3-desc': 'முழுமையான ஆயுர்வேத மீட்டமைப்பிற்கான சிறந்த காலம். இந்த 21 நாள் திட்டம் உடல் முழுமையாக நச்சு நீக்கம் செய்யவும் அதன் இயற்கையான நோய் எதிர்ப்பு சக்தியை மீண்டும் உருவாக்கவும் போதுமான நேரத்தை வழங்குகிறது.',
    'pkg4-desc': 'ஒரு ஆழமான உருமாற்ற பயணம். 28 நாட்களில், இந்த தீவிர திட்டம் நாட்பட்ட நிலைமைகளை நிவர்த்தி செய்கிறது, மனம், உடல் மற்றும் ஆவியின் முழுமையான மீட்டமைப்பை வழங்குகிறது.',
    'pkg5-desc': 'ஆழமான திசுக்களில் இருந்து நச்சுகளை அகற்ற வடிவமைக்கப்பட்ட உண்மையான பஞ்சகர்மா அனுபவம். இந்த சிறப்பு திட்டத்தில் கடுமையான சுத்திகரிப்பு சிகிச்சைகள் மற்றும் கடுமையான உணவு முறை ஆகியவை அடங்கும்.',
    'pkg6-desc': 'நவீன மன அழுத்தம், பதட்டம் மற்றும் தூக்கமின்மையை எதிர்த்துப் போராட சிறப்பாக வடிவமைக்கப்பட்டுள்ளது. இந்த திட்டம் நரம்பு மண்டலத்தை அமைதிப்படுத்த சிரோதாரா, மென்மையான மசாஜ்கள் மற்றும் தியானம் ஆகியவற்றைப் பயன்படுத்துகிறது.',
    'pkg7-desc': 'எடை இழப்புக்கான ஒரு முழுமையான அணுகுமுறை. வளர்சிதை மாற்றத்தை அதிகரிக்கும் மூலிகை மருந்துகள், உத்வர்தனா (மூலிகை தூள் மசாஜ்) மற்றும் தனிப்பயனாக்கப்பட்ட உணவுகள் ஆகியவற்றை நாங்கள் இணைக்கிறோம்.',
    'pkg8-desc': 'புதிய தாய்மார்கள் வலிமையையும் சுறுசுறுப்பையும் மீண்டும் பெற அர்ப்பணிக்கப்பட்ட கவனிப்பு. இந்த வளர்க்கும் திட்டத்தில் மென்மையான மசாஜ்கள், பாலூட்டுதல் ஆதரவு மற்றும் சிறப்பு மூலிகை டானிக்குகள் அடங்கும்.',
    'more-details': 'மேலும் விவரங்கள்',
    'less-details': 'குறைவான விவரங்கள்',
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
    'test4-text': "5 ஆண்டுகளாக எனக்கு நாட்பட்ட இரைப்பை அழற்சி இருந்தது. ஆங்கில மருத்துவம் தற்காலிக நிவாரணத்தை அளித்தது, ஆனால் டாக்டர் மங்களிகாவின் மூலிகை கஷாயங்கள் என்னை வேரிலிருந்து குணப்படுத்தின. மிகவும் பரிந்துரைக்கிறேன்!",
    'test4-name': 'நிமல் பெர்னாண்டோ',
    'test4-loc': 'மாத்தளை, இலங்கை',
    'test5-text': "என் தாய் பக்கவாதத்திற்குப் பிறகு பகுதி பக்கவாதத்தால் பாதிக்கப்பட்டார். இங்குள்ள சிறப்பு எண்ணெய்கள் மற்றும் நரம்பு சிகிச்சைகள் அவருக்கு மீண்டும் நடக்கும் திறனைக் கொடுத்தன. ஒரு உண்மையான அதிசயம்.",
    'test5-name': 'சுஜானி சில்வா',
    'test5-loc': 'குருநாகல், இலங்கை',
    'test6-text': "நான் நீரிழிவு மேலாண்மைக்காக இங்கு வந்தேன். 14 நாள் சிகிச்சைக்குப் பிறகு, என் இரத்த சர்க்கரை அளவு கணிசமாகக் குறைந்து, நான் மீண்டும் ஆற்றலுடன் உணர்கிறேன்.",
    'test6-name': 'டேவிட் தாம்சன்',
    'test6-loc': 'லண்டன், இங்கிலாந்து',
    'test7-text': "மருந்துடன் இணைந்த சாந்தி வெதகம சடங்குகள், மனச்சோர்வு மற்றும் பதட்டத்திற்கு எதிரான என் போராட்டத்தின் போது எனக்கு மிகுந்த மன அமைதியைத் தந்தன.",
    'test7-name': 'அனோமா ஜயசிங்க',
    'test7-loc': 'கொழும்பு, இலங்கை',
    'test8-text': "என் மகனுக்கு கடுமையான அரிக்கும் தோலழற்சி இருந்தது. டஜன் கணக்கான கிரீம்களை முயற்சித்த பிறகு, மை டியர் ஸ்கின்னின் இயற்கை இரத்தத்தை சுத்திகரிக்கும் மருந்து அவனது சருமத்தை முழுமையாக குணப்படுத்தியது.",
    'test8-name': 'ருவான் ஏகநாயக்க',
    'test8-loc': 'கண்டி, இலங்கை',
    'test9-text': "எனக்கு முழங்கால் மாற்று அறுவை சிகிச்சை திட்டமிடப்பட்டிருந்தது, ஆனால் முதலில் ஆயுர்வேதத்தை முயற்சிக்க முடிவு செய்தேன். 21 நாட்களுக்குப் பிறகு, நான் வலியின்றி நடக்க முடியும். ஆச்சரியமாக இருக்கிறது.",
    'test9-name': 'ஷெர்லி பெரேரா',
    'test9-loc': 'நீர்கொழும்பு, இலங்கை',
    'test10-text': "பாரம்பரிய தலை சிகிச்சைகள் என் நாட்பட்ட ஒற்றைத் தலைவலியை முழுமையாக குணப்படுத்தின. ஆறு மாதங்களில் எனக்கு ஒரு தலைவலி கூட வரவில்லை!",
    'test10-name': 'முகமது நசீர்',
    'test10-loc': 'கம்பளை, இலங்கை',
    'test11-text': "கடுமையான காய்ச்சலால் பாதிக்கப்பட்ட என் குழந்தையை நான் இங்கு கொண்டு வந்தேன். மென்மையான பாரம்பரிய சிகிச்சைகள் எந்த பக்க விளைவுகளும் இல்லாமல் சில நாட்களில் வேலை செய்தன.",
    'test11-name': 'கமனி பெரேரா',
    'test11-loc': 'பேராதனை, இலங்கை',
    'test12-text': "பல ஆண்டுகளாக சிறுநீரக கற்களால் பாதிக்கப்பட்ட பிறகு, பாரம்பரிய மூலிகை சூத்திரங்கள் அறுவை சிகிச்சை இல்லாமல் இயற்கையாகவே அவற்றை அகற்றின. நான் என்றென்றும் நன்றியுள்ளவனாக இருப்பேன்.",
    'test12-name': 'சுனில் பண்டார',
    'test12-loc': 'கேகாலை, இலங்கை',
    'test13-text': "28 நாள் தீவிர திட்டம் என் வாழ்க்கையை மாற்றியமைத்தது. நான் எடை குறைந்தேன், என் செரிமானம் மேம்பட்டது, என் மனம் நம்பமுடியாத அளவிற்கு தெளிவாக உள்ளது.",
    'test13-name': 'சாரா ஜென்கின்ஸ்',
    'test13-loc': 'சிட்னி, ஆஸ்திரேலியா',
    'test14-text': "எனக்கு நாட்பட்ட ஆஸ்துமா மற்றும் சுவாச பிரச்சினைகள் இருந்தன. இங்குள்ள மூலிகை சிகிச்சைகள் மற்றும் பாரம்பரிய நீராவி சிகிச்சைகள் என் சுவாசத்தை மீண்டும் கொடுத்தன.",
    'test14-name': 'நிலந்த திஸாநாயக்க',
    'test14-loc': 'நுவரெலியா, இலங்கை',
    'test15-text': "ஆரம்பகால கொழுப்பு கல்லீரல் கண்டறியப்பட்டதால், நான் டாக்டர் ராஜசேக்கரவின் 14 நாள் திட்டத்தை எடுத்தேன். என் சமீபத்திய ஸ்கேன் என் கல்லீரல் இயல்பு நிலைக்குத் திரும்பியதைக் காட்டுகிறது!",
    'test15-name': 'சாந்தனி விஜேசூரிய',
    'test15-loc': 'கண்டி, இலங்கை',
    'test16-text': "குழுவினர் அளித்த கவனிப்பு ஒப்பிடமுடியாதது. இது வெறும் கிளினிக் அல்ல; இது முழுமையான குணப்படுத்துதலுக்கான ஒரு சரணாலயம்.",
    'test16-name': 'ரஜீவ் சேனநாயக்க',
    'test16-loc': 'கொழும்பு, இலங்கை',
    'test17-text': "இரவில் என்னை விழித்திருக்கச் செய்த கடுமையான சியாட்டிகா வலியால் நான் அவதிப்பட்டேன். பாரம்பரிய ஹேல வெதகம சிகிச்சைகள் எனக்கு மிகுந்த நிவாரணத்தை அளித்தன.",
    'test17-name': 'நளினி டி சில்வா',
    'test17-loc': 'காலி, இலங்கை',
    'test18-text': "என் கொலஸ்ட்ரால் அளவு ஆபத்தான அளவிற்கு அதிகமாக இருந்தது. மூன்று மாதங்கள் மருத்துவரின் மூலிகை மருந்து மற்றும் உணவு ஆலோசனையைப் பின்பற்றிய பிறகு, நான் முழுமையாக ஆரோக்கியமாக இருக்கிறேன்.",
    'test18-name': 'உபாலி கருணாரத்ன',
    'test18-loc': 'கண்டி, இலங்கை',
    'test19-text': "துணை புற்றுநோய் ஆதரவு சிகிச்சைக்காக நாங்கள் வந்தோம். சிகிச்சைகள் என் உடலை பலப்படுத்தின மற்றும் கீமோதெரபியின் பக்க விளைவுகளை வெகுவாகக் குறைத்தன.",
    'test19-name': 'மல்காந்தி பீரிஸ்',
    'test19-loc': 'பாணந்துறை, இலங்கை',
    'test20-text': "ஒரு உண்மையான, அமைதியான மற்றும் குணமாக்கும் சூழல். பாரம்பரிய சாந்தி வெதகம சடங்குகள் ஆழமாக நகரும் மற்றும் பயனுள்ளவை.",
    'test20-name': 'ஹெலினா ரோஸி',
    'test20-loc': 'ரோம், இத்தாலி',
    'contact-eyebrow': 'எங்களை கண்டுபிடியுங்கள்',
    'contact-title': 'எங்கள் மருத்துவமனையை பார்வையிடுங்கள்',
    'ci1-label': 'முகவரி',
    'ci1-value': 'சாந்தி வைத்திய நிலையம், இல. 225, கல்தன்ன வீதி, கந்த, அம்பிட்டிய, கண்டி, இலங்கை',
    'ci2-label': 'தொலைபேசி எண்கள்',
    'ci2-value': '+94 70 514 2900\n+94 71 578 1269\n+94 77 531 2419',
    'ci3-label': 'திறந்திருக்கும் நேரம்',
    'ci3-value': 'திங்கள் – சனி\nகாலை 8:00 – பிற்பகல் 4:30',
    'map-label': 'சாந்தி வைத்திய நிலையம், இல. 225, கல்தன்ன வீதி, அம்பிட்டிய, கண்டி',
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

// ── Package Toggles ────────────────────────────
function initPackageToggles() {
  document.querySelectorAll('.toggle-details').forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.pkg-card');
      const details = card.querySelector('.pkg-details-content');
      if (!details) return;
      
      const isVisible = details.style.display === 'block';
      details.style.display = isVisible ? 'none' : 'block';
      
      // Update button text using translations object based on current language
      const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
      const key = isVisible ? 'less-details' : 'more-details';
      
      this.setAttribute('data-i18n', key);
      this.textContent = translations[lang] && translations[lang][key] ? translations[lang][key] : (isVisible ? 'Less Details' : 'More Details');
    });
  });
}

// ── Testimonials Slider ────────────────────────
function initTestimonials() {
  const track = document.getElementById('testimonial-track');
  const dotsContainer = document.getElementById('testimonial-dots');
  if (!track || !dotsContainer) return;

  // 1. Generate Cards
  let cardsHtml = '';
  for (let i = 1; i <= 20; i++) {
    cardsHtml += `
      <div class="test-card">
        <div class="test-quote">"</div>
        <p class="test-text" data-i18n="test${i}-text"></p>
        <div class="test-stars">★★★★★</div>
        <div class="test-footer">
          <div class="test-avatar"><i class="fa-solid fa-user" style="font-size:1.1rem;color:var(--gold-light);"></i></div>
          <div>
            <div class="test-name" data-i18n="test${i}-name"></div>
            <div class="test-loc" data-i18n="test${i}-loc"></div>
          </div>
        </div>
      </div>
    `;
  }
  track.innerHTML = cardsHtml;

  // 2. Slider Logic
  const totalCards = 20;
  let currentIndex = 0;
  let cardsPerView = window.innerWidth > 900 ? 3 : 1;
  let maxIndex = totalCards - cardsPerView;
  let autoSlideTimer;

  // Generate Dots
  let dotsHtml = '';
  for(let i = 0; i < totalCards; i++) {
    dotsHtml += `<div class="test-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`;
  }
  dotsContainer.innerHTML = dotsHtml;
  const dots = dotsContainer.querySelectorAll('.test-dot');

  function updateSlider() {
    cardsPerView = window.innerWidth > 900 ? 3 : 1;
    maxIndex = totalCards - cardsPerView;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const cardWidth = window.innerWidth > 900 ? (100 / 3) : 100;
    track.style.transform = `translateX(-${currentIndex * cardWidth}%)`;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
      dot.style.display = idx <= maxIndex ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex > maxIndex) currentIndex = 0;
    updateSlider();
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideTimer);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.getAttribute('data-index'));
      updateSlider();
      startAutoSlide(); // reset timer
    });
  });

  const carouselWrap = document.querySelector('.test-carousel-wrap');
  if(carouselWrap) {
    carouselWrap.addEventListener('mouseenter', stopAutoSlide);
    carouselWrap.addEventListener('mouseleave', startAutoSlide);
  }

  window.addEventListener('resize', updateSlider);

  // initial call
  updateSlider();
  startAutoSlide();
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
  initPackageToggles();
  initTestimonials();

  // Restore saved language
  const saved = localStorage.getItem('mds-lang') || 'en';
  applyLanguage(saved);
});
