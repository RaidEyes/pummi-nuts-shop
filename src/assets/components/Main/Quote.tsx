import { useEffect, useState } from "react";

function Quote() {
  const sentence: string =
    "“Cuộc sống hối hả, đôi khi khiến chúng ta quên đi chăm sóc cho chính mình. Giữa guồng quay ấy, đừng quên dành chút thời gian lắng nghe cơ thể. Chọn lựa hạt lành, nạp năng lượng tích cực, để cơ thể tràn đầy sức sống, sẵn sàng đón chào thử thách mới nhé!”";

  const [processedWord, setProcessedWord] = useState<string[]>([]);

  useEffect(() => {
    const regEx = /[\p{L}\p{Mn}\p{Mc}'-.]+/gu;
    const matches = sentence.match(regEx);

    if (matches) {
      setProcessedWord(matches);
    } else {
      setProcessedWord([]); // Handle the case where there are no matches
    }
  }, []);

  useEffect(() => {
    const words = document.querySelectorAll(".each-word");
    function hoverOpacity(e: Event) {
      const targetElement = e.target as HTMLSpanElement;
      targetElement.style.opacity = "1";
    }
    words.forEach((word) => {
      word.addEventListener("mouseover", hoverOpacity);
    });
    return () => {
      words.forEach((word) =>
        word.removeEventListener("mouseover", hoverOpacity)
      );
    };
  }, [processedWord]);

  return (
    <div className="h-[100vh] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center px-12 md:px-44 gap-8">
      <p className="w-full text-3xl italic leading-10 text-white">
        "
        {processedWord.map((word: string, index: number) => (
          <span
            className="each-word lg:text-3xl"
            style={{ opacity: "0", transition: "all ease-in 450ms" }}
            key={index}
          >
            {word}{" "}
          </span>
        ))}
        "
      </p>
      <p className="text-2xl italic text-white">-- Pummi Nuts</p>
    </div>
  );
}

export default Quote;
