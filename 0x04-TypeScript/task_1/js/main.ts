interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // يسمح بإضافة خصائص إضافية غير معرفة مسبقاً
}

// مثال على إنشاء كائن Teacher مع خاصية إضافية
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false
};

console.log(teacher3);
