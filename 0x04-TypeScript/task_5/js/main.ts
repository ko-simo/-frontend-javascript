interface MajorCredits {
  credits: number;
  // علامة مميزة للتمييز النوعي (branding)
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor"
  };
}

// مثال استخدام:

const major1: MajorCredits = { credits: 10, brand: "major" };
const major2: MajorCredits = { credits: 5, brand: "major" };

const minor1: MinorCredits = { credits: 3, brand: "minor" };
const minor2: MinorCredits = { credits: 7, brand: "minor" };

const majorSum = sumMajorCredits(major1, major2);
const minorSum = sumMinorCredits(minor1, minor2);

console.log("Major Credits Sum:", majorSum);
console.log("Minor Credits Sum:", minorSum);
