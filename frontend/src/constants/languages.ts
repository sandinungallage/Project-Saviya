export type Language = 'en' | 'si' | 'ta';

export interface TranslationDictionary {
  common: {
    emergencyContact: string;
    emergencyWarning: string;
    emergencyCall: string;
    emergencyDescription: string;
    disclaimerText: string;
    disclaimerTitle: string;
    readMore: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    subscribe: string;
    copyright: string;
  };
  nav: {
    home: string;
    about: string;
    resources: string;
    emergency: string;
    mentalHealthInfo: string;
    selfAssessment: string;
    relaxZone: string;
    journal: string;
    moodTracker: string;
    aiCompanion: string;
    events: string;
    volunteer: string;
    partners: string;
    contact: string;
    login: string;
    dashboard: string;
  };
  footer: {
    tagline: string;
    mission: string;
    quickLinks: string;
    legal: string;
    privacy: string;
    terms: string;
  };
}

export const LANGUAGES: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'si', name: 'Sinhala', nativeName: 'සිංහල' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' }
];

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    common: {
      emergencyContact: "Emergency Contacts",
      emergencyWarning: "If you are in immediate danger or having thoughts of self-harm, please seek professional support or call a helpline now.",
      emergencyCall: "Call Helpline",
      emergencyDescription: "Get free, confidential support from qualified professionals.",
      disclaimerTitle: "Important Notice",
      disclaimerText: "Sahanaya is a digital mental wellness resource and does NOT replace professional medical, clinical, or psychological advice, diagnosis, or treatment. Always consult a qualified physician or healthcare provider regarding any mental health condition.",
      readMore: "Read More",
      newsletterTitle: "Subscribe to Our Newsletter",
      newsletterDesc: "Get wellness tips, self-care articles, and updates from the Leo Club of Pannipitiya Paradise.",
      newsletterPlaceholder: "Enter your email address",
      subscribe: "Subscribe",
      copyright: "© 2026 Leo Club of Pannipitiya Paradise. All rights reserved."
    },
    nav: {
      home: "Home",
      about: "About",
      resources: "Resources",
      emergency: "Emergency Help",
      mentalHealthInfo: "Know Your Mental Health",
      selfAssessment: "Self Assessments",
      relaxZone: "Relax Zone",
      journal: "Gratitude Journal",
      moodTracker: "Mood Tracker",
      aiCompanion: "AI Companion",
      events: "Events",
      volunteer: "Volunteer",
      partners: "Partners",
      contact: "Contact Us",
      login: "Login",
      dashboard: "Dashboard"
    },
    footer: {
      tagline: "It's Okay Not To Be Okay.",
      mission: "A community initiative by the Leo Club of Pannipitiya Paradise, Sri Lanka, to provide free, confidential digital mental wellness tools.",
      quickLinks: "Quick Links",
      legal: "Legal Info",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    }
  },
  si: {
    common: {
      emergencyContact: "හදිසි සම්බන්ධතා (Emergency Contacts)",
      emergencyWarning: "ඔබ යම්කිසි අවදානමක හෝ තමාට හානිකර ගැනීමේ සිතුවිලි වලින් පෙළෙන්නේ නම්, කරුණාකර වහාම වෘත්තීය සහය ලබාගන්න.",
      emergencyCall: "ඇමතුම් ලබාගන්න",
      emergencyDescription: "සුදුසුකම් ලත් වෘත්තිකයන්ගෙන් නොමිලේ සහ රහසිගත සහය ලබාගන්න.",
      disclaimerTitle: "වැදගත් නිවේදනයයි",
      disclaimerText: "සහනය (Sahanaya) යනු ඩිජිටල් මානසික සුවතා අත්වැලක් පමණක් වන අතර එය වෘත්තීය වෛද්‍ය හෝ මනෝවිද්‍යාත්මක උපදෙස් හෝ ප්‍රතිකාර සඳහා ආදේශකයක් නොවේ. යම්කිසි මානසික රෝගී තත්ත්වයක් සඳහා සැමවිටම වෛද්‍යවරයකුගෙන් උපදෙස් ලබාගන්න.",
      readMore: "තව විස්තර",
      newsletterTitle: "අපගේ පුවත් පත්‍රිකාවට දායක වන්න",
      newsletterDesc: "පන්නිපිටිය පැරඩයිස් ලියෝ සමාජයෙන් මානසික සුවතා ලිපි සහ තොරතුරු ලබාගන්න.",
      newsletterPlaceholder: "විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න",
      subscribe: "සම්බන්ධ වන්න",
      copyright: "© 2026 පන්නිපිටිය පැරඩයිස් ලියෝ සමාජය. සියලුම හිමිකම් ඇවිරිණි."
    },
    nav: {
      home: "ප්‍රධාන පිටුව",
      about: "අපි ගැන",
      resources: "මූලාශ්‍ර",
      emergency: "හදිසි සහය",
      mentalHealthInfo: "මානසික සෞඛ්‍යය හඳුනාගන්න",
      selfAssessment: "ස්වයං ඇගයීම්",
      relaxZone: "සන්සුන් කලාපය",
      journal: "කෘතවේදී සඟරාව",
      moodTracker: "මනෝභාවය සටහන් කරන්නා",
      aiCompanion: "AI සහායකයා",
      events: "වැඩසටහන්",
      volunteer: "ස්වේච්ඡා වන්න",
      partners: "සහයෝගිතාකරුවන්",
      contact: "අපව අමතන්න",
      login: "ඇතුල් වන්න",
      dashboard: "පාලන පුවරුව"
    },
    footer: {
      tagline: "It's Okay Not To Be Okay.",
      mission: "පන්නිපිටිය පැරඩයිස් ලියෝ සමාජය මගින් නොමිලේ පවත්වාගෙන යනු ලබන මානසික සුවතා ඩිජිටල් ව්‍යාපෘතියකි.",
      quickLinks: "ඉක්මන් සබැඳි",
      legal: "නීතිමය තොරතුරු",
      privacy: "රහස්‍යතා ප්‍රතිපත්තිය",
      terms: "සේවා කොන්දේසි"
    }
  },
  ta: {
    common: {
      emergencyContact: "அவசர தொடர்புகள் (Emergency Contacts)",
      emergencyWarning: "நீங்கள் உடனடி ஆபத்தில் இருந்தால் அல்லது தற்கொலை எண்ணங்கள் இருந்தால், உடனடியாக நிபுணர்களின் ஆதரவை நாடவும்.",
      emergencyCall: "உதவிக்கு அழைக்கவும்",
      emergencyDescription: "தகுதிவாய்ந்த நிபுணர்களிடமிருந்து இலவச மற்றும் ரகசிய ஆதரவைப் பெறுங்கள்.",
      disclaimerTitle: "முக்கிய அறிவிப்பு",
      disclaimerText: "சஹனாயா (Sahanaya) என்பது ஒரு டிஜிட்டல் மனநல ஆதாரமாகும், இது தொழில்முறை மருத்துவ அல்லது உளவியல் ஆலோசனைக்கு மாற்றாகாது. ஏதேனும் மனநல பாதிப்புகள் இருந்தால் எப்போதும் தகுதிவாய்ந்த மருத்துவரை அணுகவும்.",
      readMore: "மேலும் வாசிக்க",
      newsletterTitle: "எங்கள் செய்திமடலுக்கு குழுசேரவும்",
      newsletterDesc: "பன்னிபிட்டிய பாரடைஸ் லியோ சங்கத்திலிருந்து மனநல உதவிக்குறிப்புகள் மற்றும் தகவல்களைப் பெறுங்கள்.",
      newsletterPlaceholder: "மின்னஞ்சல் முகவரியை உள்ளிடவும்",
      subscribe: "பதிவு செய்க",
      copyright: "© 2026 பன்னிபிட்டிய பாரடைஸ் லியோ சங்கம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    },
    nav: {
      home: "முகப்பு",
      about: "எங்களைப் பற்றி",
      resources: "வளங்கள்",
      emergency: "அவசர உதவி",
      mentalHealthInfo: "உங்கள் மனநலனை அறியுங்கள்",
      selfAssessment: "சுய மதிப்பீடுகள்",
      relaxZone: "தளர்வு மண்டலம்",
      journal: "நன்றியுணர்வு இதழ்",
      moodTracker: "மனநிலை கண்காணிப்பு",
      aiCompanion: "AI துணையாளர்",
      events: "நிகழ்வுகள்",
      volunteer: "தன்னார்வலராகுங்கள்",
      partners: "பங்குதாரர்கள்",
      contact: "தொடர்புகொள்ள",
      login: "உள்நுழைய",
      dashboard: "டாஷ்போர்டு"
    },
    footer: {
      tagline: "It's Okay Not To Be Okay.",
      mission: "பன்னிபிட்டிய பாரடைஸ் லியோ சங்கத்தின் இலவச, ரகசிய டிஜிட்டல் மனநலக் கருவிகளை வழங்கும் சமூக முயற்சி.",
      quickLinks: "விரைவான இணைப்புகள்",
      legal: "சட்ட தகவல்",
      privacy: "தனியுரிமைக் கொள்கை",
      terms: "விதிமுறைகள் மற்றும் நிபந்தனைகள்"
    }
  }
};
