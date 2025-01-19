export type TransDB = { [key: string]: { en: string; ar: string } }

export const TRANSLATIONS = {
  extensionName: {
    en: "The wall - Boycott assistant",
    ar: "الجدار - مساعد المقاطعة"
  },
  extensionDescription: {
    en: `Put more than 19,000 Boycott-worthy companies behind a wall 🧱`,
    ar: `ضع اكثر من 19 الف شركة للكيان الصهيوني خلف جدار عازل 🧱`
  },
  reasonUrlIL: {
    en: "This Url ends with .il, This means it's an Israeli website!",
    ar: "هذا الموقع من الكيان الصهيوني لأنه ينتهي بـ .il"
  },
  reasonFounder: {
    en: "One or more founders/investors of $1 are connected to Israel!",
    ar: "تنبيه: أحد المستثمرين أو المؤسسين لـ $1 من الكيان الصهيوني"
  },
  reasonHeadquarter: {
    en: "$1 headquarters is in Israel.",
    ar: "المقر الرئيسي لـ $1 يقع في الكيان الصهيوني."
  },
  reasonBDS: {
    en: "$1 is listed on the BDS Boycott list",
    ar: "تنبيه: $1 مدرج في قائمة المقاطعة الخاصة بحركة BDS"
  },
  modalShareMobileImage: {
    en: "Share image",
    ar: "أنشر صورة"
  },
  modalShareButton: {
    en: "Share",
    ar: "انشر"
  },
  buttomBarButtonReport: {
    en: "Report mistake!",
    ar: "أبلغ عن مشكلة"
  },
  modalDismissSession: {
    en: "Allow this time",
    ar: "السماح مرة واحدة"
  },
  sharingMessageText: {
    en: 'I avoided an Israeli website by using "The wall - Boycott assistant" browser addon. Try it!',
    ar: 'لقد تجنبت موقعًا تابعًا للكيان الصهيوني باستخدام إضافة "الجدار". جرّبه الآن!'
  }
} satisfies TransDB
