function mousePressed() {
  if (aperteiRed1 == true && mouseX >= 30 && mouseX <= 670 && mouseY >= 210 && mouseY <= 690) {
    aperteiRed2 = true;
    palpiteRedX = mouseX;
    palpiteRedY = mouseY;
  }

  if (aperteiGreen1 == true && mouseX >= 30 && mouseX <= 670 && mouseY >= 210 && mouseY <= 690) {
    aperteiGreen2 = true;
    palpiteGreenX = mouseX;
    palpiteGreenY = mouseY;
  }

  if (aperteiBlue1 == true && mouseX >= 30 && mouseX <= 670 && mouseY >= 210 && mouseY <= 690) {
    aperteiBlue2 = true;
    palpiteBlueX = mouseX;
    palpiteBlueY = mouseY;
  }
}
