// import JuggleHire from "./dist/index";
const { JuggleHire } = require("./dist/index");
const j = new JuggleHire("asda", "token here");
// const j = new JuggleHire("asda", "1|4vBknm7aFgfGVyAGLP5198EwdF2jMdrphNAVEeyN63612d0f");
console.log(j.jobs());
