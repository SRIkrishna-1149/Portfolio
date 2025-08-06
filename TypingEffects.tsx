import { useState, useEffect } from "react";

interface TypingEffectProps {
  words: string[];
  className?: string;
}

const TypingEffect = ({ words = ["Core Java Developer", "HTML Web Designer", "Frontend Developer", "Cyber Security Specialist", "Data Structures & Algorithms Expert", "Technology Innovator", "Creative Coder"], className = "" }: TypingEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (!isDeleting) {
        // AI-like realistic typing with natural variations
        if (currentText.length < word.length) {
          setCurrentText(word.substring(0, currentText.length + 1));
          
          // Human-like typing patterns with slight variations
          const baseSpeed = 65;
          const variation = Math.random() * 40 - 20; // -20 to +20ms variation
          const isVowel = /[aeiouAEIOU]/.test(word[currentText.length]);
          const speedModifier = isVowel ? 0.9 : 1.1; // Slightly faster on vowels
          
          setTypingSpeed(Math.max(30, baseSpeed + variation) * speedModifier);
        } else {
          // Finished typing, wait before deleting
          setTypingSpeed(2000);
          setIsWaiting(true);
        }
      } else {
        // Smooth, consistent deleting
        if (currentText.length > 0) {
          setCurrentText(word.substring(0, currentText.length - 1));
          setTypingSpeed(35 + Math.random() * 15); // 35-50ms for natural backspace
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(200); // Brief pause before starting new word
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, isWaiting]);

  return (
    <span className={className}>
      <span className="inline-block min-w-[300px] text-left">
        <span className="animate-glow-pulse">{currentText}</span>
      </span>
    </span>
  );
};

export default TypingEffect;