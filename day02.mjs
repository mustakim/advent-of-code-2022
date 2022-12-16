import { readFileSync } from "node:fs";

const lines = readFileSync("day02.txt", { encoding: "utf-8" }) // reading day 01 inputs
  .replace(/\r/g, "") // removing all \r characters to avoid issues on windows
  .trim() // removing unnecessary white spaces from start and end\
  .split("\n") // split on newline
  .map((line) => line.split(" "));

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const mapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: moves.rock,
  Y: moves.paper,
  Z: moves.scissors,
};

function score(opponentMove, ownMove) {
  if (opponentMove === ownMove) {
    return ownMove + 3;
  }

  // win conditions:
  // rock / paper
  // paper / scissors
  // scissors / rock

  if (
    (opponentMove === moves.rock && ownMove === moves.paper) ||
    (opponentMove === moves.paper && ownMove === moves.scissors) ||
    (opponentMove === moves.scissors && ownMove === moves.rock)
  ) {
    return ownMove + 6;
  }
  return ownMove;
}

function part1() {
  const outcomes = lines.map((line) => {
    const opponentMove = mapInput[line[0]];
    const ownMove = mapInput[line[1]];

    return score(opponentMove, ownMove);
  });

  console.log(
    outcomes.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    )
  );
}

const solution = {
  A: {
    X: moves.scissors,
    Y: moves.rock,
    Z: moves.paper,
  },
  B: {
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  },
  C: {
    X: moves.paper,
    Y: moves.scissors,
    Z: moves.rock,
  },
};

function part2() {
  const outcomes = lines.map((line) => {
    const opponentMove = mapInput[line[0]];

    // Guess own move from the instructions
    const ownMove = solution[line[0]][line[1]];

    return score(opponentMove, ownMove);
  });

  console.log(
    outcomes.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    )
  );
}

part1();
part2();
