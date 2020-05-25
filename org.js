function ValidatePayload() {
  this.presentParams = "";
}
ValidatePayload.prototype.requiredFields = (fieldList, params) => {
  presentParams = Object.keys(params);
  const failedList = [];
  fieldList.forEach((element) => {
    if (!presentParams.includes(element)) {
      failedList.push(element);
    }
    if (failedList.length > 0) {
      console.log(`${failedList} is not present`);
    }
  });
  return params;
};

ValidatePayload.prototype.payloadType = (params, matchPhoneNumber) => {
  let testPhoneNumber = matchPhoneNumber.test(params.phoneNumber);
  if (typeof params.name !== "string" || typeof params.name === "undefined") {
    const text = "name is not of string type";
    throw new Error(text);
  }
  if (!testPhoneNumber) {
    const text = "phoneNumber not a valid expression";
    throw new Error(text);
  }
  if (typeof params.address !== "string" || params.address.length < 4) {
    const text = "address must be sring of minimum length 4";
    throw new Error(text);
  }

  return params;
};

const obj = new ValidatePayload();
obj.requiredFields(
  ["name", "email", "address"],
  (user = {
    name: "",
    phoneNumber: "",
    address: "",
  })
);

obj.payloadType(
  (user = {
    name: "dolapo",
    phoneNumber: "+234-807-5779204",
    address: "leonard",
  }),
  /^[+]+\d{4,16}/
);

// const user = {
//   boy: "great",
// };
// console.log(user.boy.length);
