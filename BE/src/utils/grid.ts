
export const generateGrid = (biasChar?:string, biasPercentage?:number ): string[][] => {
  const grid: string[][] = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  if(biasChar){
    alphabet = alphabet.replace(biasChar,'')
  }

  for (let i = 0; i < 10; i++) {
    const row = [];

    for (let j = 0; j < 10; j++) {
      row.push(""); 
    }

    grid.push(row);
  }

  const totalCells = 10 * 10;
  const biasCells = Math.floor(totalCells * (biasPercentage || 0));

  // Fill the bias cells with the bias character
  if(biasChar ){
    let filledCells = 0;
    while (filledCells < biasCells) {
      const randomRowIndex = Math.floor(Math.random() * 10);
      const randomColIndex = Math.floor(Math.random() * 10);
  
      if (grid[randomRowIndex][randomColIndex] === "" && biasChar) {
        grid[randomRowIndex][randomColIndex] = biasChar.toLocaleLowerCase();
        filledCells++;
      }
    }
  }
 

  // Fill the remaining cells with random characters
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j] === "") {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomChar = alphabet[randomIndex];
        grid[i][j] = randomChar;
      }
    }
  }

  return grid;
}

