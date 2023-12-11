const CryptoJS = require("crypto-js");

const names = ["Bpk/Ibu/Saudara/i", "Bpk/Ibu/Saudara/i", "Neni K", "Eka M", "Febrian P", "Adityawan C"];
const encryptionKey = "SecretKey123"; // Ganti dengan kunci yang sesuai dengan kebutuhan Anda
let generate_guest_list = [];

function encryptId(id, key) {
  const encrypted = CryptoJS.AES.encrypt(id, key).toString();
  const base64Encrypted = btoa(encrypted);
  const filteredEncrypted = base64Encrypted.replace(/[^a-z0-9]/gi, "");
  return filteredEncrypted;
}

function generateGuestList() {
  generate_guest_list = names.map((name, index) => {
    const id = (index + 1).toString().padStart(4, "0"); // Generate ID
    const encryptedId = encryptId(id, encryptionKey);
    return {
      id: id,
      encryptedId: encryptedId,
      name: name,
      isPublic: false,
      isPhotoShow: true,
      isShowWeddingGift: true
    };
  });
  console.log(generate_guest_list)
}

function decryptId(encryptedId) {
  const base64Encrypted = atob(encryptedId);
  const decrypted = CryptoJS.AES.decrypt(base64Encrypted, encryptionKey).toString(CryptoJS.enc.Utf8);
  return decrypted;
}
// generateGuestList()
export {generate_guest_list, decryptId, generateGuestList};