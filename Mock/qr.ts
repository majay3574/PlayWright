import * as QRCode from 'qrcode';
import { writeFileSync } from 'fs';

// Function to generate and save QR code
const generateQRCode = async (text: string, outputPath: string) => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(text);
    const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, '');
    writeFileSync(outputPath, base64Data, 'base64');
    console.log(`QR Code saved to ${outputPath}`);
  } catch (err) {
    console.error('Error generating QR Code:', err);
  }
};

// Example usage
const url = 'https://www.instagram.com/ajaymichael_07?igsh=cGdreTIyajV5N2h6&utm_source=qr';
generateQRCode(url, 'qrcode.png');
