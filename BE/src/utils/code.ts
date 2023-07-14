const getCode = (value: number): number => {
    if (value > 9) {
      return Math.floor(value / (Math.floor(value / 9) + 1));
    }
    return Math.floor(value);
  };
  
  export const calculateCode = (grid: string[][]): string => {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const [first,second] = seconds.split('')

    const char1 = grid[Number(first)][Number(second)];
    const char2 = grid[Number(second)][Number(first)];
  
    let count1 = 0;
    let count2 = 0;
  
    grid.forEach((row) => {
      row.forEach((cell) => {
        if (cell === char1) count1++;
        if (cell === char2) count2++;
      });
    });
  
    const code = `${getCode(count1)}${getCode(count2)}`;
    return code;
  };