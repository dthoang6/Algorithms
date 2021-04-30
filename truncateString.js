/**
 * truncate a string if it is longer than the maxinmum length num
 * @param {1} str 
 * @param {2} num 
 * @returns the truncated string with appending '...'
 */
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    }
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);