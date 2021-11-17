function Calcular() {
  if (aperteiRed2 == true && aperteiBlue2 == true && aperteiGreen2 == true) {
    fotografia = cam.get();
    fotografia.loadPixels();
    cam.stop();

    aperteiRed1 = false;
    aperteiGreen1 = false;
    aperteiBlue1 = false;
    fotosTiradas = 1;
  }
}
