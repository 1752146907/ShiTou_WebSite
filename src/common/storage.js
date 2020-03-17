const token_key = 'token_1.0.0'; 
const user_key = 'user_1.0.0'; 
const wallet_code = 'wallet_code_1.0.0'; 

function getToken() {
  let token = localStorage.getItem(token_key);

  if (token === null || typeof (token) === 'undefined') {
    return '';
  }

  return token;
}
function setToken(token) {
  // sessionStorage.clear();
  // localStorage.clear();
  
  localStorage.setItem(token_key, token);
}

function getUser() {
  let user = localStorage.getItem(user_key); 

  return user;
}

function setUser(user) { 
  
  localStorage.setItem(user_key, user);
}

function getWalletCode() {
  let WalletCode = localStorage.getItem(wallet_code); 

  return WalletCode;
}

function setWalletCode(WalletCode) { 
  
  localStorage.setItem(wallet_code, WalletCode);
}


 
export default {
  getToken: getToken,                                     // token
  setToken: setToken,
  getUser: getUser,                                      // user信息
  setUser: setUser,
  getWalletCode: getWalletCode,                          // 请求钱包code
  setWalletCode: setWalletCode
};
