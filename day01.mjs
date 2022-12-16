import { readFileSync } from "node:fs";

const elves = readFileSync("day01.txt", { encoding: "utf-8" }) // reading day 01 inputs
  .replace(/\r/g, "") // removing all \r characters to avoid issues on windows
  .trim() // removing unnecessary white spaces from start and end\
  .split("\n\n"); // split on newline

function part1() {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  console.log("Max calories", Math.max(...calories));
}

function part2() {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  calories.sort((a, b) => b - a);

  console.log("Sorted Calories", calories.slice(0, 3).reduce((previous, current) => previous + current, 0));
}

part1();
part2();
