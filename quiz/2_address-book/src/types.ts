 interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

 interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;  
}

 enum PhoneType{ 
  Home ="home",
  Office = "office",
  studio = "studio",
}

export {Contact,PhoneType}