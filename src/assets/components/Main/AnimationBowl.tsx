function AnimationBowl() {
  return (
    <div className="min-h-[100vh] bg-[url(/img/table-background.png)] relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <img src="/img/granola-bowl.png" alt="granola bowl" />
      <img
        src="/img/Arrow.png"
        alt="Arrow icon"
        className="absolute max-w-40 scale-[-1] left-[18rem] top-[6rem] rotate-[45deg]"
      />
    </div>
  );
}

export default AnimationBowl;
