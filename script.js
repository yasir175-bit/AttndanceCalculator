function calculateAttendance() {
  const total = parseInt(document.getElementById('total').value);
  const attended = parseInt(document.getElementById('attended').value);
  const result = document.getElementById('result');

  // Reset any previous classes
  result.classList.remove('result-green', 'result-red');

  if (isNaN(total) || isNaN(attended) || total <= 0 || attended < 0 || attended > total) {
    result.innerHTML = `<img src="./icons/caution.png" alt="Warning" style="width: 20px; vertical-align: middle; margin-right: 8px;"> Please enter valid class numbers.`;
    result.classList.add('result-red');
    return;
  }

  const percentage = (attended / total) * 100;
  let message = `Your attendance is ${percentage.toFixed(2)}%. <br>`;

  if (percentage < 75) {
    message += `<img src="./icons/delete.png" alt="No Bunk" style="width: 20px; vertical-align: middle; margin-right: 8px;"> You cannot bunk any more classes!`;
    result.classList.add('result-red');
  } else {
    const maxBunk = Math.floor((attended - (0.75 * total)) / 0.25);
    if (maxBunk === 0) {
      message += `<img src="./icons/caution.png" alt="Edge" style="width: 20px; vertical-align: middle; margin-right: 8px;"> You're just at the edge. Bunking now may drop your attendance.`;
    } else {
      message += `<img src="./icons/check.png" alt="OK" style="width: 20px; vertical-align: middle; margin-right: 8px;"> You can bunk up to ${maxBunk} more class${maxBunk > 1 ? 'es' : ''}.`;
    }
    result.classList.add('result-green');
  }

  result.innerHTML = message;
}
