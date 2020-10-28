type Tupple = (boolean | string | undefined)[];

const cn = (...args: (string | undefined | Tupple)[]): string => {
  let final = "";
  const append = (toAppend: string) => {
    final = final + " " + toAppend;
  };

  for (const item of args) {
    if (Array.isArray(item)) {
      const [bool, ifTrue, ifFalse] = item;

      if (bool && typeof ifTrue === "string") {
        append(ifTrue);
      }
      if (!bool && typeof ifFalse === "string") {
        append(ifFalse);
      }
    }
    if (typeof item === "string") {
      append(item);
    }
  }

  return final.trim();
};

export default cn;
