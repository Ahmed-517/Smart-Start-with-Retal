"use client";

export default function Home() {
  const words = [
    { english: "map", arabic: "خريطة" },
    { english: "pan", arabic: "طاسة" },
    { english: "bar", arabic: "قطعة" },
    { english: "apple", arabic: "تفاحة" },
    { english: "banana", arabic: "بنانة" },
    { english: "ball", arabic: "كرة" },
    { english: "cat", arabic: "قطة" },
    { english: "dog", arabic: "كلب" },
    { english: "elephant", arabic: "فيل" },
    { english: "house", arabic: "منزل" },
    { english: "king", arabic: "ملك" },
    { english: "queen", arabic: "ملكة" },
    { english: "tree", arabic: "شجرة" },
    { english: "water", arabic: "ماء" },
    { english: "sun", arabic: "شمس" },
    { english: "moon", arabic: "ليلة" },
    { english: "plus", arabic: "+" },
    { english: "minus", arabic: "-" },
    { english: "equals", arabic: "=" },
  ];

  const speakWord = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();
    // Example: Set the voice to the first available voice
    utterance.voice = voices[2]; // Change the index to select a different voice

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">ريتال تتعلم الإنجليزية</h1>
        <ul className="list-none">
          {words.map((word, index) => (
            <li key={index} className="mb-4">
              <button
                className="text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => speakWord(word.english)}
              >
                {word.english} - {word.arabic}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button
            className="text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => speakWord("+")}
          >
            +
          </button>
          <button
            className="text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => speakWord("minus")}
          >
            -
          </button>
          <button
            className="text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => speakWord("=")}
          >
            =
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
