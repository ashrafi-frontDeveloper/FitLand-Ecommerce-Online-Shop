// تبدیل اعداد انگلیسی به فارسی
export function toPersianDigits(number) {
    return number.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
  }
  
  // استفاده از فرمت رسمی زبان فارسی (مناسب برای قیمت‌ها و اعداد بزرگ)
  export function formatPersianNumber(number) {
    return new Intl.NumberFormat('fa-IR').format(number);
  }
  