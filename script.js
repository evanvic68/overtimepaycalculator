function calculateOvertime() {
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const multiplier = parseFloat(document.getElementById('multiplier').value);
    const overtimeHours = parseFloat(document.getElementById('overtimeHours').value);

    if (isNaN(hourlyRate) || isNaN(multiplier) || isNaN(overtimeHours)) {
      document.getElementById('result').innerHTML = "Please fill in all fields correctly.";
      return;
    }

    const overtimeRate = hourlyRate * multiplier;
    const overtimePay = overtimeRate * overtimeHours;

    document.getElementById('result').innerHTML = `
      <strong>Overtime Rate:</strong> $${overtimeRate.toFixed(2)}<br>
      <strong>Total Overtime Pay:</strong> $${overtimePay.toFixed(2)}
    `;
  }