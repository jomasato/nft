
(async () => {
  try {
    const publicKey = await window.ic.plug.requestConnect();
    console.log(`The connected user's public key is:`, publicKey);
  } catch (e) {
    console.log(e);
  }
})();
